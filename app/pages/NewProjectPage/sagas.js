import { select, takeLatest, call, put } from 'redux-saga/effects';
import { getSystemListApi, saveProjectApi, getRoomCategoriesApi } from 'utils/api/requests';
import { GET_SYSTEM_LIST_REQUEST, SAVE_PROJECT_REQUEST, GET_ROOM_CATEGORIES_REQUEST, GET_ROOM_CATEGORIES_SUCCESS } from './constants';
import { getSystemListSuccess, getRoomCategoriesSuccess } from './actions';


export function* getSystemList() {
  try {
    const response = yield call(getSystemListApi);
    yield put(getSystemListSuccess(response.data.systems));
  }
  catch (e) {
  }
}

export function* saveProject(data) {
  try {
    const response = yield call(saveProjectApi, data);
  }
  catch (e) {
  }
}

export function* getRoomCategories() {
  try {
    const response = yield call(getRoomCategoriesApi);
    const datas = response.data.room_categories.map((category) => {
      return { value: category.id, label: category.room_name };
    });
    yield put(getRoomCategoriesSuccess(datas));
  }
  catch (e) {
  }
}

export function* newProjectSagas() {
  yield takeLatest(GET_SYSTEM_LIST_REQUEST, getSystemList);
  yield takeLatest(SAVE_PROJECT_REQUEST, saveProject);
  yield takeLatest(GET_ROOM_CATEGORIES_REQUEST, getRoomCategories);
}

export default [
  newProjectSagas,
];