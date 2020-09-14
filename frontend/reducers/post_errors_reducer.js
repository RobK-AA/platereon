import {
  RECEIVE_POST_ERRORS,
  CLEAR_POST_ERRORS
} from '../actions/post_actions';


const PostErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_POST_ERRORS:
      return action.errors || [];
    case CLEAR_POST_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default PostErrorsReducer;