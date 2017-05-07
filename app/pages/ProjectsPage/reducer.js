import { fromJS } from 'immutable';

import {
  GET_PROJECTS_SUCCESS,
} from './constants'

const initialState = fromJS({

});

function ProjectsReducer(state = initialState, action) {
  debugger;
  switch (action.type) {
    case GET_PROJECTS_SUCCESS:
      return state
        .set('projects', action.data);
    default:
      return state;
  }
}

export default ProjectsReducer;
