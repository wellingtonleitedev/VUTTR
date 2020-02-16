/* eslint-disable no-underscore-dangle */
import { produce } from 'immer';

const INITIAL_STATE = {
  data: [],
  pages: 1,
  page: 1,
  total: 0,
  limit: 5,
};

export default function tools(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@tool/FETCH_REQUEST':
      return produce(state, draft => {
        draft.loading = true;
      });
    case '@tool/ADD_REQUEST':
      return produce(state, draft => {
        draft.loading = true;
      });
    case '@tool/UPDATE_REQUEST':
      return produce(state, draft => {
        draft.loading = true;
      });
    case '@tool/REMOVE_REQUEST':
      return produce(state, draft => {
        draft.loading = true;
      });
    case '@tool/FETCH_SUCCESS':
      return produce(state, draft => {
        draft.data = action.payload.data.docs;
        draft.page = action.payload.data.page;
        draft.pages = action.payload.data.pages;
        draft.total = action.payload.data.total;
        draft.limit = action.payload.data.limit;
        draft.loading = false;
      });
    case '@tool/FAILURE':
      return produce(state, draft => {
        draft.loading = false;
      });
    default:
      return state;
  }
}
