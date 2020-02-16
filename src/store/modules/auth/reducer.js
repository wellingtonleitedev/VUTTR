import { produce } from 'immer';

const INITIAL_STATE = {
  token: undefined,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGNIN_REQUEST':
      return produce(state, draft => {
        draft.loading = true;
      });
    case '@auth/SIGNUP_REQUEST':
      return produce(state, draft => {
        draft.loading = true;
      });
    case '@auth/LOGOUT_REQUEST':
      return produce(state, draft => {
        draft.loading = true;
      });
    case '@auth/SIGNIN_SUCCESS':
      return produce(state, draft => {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
      });
    case '@auth/LOGOUT_SUCCESS':
      return produce(state, draft => {
        draft.token = undefined;
        draft.signed = false;
        draft.loading = false;
      });
    case '@auth/FAILURE':
      return produce(state, draft => {
        draft.loading = false;
      });
    default:
      return state;
  }
}
