import { takeLatest, call, put } from 'redux-saga/effects';
import { getUserInformationApi } from 'utils/api/requests';
import { GET_USER_INFORMATION_REQUEST } from './constants';
import { getUserInformationSuccess } from './actions';

export function* getUserInformation(data) {
  try {
    const response = yield call(getUserInformationApi, data);
    yield put(getUserInformationSuccess(response.data.user));
  }
  catch (e) {
  }
}

export function* UserPageSagas() {
  yield takeLatest(GET_USER_INFORMATION_REQUEST, getUserInformation);
}

export default [
  UserPageSagas,
];
