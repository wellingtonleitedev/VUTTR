/* eslint-disable no-underscore-dangle */
import { call, put } from 'redux-saga/effects';
import {
  toastNewToolSuccess,
  toastNewToolError,
  toastRemovedToolSuccess,
  toastError,
} from '../../../helpers';
import api from '../../../services/api';
import {
  fetchToolsSuccess,
  addToolSuccess,
  removeToolSuccess,
} from './actions';

export function* fetchTools({ payload }) {
  const { params } = payload;

  const { data } = yield call(api.get, `/tools`, { params });
  yield put(fetchToolsSuccess(data));
}

export function* addTool({ payload }) {
  const { title, link, description, tags } = payload;
  try {
    const { data } = yield call(api.post, '/tools', { title, link, description, tags });

    yield put(fetchToolsSuccess(data));

    toastNewToolSuccess(`${payload.title} has been successfully added!`, payload);
  } catch (err) {
    toastError('There was a problem! Please, try later');
  }
}

export function* removeTool({ payload }) {
  const { id, title, link, description, tags } = payload
  try {
    const { data } = yield call(api.delete, `/tools/${id}`);

    yield put(fetchToolsSuccess(data));

    toastRemovedToolSuccess(
      `${title} has been successfully removed!`,
      payload
    );
  } catch (err) {
    toastError('There was a problem! Please, try later');
  }
}
