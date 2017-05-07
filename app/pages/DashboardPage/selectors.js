import { createSelector } from 'reselect';

const selectDashboard = (state) => state.get('dashboard');

const makeSelectProfileUpdateData = () => createSelector(
  selectDashboard,
  (dashboardState) => dashboardState.get('profileForm')
);

const makeSelectIsLoadingUserDataUpdateFormData = () => createSelector(
  selectDashboard,
  (dashboardState) => dashboardState.get('isLoadingUserDataUpdateForm')
);

const makeSelectIsLoadingPasswordUpdateFormData = () => createSelector(
  selectDashboard,
  (dashboardState) => dashboardState.get('isLoadingPasswordUpdateForm')
);

const makeSelectDuelTimesUpdateData = () => createSelector(
  selectDashboard,
  (dashboardState) => dashboardState.get('duelsTimetableForm')
);

const makeSelectCountries = () => createSelector(
  selectDashboard,
  (dashboardState) => dashboardState.get('countriesData')
);

const makeSelectIsLoadingDuelsTimeTableData = () => createSelector(
  selectDashboard,
  (dashboardState) => dashboardState.get('isLoadingDuelsTimeTableForm')
);

export {
  selectDashboard,
  makeSelectProfileUpdateData,
  makeSelectIsLoadingUserDataUpdateFormData,
  makeSelectIsLoadingPasswordUpdateFormData,
  makeSelectDuelTimesUpdateData,
  makeSelectCountries,
  makeSelectIsLoadingDuelsTimeTableData,
};
