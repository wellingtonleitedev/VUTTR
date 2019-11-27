export function handleModal(open) {
  return {
    type: '@modal/HANDLE_MODAL',
    open,
  };
}

export function handleFormModal(tool, open) {
  return {
    type: '@modal/HANDLE_FORM_MODAL',
    tool,
    open,
  };
}

export function handleViewModal(tool, open) {
  return {
    type: '@modal/HANDLE_VIEW_MODAL',
    tool,
    open,
  };
}

export function handleRemovedModal(tool, open) {
  return {
    type: '@modal/HANDLE_REMOVED_MODAL',
    tool,
    open,
  };
}
