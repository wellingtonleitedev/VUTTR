import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { fetchToolsSuccess } from './actions';

export function* fetchTools() {
  const { data } = yield call(api.get, '/tools');

  yield put(fetchToolsSuccess(data));
}
