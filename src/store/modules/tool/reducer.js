import { produce } from 'immer';

export default function tools(state = [], action) {
  switch (action.type) {
    case '@tool/FETCH_SUCCESS':
      return {
        ...state,
        data: action.payload,
      };
    case 'SEARCH_TOOLS':
      return {
        ...state,
        data: action.payload,
      };
    case '@tool/ADD_SUCCESS':
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    default:
      return { ...state };
  }
}
