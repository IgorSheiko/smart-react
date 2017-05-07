import { select, takeLatest, call, put } from 'redux-saga/effects';
import { getProjectsApi } from 'utils/api/requests';
import { GET_PROJECTS_REQUEST } from './constants';
import { getProjectsSuccess } from './actions';


export function* getProjects() {
  try {
    const response = yield call(getProjectsApi);

    yield put(getProjectsSuccess(response.data.projects));
  }
  catch (e) {
  }
}

export function* ProjectsSagas() {
  yield takeLatest(GET_PROJECTS_REQUEST, getProjects);
}

export default [
  ProjectsSagas,
];