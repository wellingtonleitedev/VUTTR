/* eslint-disable no-underscore-dangle */
import { call, put } from 'redux-saga/effects';
import {
  toastNewToolSuccess,
  toastRemovedToolSuccess,
  toastNewToolError,
  toastError,
} from '../../../helpers';
import api from '../../../services/api';
import { fetchToolsSuccess } from './actions';
import session from '../../../services/session';

export function* fetchTools({ payload }) {
  const { params } = payload;

  try {
    const { data } = yield call(api.get, `/tools`, { params });
    yield put(fetchToolsSuccess(data));
  } catch (err) {
    session(err);
    toastError('you are probably not authorized');
  }
}

export function* addTool({ payload }) {
  const { title, link, description, tags } = payload;
  try {
    const { data } = yield call(api.post, '/tools', {
      title,
      link,
      description,
      tags,
    });

    yield put(fetchToolsSuccess(data));

    toastNewToolSuccess(
      `${payload.title} has been successfully added!`,
      payload
    );
  } catch (err) {
    session(err);
    const { data } = err.response;
    toastNewToolError(data.message, payload);
  }
}

export function* removeTool({ payload }) {
  const { id, title } = payload;
  try {
    const { data } = yield call(api.delete, `/tools/${id}`);

    yield put(fetchToolsSuccess(data));

    toastRemovedToolSuccess(`${title} has been successfully removed!`, payload);
  } catch (err) {
    session(err);
    const { data } = err.response;
    toastError(data.message);
  }
}
