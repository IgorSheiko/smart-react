import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const makeSelectCurrentUser = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('currentUser')
);

const makeSelectAvatar = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('avatar')
);

const makeSelectCasesThemes = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('casesThemes')
);

const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route');

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export {
  makeSelectCurrentUser,
  makeSelectCasesThemes,
  makeSelectLocationState,
  makeSelectAvatar,
};
