export function signinRequest(email, password) {
  return {
    type: '@auth/SIGNIN_REQUEST',
    payload: { email, password },
  };
}

export function signinSuccess(user, token) {
  return {
    type: '@auth/SIGNIN_SUCCESS',
    payload: { user, token },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGNIN_ERROR',
  };
}

export function signupRequest(name, email, password) {
  return {
    type: '@auth/SIGNUP_REQUEST',
    payload: { name, email, password },
  };
}
