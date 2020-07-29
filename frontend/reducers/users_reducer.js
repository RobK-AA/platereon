import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const UsersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:

      debugger

      newState[action.user.id] = action.user;
      return newState;
    default:
      return oldState;
  }
};

export default UsersReducer;