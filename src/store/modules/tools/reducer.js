import { produce } from 'immer';

const INITIAL_STATE = {
  data: [],
};

export default function tools(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@tool/FETCH_SUCCESS':
      return produce(state, draft => {
        draft.data = action.tool;
      });
    case '@tool/ADD_SUCCESS':
      return produce(state, draft => {
        console.log(action);
        draft.data.push(action.tool);
      });
    default:
      return { ...state };
  }
}
