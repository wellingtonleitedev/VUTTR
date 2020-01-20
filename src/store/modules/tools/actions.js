export function fetchToolsRequest(params) {
  return {
    type: '@tool/FETCH_REQUEST',
    payload: { params },
  };
}

export function fetchToolsSuccess(data) {
  return {
    type: '@tool/FETCH_SUCCESS',
    data,
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

export function removeToolRequest(tool) {
  return {
    type: '@tool/REMOVE_REQUEST',
    tool,
  };
}

export function removeToolSuccess(id) {
  return {
    type: '@tool/REMOVE_SUCCESS',
    id,
  };
}
