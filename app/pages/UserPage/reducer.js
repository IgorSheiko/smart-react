import { fromJS } from 'immutable';

import {
  GET_USER_INFORMATION_REQUEST,
  GET_USER_INFORMATION_REQUEST_SUCCESS,
} from './constants';

const initialState = fromJS({
  user: undefined,
});

function pastDuelReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_INFORMATION_REQUEST:
      return state
        .set('userId', action.data);
    case GET_USER_INFORMATION_REQUEST_SUCCESS:
      return state
        .set('user', action.data);
    default:
      return state;
  }
}

export default pastDuelReducer;
