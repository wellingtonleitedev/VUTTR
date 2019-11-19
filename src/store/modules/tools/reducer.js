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
    case 'SEARCH_TOOLS':
      return produce(state, draft => {
        draft.data = action.tool;
      });
    case '@tool/ADD_SUCCESS':
      return produce(state, draft => {
        console.log(action);
        draft.data = draft.data.push(action.tool);
      });
    case '@tool/REMOVE_SUCCESS':
      return produce(state, draft => {
        draft.data = action.tool;
      });
    default:
      return { ...state };
  }
}
