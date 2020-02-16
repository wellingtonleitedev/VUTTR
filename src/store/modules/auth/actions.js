export function signinRequest(email, password) {
  return {
    type: '@auth/SIGNIN_REQUEST',
    payload: { email, password },
  };
}

export function signupRequest(name, email, password) {
  return {
    type: '@auth/SIGNUP_REQUEST',
    payload: { name, email, password },
  };
}

export function signinSuccess(user, token) {
  return {
    type: '@auth/SIGNIN_SUCCESS',
    payload: { user, token },
  };
}

export function logoutRequest() {
  return {
    type: '@auth/LOGOUT_REQUEST',
  };
}

export function logoutSuccess() {
  return {
    type: '@auth/LOGOUT_SUCCESS',
  };
}

export function authFailure() {
  return {
    type: '@auth/FAILURE',
  };
}
