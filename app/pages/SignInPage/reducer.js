import { fromJS } from 'immutable';

import {
  SIGN_IN_REQUEST,
} from './constants';

const initialState = fromJS({
  data: {},
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return state
        .set('data', action.form);
    default:
      return state;
  }
}

export default loginReducer;
