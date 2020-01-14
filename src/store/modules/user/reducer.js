import { produce } from 'immer';

const INITIAL_STATE = {
  profile: undefined,
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGNIN_SUCCESS':
      return produce(state, draft => {
        draft.profile = action.payload.user;
        console.log(state.profile);
      });
    default:
      return state;
  }
}
