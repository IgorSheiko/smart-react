import {
  LOGOUT_REQUEST,
  PROFILE_UPDATE_REQUEST,
  PROFILE_UPDATE_SUCCESS,
  PASSWORD_UPDATE_REQUEST,
  PASSWORD_UPDATE_SUCCESS,
  DUEL_TIMES_UPDATE_REQUEST,
  GET_COUNTRIES_DATA_SUCCESS,
  DUEL_TIMES_UPDATE_SUCCESS,
} from './constants';

export function logoutRequest() {
  return {
    type: LOGOUT_REQUEST,
  };
}

export function profileUpdateRequest(form) {
  return {
    type: PROFILE_UPDATE_REQUEST,
    form,
  };
}

export function profileUpdateSuccess() {
  return {
    type: PROFILE_UPDATE_SUCCESS,
  };
}

export function passwordUpdateRequest(form) {
  return {
    type: PASSWORD_UPDATE_REQUEST,
    form,
  };
}

export function passwordUpdateSuccess(form) {
  return {
    type: PASSWORD_UPDATE_SUCCESS,
    form,
  };
}

export function duelTimesUpdateRequest(form) {
  return {
    type: DUEL_TIMES_UPDATE_REQUEST,
    form,
  };
}

export function getCountriesSuccessRequest(data) {
  return {
    type: GET_COUNTRIES_DATA_SUCCESS,
    data,
  };
}

export function duelTimesUpdateSuccess() {
  return {
    type: DUEL_TIMES_UPDATE_SUCCESS,
  };
}
