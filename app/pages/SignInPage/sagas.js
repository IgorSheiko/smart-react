import { select, takeLatest, call, put } from 'redux-saga/effects';
import { browserHistory } from 'react-router';

import { setUserData } from 'containers/App/actions';
import { signInApi } from 'utils/api/requests';
import { SIGN_IN_REQUEST } from './constants';
import { makeSelectLoginData } from './selectors';


export function* signIn() {
  const data = yield select(makeSelectLoginData());
  try {
    const response = yield call(signInApi, data);
    const user = response.data.user;
    const authToken = user.authentication_token;
    localStorage.setItem('auth_token', authToken);
    yield put(setUserData(user));
    browserHistory.push('/');
  }
  catch (e) {
  }
}

export function* signInPageSagas() {
  yield takeLatest(SIGN_IN_REQUEST, signIn);
}

// Bootstrap sagas
export default [
  signInPageSagas,
];
