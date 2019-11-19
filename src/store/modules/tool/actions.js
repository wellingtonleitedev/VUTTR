export function fetchToolsRequest() {
  return {
    type: '@tool/FETCH_REQUEST',
  };
}

export function fetchToolsSuccess() {
  return {
    type: '@tool/FETCH_SUCCESS',
    tool,
  };
}

export function addToolRequest(tool) {
  return {
    type: '@tool/ADD_REQUEST',
    tool,
  };
}

export function addToolSuccess(tool) {
  return {
    type: '@tool/ADD_SUCCESS',
    tool,
  };
}

export function removeToolRequest(id) {
  return {
    type: '@tool/REMOVE_REQUEST',
    id,
  };
}
