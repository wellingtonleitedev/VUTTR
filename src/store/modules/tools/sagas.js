import React from 'react';
import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import {
  fetchToolsSuccess,
  addToolSuccess,
  removeToolSuccess,
} from './actions';
import { toast } from 'react-toastify';
import { ToastContentError, ToastContentSuccess } from '../../../components';

export function* fetchTools() {
  const { data } = yield call(api.get, '/tools');

  yield put(fetchToolsSuccess(data));
}

export function* addTool({ tool }) {
  const { title, link, description, tags } = tool;

  if (!title || !link || !description || !tags.length) {
    toast.error(
      <ToastContentError>You need to fill in all the fields!</ToastContentError>
    );
  } else {
    yield call(api.post, '/tools', tool);

    yield put(addToolSuccess(tool));

    toast.success(
      <ToastContentSuccess>
        {tool.title} has been successfully added!
      </ToastContentSuccess>
    );
  }
}

export function* removeTool({ tool }) {
  try {
    yield call(api.delete, `/tools/${tool.id}`);

    yield put(removeToolSuccess(tool.id));

    toast.success(
      <ToastContentSuccess>
        {tool.title} has been successfully removed!
      </ToastContentSuccess>
    );
  } catch (err) {
    console.log(err);
  }
}
