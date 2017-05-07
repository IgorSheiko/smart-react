import {
  GET_SYSTEM_LIST_REQUEST,
  GET_SYSTEM_LIST_SUCCESS,
  SAVE_PROJECT_REQUEST,
  GET_ROOM_CATEGORIES_REQUEST,
  GET_ROOM_CATEGORIES_SUCCESS,
} from './constants';

export const getSystemListRequest = () => ({
  type: GET_SYSTEM_LIST_REQUEST,
});

export const getSystemListSuccess = (data) => ({
  type: GET_SYSTEM_LIST_SUCCESS,
  data,
});

export const saveProjectrequest = (data) => ({
  type: SAVE_PROJECT_REQUEST,
  data,
});


export function getRoomCategoriesSuccess(data) {
  return {
    type: GET_ROOM_CATEGORIES_SUCCESS,
    data,
  };
}

export function getRoomCategoriesRequest() {
  return {
    type: GET_ROOM_CATEGORIES_REQUEST,
  };
}