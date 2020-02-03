import { produce } from 'immer';

const INITIAL_STATE = {
  token: undefined,
  signed: false,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGNIN_SUCCESS':
      return produce(state, draft => {
        draft.token = action.payload.token;
        draft.signed = true;
      });
    case '@auth/LOGOUT_SUCCESS':
      return produce(state, draft => {
        draft.token = undefined;
        draft.signed = false;
      });
    default:
      return state;
  }
}
