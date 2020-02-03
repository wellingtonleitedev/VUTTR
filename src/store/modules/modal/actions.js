export function handleModal(open = false) {
  return {
    type: '@modal/HANDLE_MODAL',
    payload: { open },
  };
}

export function handleFormModal(tool = {}, open = false, tryAgain = false) {
  return {
    type: '@modal/HANDLE_FORM_MODAL',
    payload: { open, tool, tryAgain },
  };
}

export function handleViewModal(tool = {}, open = false) {
  return {
    type: '@modal/HANDLE_VIEW_MODAL',
    payload: { open, tool },
  };
}

export function handleRemovedModal(tool = {}, open = false) {
  return {
    type: '@modal/HANDLE_REMOVED_MODAL',
    payload: { open, tool },
  };
}
