import React from 'react';
import { call, put, select } from 'redux-saga/effects';
import api from '../../../services/api';
import { fetchToolsSuccess, addToolSuccess } from './actions';
import { toast } from 'react-toastify';
import { ToastContentError, ToastContentSuccess } from '../../../components';

export function* fetchTools() {
  const { data } = yield call(api.get, '/tools');

  yield put(fetchToolsSuccess(data));
}

export function* searchTools({ text, checked }) {
  let tools = undefined;

  if (checked) {
    tools = yield call(api.get, `/tools?tags_like=${text}`);
  } else {
    tools = yield call(api.get, `/tools?q=${text}`);
  }

  yield put(fetchToolsSuccess(tools.data));
}

export function* addTool({ tool }) {
  const { title, link, description, tags } = tool;

  if (!title || !link || !description || !tags.length) {
    return toast.error(
      <ToastContentError>You need to fill in all the fields!</ToastContentError>
    );
  }

  try {
    const { data } = yield call(api.post, '/tools', tool);

    yield put(addToolSuccess(data));

    toast.success(
      <ToastContentSuccess>
        <b>{tool.title}</b> has been successfully added!
      </ToastContentSuccess>
    );
  } catch (err) {
    console.log(err);
  }
}

export function* removeTool({ tool }) {
  try {
    yield call(api.delete, `/tools/${tool.id}`);

    const tools = yield select(state => {
      return state.tools.data.filter(t => t.id !== tool.id);
    });

    yield put(fetchToolsSuccess(tools));

    toast.success(
      <ToastContentSuccess>
        <b>{tool.title}</b> has been successfully removed!
      </ToastContentSuccess>
    );
  } catch (err) {
    console.log(err);
  }
}
