import { all, takeLatest } from 'redux-saga/effects';
import { fetchTools, addTool, removeTool, searchTools } from './tools/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest('@tool/FETCH_REQUEST', fetchTools),
    takeLatest('@tool/SEARCH_REQUEST', searchTools),
    takeLatest('@tool/ADD_REQUEST', addTool),
    takeLatest('@tool/REMOVE_REQUEST', removeTool),
  ]);
}
