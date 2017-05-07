import {
  GET_PROJECTS_REQUEST,
  GET_PROJECTS_SUCCESS,
} from './constants';

export function getProjectsSuccess(data) {
  return {
    type: GET_PROJECTS_SUCCESS,
    data,
  };
}

export function getProjectsRequest() {
  return {
    type: GET_PROJECTS_REQUEST,
  };
}