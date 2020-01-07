import { produce } from 'immer';

const INITIAL_STATE = {
  data: [],
  pages: 1,
  page: 1,
};

export default function tools(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@tool/FETCH_SUCCESS':
      return produce(state, draft => {
        draft.data = action.data.docs;
        draft.page = action.data.page;
        draft.pages = action.data.pages;
      });
    case '@tool/ADD_SUCCESS':
      return produce(state, draft => {
        draft.data.push(action.tool);
      });
    default:
      return { ...state };
  }
}
