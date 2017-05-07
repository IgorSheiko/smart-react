import { select, takeLatest, call, put } from 'redux-saga/effects';
import { browserHistory } from 'react-router';

import { GET_COUNTRIES_DATA_REQUEST } from 'containers/App/constants';
import { signUpApi, getCountriesApi } from 'utils/api/requests';
import { SIGN_UP_REQUEST } from './constants';
import { makeSelectSignUpData } from './selectors';
import { getCountriesSuccessRequest } from './actions';


export function* signUpWithData() {
  const data = yield select(makeSelectSignUpData());

  try {
    const response = yield call(signUpApi, data);

    localStorage.setItem('otp', response.data.otp);
    localStorage.setItem('user_id', response.data.id);
    browserHistory.push('/');
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

export function* signUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUpWithData);
  yield takeLatest(GET_COUNTRIES_DATA_REQUEST, getCountriesData);
}

// Bootstrap sagas
export default [
  signUp,
];
