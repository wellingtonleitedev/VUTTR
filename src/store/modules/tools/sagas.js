import { call, put, select } from 'redux-saga/effects';
import {
  toastNewToolSuccess,
  toastNewToolError,
  toastRemovedToolSuccess,
  toastError,
} from '../../../helpers';
import api from '../../../services/api';
import { fetchToolsSuccess, addToolSuccess } from './actions';

export function* fetchTools() {
  const { data } = yield call(api.get, '/tools');

  yield put(fetchToolsSuccess(data));
}

export function* searchTools({ text, checked }) {
  let tools;

  if (checked) {
    tools = yield call(api.get, `/tools?tags_like=${text}`);
  } else {
    tools = yield call(api.get, `/tools?q=${text}`);
  }

  yield put(fetchToolsSuccess(tools.data));
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
    yield call(api.delete, `/tools/${tool.id}`);

    const tools = yield select(state => {
      return state.tools.data.filter(t => t.id !== tool.id);
    });

    yield put(fetchToolsSuccess(tools));

    toastRemovedToolSuccess(
      `${tool.title} has been successfully removed!`,
      tool
    );
  } catch (err) {
    toastError('There was a problem! Please, try later');
  }
}
