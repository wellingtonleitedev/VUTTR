import { produce } from 'immer';

export default function modal(state = [], action) {
  switch (action.type) {
    case '@modal/HANDLE_FORM_MODAL':
      return produce(state, draft => {
        draft.tool = action.tool;
        draft.openForm = action.open;
      });
    case '@modal/HANDLE_VIEW_MODAL':
      return produce(state, draft => {
        draft.tool = action.tool;
        draft.openView = action.open;
      });
    case '@modal/HANDLE_REMOVED_MODAL':
      return produce(state, draft => {
        draft.tool = action.tool;
        draft.openRemoved = action.open;
      });
    default:
      return { ...state, openForm: false, openView: false, openRemoved: false };
  }
}
