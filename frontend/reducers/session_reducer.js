import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

const _nullUser = Object.freeze({
  id: null
});

const SessionReducer = (oldState = _nullUser, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:

      debugger

      newState['id'] = action.user.id;
      return newState;
    case LOGOUT_CURRENT_USER:

      debugger
            
      return oldState;
    default:
      return oldState;
  }
};

export default SessionReducer;