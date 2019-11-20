export function fetchToolsRequest() {
  return {
    type: '@tool/FETCH_REQUEST',
  };
}

export function fetchToolsSuccess(tool) {
  return {
    type: '@tool/FETCH_SUCCESS',
    tool,
  };
}

export function searchToolsRequest(text, checked) {
  return {
    type: '@tool/SEARCH_REQUEST',
    text,
    checked,
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
