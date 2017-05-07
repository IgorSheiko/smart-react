import { createSelector } from 'reselect';

const selectNewProject = (state) => state.get('newProject');

const makeSystemListData = () => createSelector(
  selectNewProject,
  (systemList) => systemList.get('systemList'),
);

const makeRoomCategoriesData = () => createSelector(
  selectNewProject,
  (roomCategories) => roomCategories.get('roomCategories'),
);

export {
  selectNewProject,
  makeSystemListData,
  makeRoomCategoriesData,
};
