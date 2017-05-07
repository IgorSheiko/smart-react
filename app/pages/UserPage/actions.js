import {
  GET_USER_INFORMATION_REQUEST,
  GET_USER_INFORMATION_REQUEST_SUCCESS,
} from './constants';

export function getUserInformationRequest(id) {
  return {
    type: GET_USER_INFORMATION_REQUEST,
    id,
  };
}

export function getUserInformationSuccess(data) {
  return {
    type: GET_USER_INFORMATION_REQUEST_SUCCESS,
    data,
  };
}
