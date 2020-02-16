import { produce } from 'immer';

export default function modal(state = {}, action) {
  switch (action.type) {
    case '@modal/HANDLE_FORM_MODAL':
      return produce(state, draft => {
        draft.tool = action.payload.tool;
        draft.openForm = action.payload.open;
        draft.isUpdate = action.payload.isUpdate;
        draft.tryAgain = action.payload.tryAgain;
      });
    case '@modal/HANDLE_VIEW_MODAL':
      return produce(state, draft => {
        draft.tool = action.payload.tool;
        draft.openView = action.payload.open;
      });
    case '@modal/HANDLE_REMOVED_MODAL':
      return produce(state, draft => {
        draft.tool = action.payload.tool;
        draft.openRemoved = action.payload.open;
      });
    default:
      return { ...state, openForm: false, openView: false, openRemoved: false };
  }
}
