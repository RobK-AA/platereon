import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
} from '../actions/session_actions';

const SessionErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  let newState = oldState.slice(0);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:

      debugger

      newState.concat(action.errors);
      return newState;
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return oldState;
  }
};

export default SessionErrorsReducer;