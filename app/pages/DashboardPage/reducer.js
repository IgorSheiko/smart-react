import { fromJS } from 'immutable';

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


const initialState = fromJS({
  profileForm: {},
  countriesData: undefined,
  isLoadingDuelsTimeTableForm: false,
  isLoadingUserDataUpdateForm: false,
  isLoadingPasswordUpdateForm: false,
});

function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case LOGOUT_REQUEST:
      return state;
    case PROFILE_UPDATE_REQUEST:
      return state
        .set('profileForm', action.form)
        .set('isLoadingUserDataUpdateForm', true);
    case PROFILE_UPDATE_SUCCESS:
      return state
        .set('isLoadingUserDataUpdateForm', false);
    case PASSWORD_UPDATE_REQUEST:
      return state
        .set('profileForm', action.form)
        .set('isLoadingPasswordUpdateForm', true);
    case PASSWORD_UPDATE_SUCCESS:
      return state
        .set('isLoadingPasswordUpdateForm', false);
    case DUEL_TIMES_UPDATE_REQUEST:
      return state
        .set('duelsTimetableForm', action.form)
        .set('isLoadingDuelsTimeTableForm', true);
    case DUEL_TIMES_UPDATE_SUCCESS:
      return state
        .set('isLoadingDuelsTimeTableForm', false);
    case GET_COUNTRIES_DATA_SUCCESS:
      return state
        .set('countriesData', action.data);
    default:
      return state;
  }
}

export default dashboardReducer;
