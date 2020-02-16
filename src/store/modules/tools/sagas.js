/* eslint-disable no-underscore-dangle */
import { call, put } from 'redux-saga/effects';
import {
  toastNewToolSuccess,
  toastRemovedToolSuccess,
  toastNewToolError,
} from '../../../helpers';
import api from '../../../services/api';
import { fetchToolsSuccess, actionFailure } from './actions';
import { ROUTES } from '../../../constraints';

export function* fetchTools({ payload }) {
  const { params } = payload;

  const { data } = yield call(api.get, ROUTES.TOOLS, { params });

  if (!data) return;

  yield put(fetchToolsSuccess(data));
}

export function* addTool({ payload }) {
  const { title, link, description, tags } = payload;

  if (!title || !description || !(tags && tags.length)) {
    yield put(actionFailure());
    toastNewToolError('You need to fill all required fiels', payload);
    return;
  }

  const { data } = yield call(api.post, ROUTES.TOOLS, {
    title,
    link,
    description,
    tags,
  });

  if (!data) {
    yield put(actionFailure());
  } else {
    yield put(fetchToolsSuccess(data));
    toastNewToolSuccess(
      `${payload.title} has been successfully added!`,
      payload
    );
  }
}

export function* updateTool({ payload }) {
  const { id, title, link, description, tags } = payload;

  if (!title || !description || !(tags && tags.length)) {
    yield put(actionFailure());
    toastNewToolError('You need to fill all required fiels', payload);
    return;
  }

  const { data } = yield call(api.put, `${ROUTES.TOOLS}/${id}`, {
    title,
    link,
    description,
    tags,
  });

  if (!data) {
    yield put(actionFailure());
  } else {
    yield put(fetchToolsSuccess(data));
    toastNewToolSuccess(
      `${payload.title} has been successfully updated!`,
      payload
    );
  }
}

export function* removeTool({ payload }) {
  const { id, title } = payload;

  const { data } = yield call(api.delete, `${ROUTES.TOOLS}/${id}`);

  if (!data) {
    yield put(actionFailure());
  } else {
    yield put(fetchToolsSuccess(data));
    toastRemovedToolSuccess(`${title} has been successfully removed!`, payload);
  }
}
