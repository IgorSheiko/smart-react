import axios from 'axios';
import * as PATHS from './paths';


export const axiosInstance = (needAuth = false) => {
  const SERVER_URL = process.env.BASE_URL;
  const authToken = needAuth ? localStorage.getItem('auth_token') : null;
  return axios.create({
    baseURL: `${SERVER_URL}/api/v1`,
    timeout: 15000,
    headers: {
      'Authorization': `Token token=${authToken}`,
    },
  });
};


// validations

export const checkEmailExist = (email, oldEmail = null) => {
  const instance = axiosInstance();
  const data = { email, old_email: oldEmail };

  return instance.get(PATHS.EMAIL_EXISTS_PATH, { params: data });
};

export const checkPasswordValid = (password) => {
  const instance = axiosInstance(true);
  const data = { password };

  return instance.get(PATHS.PASSWORD_VALID_PATH, { params: data });
};

export const checkOtpValid = (data) => {
  const instance = axiosInstance();

  return instance.get(PATHS.OTP_VALID_PATH, { params: data });
};

export const checkAuthExist = (data) => {
  const instance = axiosInstance();

  return instance.get(PATHS.AUTH_EXISTS_PATH, { params: data });
};

export const checkPhoneNumberExist = (phoneNumber) => {
  const instance = axiosInstance();
  const data = { phone_number: phoneNumber };

  return instance.get(PATHS.PHONE_NUMBER_EXISTS_PATH, { params: data });
};

// other calls

export const signInApi = (data) => {
  const instance = axiosInstance();

  return instance.post(PATHS.SIGN_IN_PATH, data);
};

export const signOutApi = () => {
  const instance = axiosInstance(true);

  return instance.post(PATHS.SIGN_OUT_PATH);
};

export const forgotPasswordApi = (data) => {
  const instance = axiosInstance();

  return instance.post(PATHS.PASSWORD_RESETS_PATH, data);
};

export const resetPasswordApi = (data) => {
  const instance = axiosInstance();

  return instance.put(PATHS.PASSWORD_RESETS_PATH, data);
};
export const updateProfileApi = (data) => {
  const instance = axiosInstance(true);

  return instance.put(`${PATHS.PROFILE_UPDATE_PATH}/${data.id}`, data);
};

export const updateDuelTimesApi = (data) => {
  const instance = axiosInstance(true);

  return instance.put(`${PATHS.PROFILE_UPDATE_PATH}/${data.id}${PATHS.DUEL_TIMES_UPDATE_PATH}`, data);
};

export const signUpApi = (data) => {
  const instance = axiosInstance();

  return instance.post(PATHS.SIGN_UP_PATH, data);
};

export const verifyOtpApi = (data) => {
  const instance = axiosInstance();

  return instance.post(PATHS.OTP_VERIFICATION_PATH, data);
};


 // DuelSearchPage calls
export const duelCaseThemesApi = (cancelToken) => {
  const instance = axiosInstance(true);

  return instance.get(PATHS.CASE_THEMES_PATH, { cancelToken });
};
export const searchCasesApi = (data) => {
  const instance = axiosInstance(true);

  return instance.get(PATHS.SEARCH_CASES_PATH, { params: data });
};

export const getOpponentsApi = (data) => {
  const instance = axiosInstance(true);

  return instance.get(PATHS.SEARCH_OPPONENTS_PATH, { params: data });
};

export const submitDuelApi = (data) => {
  const instance = axiosInstance(true);

  return instance.post(PATHS.SUBMIT_DUEL_PATH, data);
};

export const unconfirmedDuelsApi = () => {
  const instance = axiosInstance(true);

  return instance.get(PATHS.FUTURE_DUELS_PATH);
};

export const confirmedDuelsApi = () => {
  const instance = axiosInstance(true);

  return instance.get(PATHS.FUTURE_DUELS_PATH, { params: { confirmed: true } });
};

export const pastDuelsApi = () => {
  const instance = axiosInstance(true);

  return instance.get(PATHS.PAST_DUELS_PATH);
};

export const getDuelInformationApi = (data) => {
  const instance = axiosInstance(true);

  return instance.get(`${PATHS.DUELS_PATH}/${data}`);
};

export const submitParticipationInDuelApi = (data) => {
  const instance = axiosInstance(true);

  return instance.put(`${PATHS.DUELS_PATH}/${data}${PATHS.SUBMIT_PARTICIPATION_IN_DUEL_PATH}`);
};

export const cancelParticipationInDuelApi = (data) => {
  const instance = axiosInstance(true);

  return instance.put(`${PATHS.DUELS_PATH}/${data}${PATHS.CANCEL_PARTICIPATION_IN_DUEL_PATH}`);
};

export const agreedCasesApi = () => {
  const instance = axiosInstance(true);

  return instance.get(PATHS.CASES_PATH);
};

export const disagreedCasesApi = () => {
  const instance = axiosInstance(true);

  return instance.get(PATHS.CASES_PATH, { params: { confirmed: false } });
};

export const getCaseInformationApi = (data) => {
  const instance = axiosInstance(true);

  return instance.get(`${PATHS.CASES_PATH}/${data.data}`);
};

export const getCountriesApi = () => {
  const instance = axiosInstance(true);

  return instance.get(PATHS.COUNTRIES_PATH);
};

export const getOpentokSessionApi = (duelId) => {
  const instance = axiosInstance(true);

  return instance.get(`${PATHS.GET_OPENTOK_SESSION_PATH}`, { params: { duel_id: duelId } });
};

export const updateAvatarApi = (img) => {
  const instance = axiosInstance(true);

  return instance.put(PATHS.UPDATE_AVATAR_PATH, { avatar: img });
};

export const getUserInformationApi = (data) => {
  const instance = axiosInstance(true);

  return instance.get(`${PATHS.USERS_PATH}/${data.id}`);
};

export const getOpponentAttitudeQuestionsApi = (data) => {
  const instance = axiosInstance(true);

  return instance.get(`${PATHS.OPPONENT_ATTITUDE_QUESTIONS_PATH}`);
};

export const submitOpponentAttitudeAnswersApi = (data, duelId) => {
  const instance = axiosInstance(true);

  return instance.post(`${PATHS.DUELS_PATH}/${duelId}${PATHS.OPPONENT_ATTITUDE_ANSWERS_PATH}`, data);
};

export const submitConfidentialCaseInformationApi = (data) => {
  const instance = axiosInstance(true);

  return instance.post(`${PATHS.DUELS_PATH}/${data.duelId}${PATHS.SUBMIT_CASE_PRIVATE_INFO_PATH}`, data);
};

export const submitFinalAgreementApi = (data, duelId) => {
  const instance = axiosInstance(true);

  return instance.post(`${PATHS.DUELS_PATH}/${duelId}${PATHS.FINAL_AGREEMENT_PATH}`, data);
};

export const getSystemListApi = () => {
  const instance = axiosInstance(true);

  return instance.get(PATHS.SYSTEM_PATH);
};

export const saveProjectApi = (data) => {
  const instance = axiosInstance(true);

  return instance.post(PATHS.PROJECT_PATH, data.data);
};

export const getRoomCategoriesApi = () => {
  const instance = axiosInstance(true);

  return instance.get(PATHS.ROOM_CATEGORIES_PATH);
};

export const getProjectsApi = () => {
  const instance = axiosInstance(true);

  return instance.get(PATHS.PROJECTS_PATH);
};
