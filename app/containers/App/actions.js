import {
  SET_USER_DATA,
  SET_CASES_THEMES_DATA,
  GET_COUNTRIES_DATA_REQUEST,
  UPDATE_AVATAR_REQUEST,
  UPDATE_AVATAR_SUCCESS,
} from './constants';

export function setUserData(userData) {
  return {
    type: SET_USER_DATA,
    userData,
  };
}

export function setCasesThemesData(casesThemes) {
  return {
    type: SET_CASES_THEMES_DATA,
    casesThemes,
  };
}

export function getCountriesRequest() {
  return {
    type: GET_COUNTRIES_DATA_REQUEST,
  };
}

export function updateAvatarRequest(data) {
  return {
    type: UPDATE_AVATAR_REQUEST,
    data,
  };
}

export function updateAvatarSuccess(avatar) {
  return {
    type: UPDATE_AVATAR_SUCCESS,
    avatar,
  };
}
