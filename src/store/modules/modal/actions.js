export function handleModal(open) {
  return {
    type: '@modal/HANDLE_MODAL',
    open,
  };
}

export function handleFormModal(open) {
  return {
    type: '@modal/HANDLE_FORM_MODAL',
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
