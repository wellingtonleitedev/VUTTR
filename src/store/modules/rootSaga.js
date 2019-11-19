import { all, takeLatest } from 'redux-saga/effects';
import { fetchTools } from './tool/sagas';

export default function* rootSaga() {
  return yield all([takeLatest('@tool/FETCH_REQUEST', fetchTools)]);
}
