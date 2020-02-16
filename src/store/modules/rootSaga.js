import { all, takeLatest } from 'redux-saga/effects';
import { fetchTools, addTool, updateTool, removeTool } from './tools/sagas';
import { fetchSignin, fetchSignup, fetchLogout } from './auth/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest('@auth/SIGNIN_REQUEST', fetchSignin),
    takeLatest('@auth/SIGNUP_REQUEST', fetchSignup),
    takeLatest('@auth/LOGOUT_REQUEST', fetchLogout),
    takeLatest('@tool/FETCH_REQUEST', fetchTools),
    takeLatest('@tool/ADD_REQUEST', addTool),
    takeLatest('@tool/UPDATE_REQUEST', updateTool),
    takeLatest('@tool/REMOVE_REQUEST', removeTool),
  ]);
}
