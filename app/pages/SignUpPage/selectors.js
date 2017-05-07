import { createSelector } from 'reselect';

const selectSignUp = (state) => state.get('signUp');

const makeSelectSignUpData = () => createSelector(
  selectSignUp,
  (signUpState) => signUpState.get('data')
);

const makeSelectCountries = () => createSelector(
  selectSignUp,
  (signUpState) => signUpState.get('countriesData')
);

export {
  selectSignUp,
  makeSelectSignUpData,
  makeSelectCountries,
};
