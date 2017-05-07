import {
  SIGN_UP_REQUEST,
  GET_COUNTRIES_DATA_SUCCESS,
} from './constants';


export function signUpRequest(registrationForm) {
  return {
    type: SIGN_UP_REQUEST,
    registrationForm,
  };
}

export function getCountriesSuccessRequest(data) {
  return {
    type: GET_COUNTRIES_DATA_SUCCESS,
    data,
  };
}
