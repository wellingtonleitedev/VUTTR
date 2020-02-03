import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { toastError } from '../../../helpers';
import { signinSuccess, logoutSuccess } from './actions';
import history from '../../../services/history';

export function* fetchSignin({ payload }) {
  const { email, password } = payload;
  try {
    const { data } = yield call(api.post, '/signin', { email, password });
    yield put(signinSuccess(data.user, data.token));
    history.push('/index');
  } catch (err) {
    const { data } = err.response;
    toastError(data.message);
  }
}

export function* fetchSignup({ payload }) {
  const { name, email, password } = payload;

  try {
    const { data } = yield call(api.post, '/signup', { name, email, password });
    yield put(signinSuccess(data.user, data.token));
    history.push('/index');
  } catch (err) {
    const { data } = err.response;
    toastError(data.message);
  }
}

export function* fetchLogout() {
  yield put(logoutSuccess());
  history.push('/');
}
