import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { toastError, toastSuccess } from '../../../helpers';
import { signinSuccess } from './actions';
import history from '../../../services/history';

export function* fetchSignin({ payload }) {
  const { email, password } = payload;

  if (!email || !password) {
    toastError('You need fill all fields!');
  } else {
    try {
      const { data } = yield call(api.post, '/signin', { email, password });
      yield put(signinSuccess(data.user, data.token));

      history.push('/index');
    } catch (err) {
      toastError(
        'Your credentials is not correct. Please verify and try again'
      );
    }
  }
}

export function* fetchSignup({ user }) {
  if (!user.name || !user.email || !user.password) {
    toastError('You need fill all fields!');
  } else {
    try {
      yield call(api.post, '/signup', user);
      history.push('/index');
      toastSuccess('Account create with success');
    } catch (err) {
      toastError(
        'Your credentials is not correct. Please verify and try again'
      );
    }
  }
}
