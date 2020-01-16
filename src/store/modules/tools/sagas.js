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

export function* addTool({ tool }) {
  const { title, link, description, tags } = tool;

  if (!title || !link || !description || !tags || !tags.length) {
    toastNewToolError('You need to fill in all the fields!', tool);
  } else {
    try {
      const { data } = yield call(api.post, '/tools', tool);

      yield put(addToolSuccess(data));

      toastNewToolSuccess(`${data.title} has been successfully added!`, data);
    } catch (err) {
      toastError('There was a problem! Please, try later');
    }
  }
}

export function* removeTool({ tool }) {
  try {
    yield call(api.delete, `/tools/${tool._id}`);

    yield put(removeToolSuccess(tool._id));

    toastRemovedToolSuccess(
      `${tool.title} has been successfully removed!`,
      tool
    );
  } catch (err) {
    toastError('There was a problem! Please, try later');
  }
}
