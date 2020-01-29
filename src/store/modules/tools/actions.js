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

export function addToolRequest(title, link, description, tags) {
  return {
    type: '@tool/ADD_REQUEST',
    payload: { title, link, description, tags },
  };
}

export function removeToolRequest(id, title) {
  return {
    type: '@tool/REMOVE_REQUEST',
    payload: { id, title },
  };
}
