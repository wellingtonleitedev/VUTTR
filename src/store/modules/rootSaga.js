import { all, takeLatest } from 'redux-saga/effects';
import { fetchTools, addTool, removeTool } from './tools/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest('@tool/FETCH_REQUEST', fetchTools),
    takeLatest('@tool/ADD_REQUEST', addTool),
    takeLatest('@tool/REMOVE_REQUEST', removeTool),
  ]);
}
