import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { signinSuccess, logoutSuccess } from './actions';
import history from '../../../services/history';

export function* fetchSignin({ payload }) {
  const { email, password } = payload;
  const { data } = yield call(api.post, '/signin', { email, password });

  if (!data) return;

  yield put(signinSuccess(data.user, data.token));
  history.push('/index');
}

export function* fetchSignup({ payload }) {
  const { name, email, password } = payload;
  const { data } = yield call(api.post, '/signup', { name, email, password });

  if (!data) return;

  yield put(signinSuccess(data.user, data.token));
  history.push('/index');
}

export function* fetchLogout() {
  yield put(logoutSuccess());
  history.push('/');
}
