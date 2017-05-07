import { createSelector } from 'reselect';

const selectUser = (state) => state.get('userInformation');

const makeSelectUserData = () => createSelector(
  selectUser,
  (user) => user.get('user'),
);

export {
  selectUser,
  makeSelectUserData,
};
