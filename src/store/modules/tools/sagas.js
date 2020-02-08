/* eslint-disable no-underscore-dangle */
import { call, put } from 'redux-saga/effects';
import {
  toastNewToolSuccess,
  toastRemovedToolSuccess,
  toastNewToolError,
} from '../../../helpers';
import api from '../../../services/api';
import { fetchToolsSuccess } from './actions';

export function* fetchTools({ payload }) {
  const { params } = payload;

  const { data } = yield call(api.get, `/tools`, { params });

  if (!data) return;

  yield put(fetchToolsSuccess(data));
}

export function* addTool({ payload }) {
  const { title, link, description, tags } = payload;

  if (!title || !description || !(tags && tags.length)) {
    toastNewToolError('You need to fill all required fiels', payload);
    return;
  }

  const { data } = yield call(api.post, '/tools', {
    title,
    link,
    description,
    tags,
  });

  if (!data) return;

  yield put(fetchToolsSuccess(data));
  toastNewToolSuccess(`${payload.title} has been successfully added!`, payload);
}

export function* removeTool({ payload }) {
  const { id, title } = payload;

  const { data } = yield call(api.delete, `/tools/${id}`);

  if (!data) return;

  yield put(fetchToolsSuccess(data));

  toastRemovedToolSuccess(`${title} has been successfully removed!`, payload);
}
