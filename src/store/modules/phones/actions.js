export function createPhoneRequest(data) {
  return {
    type: '@phones/CREATE_PHONE_REQUEST',
    payload: { data },
  };
}

export function createPhoneSuccess(phone) {
  return {
    type: '@phones/CREATE_PHONE_SUCCESS',
    payload: { phone },
  };
}

export function updatePhoneRequest(id, data) {
  return {
    type: '@phones/UPDATE_PHONE_REQUEST',
    payload: { id, data },
  };
}

export function updatePhoneSuccess(phone) {
  return {
    type: '@phones/UPDATE_PHONE_SUCCESS',
    payload: { phone },
  };
}

export function removePhoneRequest(id) {
  return {
    type: '@phones/REMOVE_PHONE_REQUEST',
    payload: { id },
  };
}

export function removePhoneSuccess(id) {
  return {
    type: '@phones/REMOVE_PHONE_SUCCESS',
    payload: { id },
  };
}

export function listPhoneRequest(page) {
  return {
    type: '@phones/LIST_PHONE_REQUEST',
    payload: { page },
  };
}

export function listPhoneSuccess(phones) {
  return {
    type: '@phones/LIST_PHONE_SUCCESS',
    payload: { phones },
  };
}
