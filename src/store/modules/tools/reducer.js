/* eslint-disable no-underscore-dangle */
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
        draft.data = action.payload.data.docs;
        draft.page = action.payload.data.page;
        draft.pages = action.payload.data.pages;
      });
    default:
      return state;
  }
}
