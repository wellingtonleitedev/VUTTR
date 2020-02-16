import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { signinSuccess, logoutSuccess, authFailure } from './actions';
import history from '../../../services/history';
import { ROUTES } from '../../../constraints';

export function* fetchSignin({ payload }) {
  const { email, password } = payload;
  const { data } = yield call(api.post, ROUTES.SIGNIN, { email, password });

  if (!data) {
    yield put(authFailure());
  } else {
    yield put(signinSuccess(data.user, data.token));
    history.push('/index');
  }
}

export function* fetchSignup({ payload }) {
  const { name, email, password } = payload;
  const { data } = yield call(api.post, ROUTES.SIGNUP, {
    name,
    email,
    password,
  });

  if (!data) {
    yield put(authFailure());
  } else {
    yield put(signinSuccess(data.user, data.token));
    history.push('/index');
  }
}

export function* fetchLogout() {
  yield put(logoutSuccess());
  history.push('/');
}
