import { RECEIVE_MEMBERSHIPS, RECEIVE_MEMBERSHIP, REMOVE_MEMBERSHIP } from '../actions/membership_actions';

const MembershipsReducer = (oldState = {}, action) => {

  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_MEMBERSHIPS:
      return action.memberships;
    case RECEIVE_MEMBERSHIP:
      newState[action.membership.id] = action.membership;
      return newState;
    case REMOVE_MEMBERSHIP:
      delete newState[action.membership.id];
      return newState;
    default:
      return oldState;
  }
};

export default MembershipsReducer;