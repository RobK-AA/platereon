import {
  RECEIVE_COMMUNITY_ERRORS
} from '../actions/community_actions';

const CommunityErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  
  switch (action.type) {
    case RECEIVE_COMMUNITY_ERRORS:
      return action.errors || [];
    default:
      return oldState;
  }
};

export default CommunityErrorsReducer;