import { fromJS } from 'immutable';

import {
  SIGN_UP_REQUEST,
  GET_COUNTRIES_DATA_SUCCESS,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  data: {},
  countriesData: undefined,
});

function signUpReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      return state
        .set('data', action.registrationForm);
    case GET_COUNTRIES_DATA_SUCCESS:
      return state
        .set('countriesData', action.data);
    default:
      return state;
  }
}

export default signUpReducer;
