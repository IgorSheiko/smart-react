import { fromJS } from 'immutable';

import {
  GET_SYSTEM_LIST_SUCCESS,
  GET_ROOM_CATEGORIES_SUCCESS,
} from './constants';

const initialState = fromJS({
  systemList: [],
  newProject: {},
  roomCategories: [],
});

function newProjectReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SYSTEM_LIST_SUCCESS:
      return state
        .set('systemList', action.data);
    case GET_ROOM_CATEGORIES_SUCCESS:
      return state
        .set('roomCategories', action.data);
    default:
      return state;
  }
}

export default newProjectReducer;
