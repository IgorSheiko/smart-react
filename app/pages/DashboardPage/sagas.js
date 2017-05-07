import { browserHistory } from 'react-router';
import { select, takeLatest, call, put } from 'redux-saga/effects';

import { setUserData } from 'containers/App/actions';
import { GET_COUNTRIES_DATA_REQUEST, UPDATE_AVATAR_REQUEST } from 'containers/App/constants';
import { signOutApi, updateProfileApi, updateDuelTimesApi, getCountriesApi, updateAvatarApi } from 'utils/api/requests';
import { makeSelectProfileUpdateData, makeSelectDuelTimesUpdateData } from './selectors';
import { LOGOUT_REQUEST, PROFILE_UPDATE_REQUEST, PASSWORD_UPDATE_REQUEST, DUEL_TIMES_UPDATE_REQUEST } from './constants';
import { getCountriesSuccessRequest, duelTimesUpdateSuccess, profileUpdateSuccess, passwordUpdateSuccess } from './actions';

export function* logout() {
  try {
    yield call(signOutApi);
    localStorage.clear();
    browserHistory.push('/sign_in');
  }
  catch (e) {
  }
}

export function* updateProfile() {
  const data = yield select(makeSelectProfileUpdateData());
  try {
    const response = yield call(updateProfileApi, data);
    const user = response.data.user;
    yield put(setUserData(user));
    yield put(profileUpdateSuccess());
  }
  catch (e) {
  }
}

export function* updatePassword() {
  const data = yield select(makeSelectProfileUpdateData());
  try {
    const response = yield call(updateProfileApi, data);
    const user = response.data.user;
    yield put(setUserData(user));
    yield put(passwordUpdateSuccess());
  }
  catch (e) {
  }
}

export function* updateDuelTimes() {
  const data = yield select(makeSelectDuelTimesUpdateData());
  try {
    const response = yield call(updateDuelTimesApi, data);
    const user = response.data.user;
    yield put(setUserData(user));
    yield put(duelTimesUpdateSuccess());
  }
  catch (e) {
  }
}

export function* getCountriesData() {
  try {
    const response = yield call(getCountriesApi);
    const datas = response.data.countries.map((country) => {
      return { value: country.id, label: country.name };
    });
    yield put(getCountriesSuccessRequest(datas));
  }
  catch (e) {
  }
}

export function* updateAvatar(data) {
  try {
    const response = yield call(updateAvatarApi, data.data);
    const user = response.data.user;

    yield put(setUserData(user));
  }
  catch (e) {
  }
}

export function* dashboardPageSagas() {
  yield takeLatest(LOGOUT_REQUEST, logout);
  yield takeLatest(PROFILE_UPDATE_REQUEST, updateProfile);
  yield takeLatest(PASSWORD_UPDATE_REQUEST, updatePassword);
  yield takeLatest(DUEL_TIMES_UPDATE_REQUEST, updateDuelTimes);
  yield takeLatest(GET_COUNTRIES_DATA_REQUEST, getCountriesData);
  yield takeLatest(UPDATE_AVATAR_REQUEST, updateAvatar);
}

export default [
  dashboardPageSagas,
];
