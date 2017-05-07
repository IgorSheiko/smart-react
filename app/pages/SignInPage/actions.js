import {
  SIGN_IN_REQUEST,
} from './constants';

export function loginRequest(form) {
  return {
    type: SIGN_IN_REQUEST,
    form,
  };
}
