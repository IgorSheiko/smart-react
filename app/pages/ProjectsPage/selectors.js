import { createSelector } from 'reselect';

const selectProjects = (state) => state.get('projects');

const makeProjectsData = () => createSelector(
  selectProjects,
  (projects) => projects.get('projects'),
);

export {
  selectProjects,
  makeProjectsData,
};
