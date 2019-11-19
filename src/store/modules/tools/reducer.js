const INITIAL_STATE = {
  data: [],
};

export default function tools(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'REQUEST_TOOLS':
      return {
        ...state,
        data: action.payload,
      };
    case 'SEARCH_TOOLS':
      return {
        ...state,
        data: action.payload,
      };
    case 'ADD_TOOLS':
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    default:
      return { ...state };
  }
}
