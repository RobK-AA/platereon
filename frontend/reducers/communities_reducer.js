import { RECEIVE_COMMUNITIES, RECEIVE_COMMUNITY } from '../actions/community_actions';

const CommunitiesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  
  switch(action.type) {
    case RECEIVE_COMMUNITIES:
      return action.communities;
    case RECEIVE_COMMUNITY:
      newState[action.community.id] = action.community;
      return newState;
    default:
      return oldState;
  }
};

export default CommunitiesReducer;