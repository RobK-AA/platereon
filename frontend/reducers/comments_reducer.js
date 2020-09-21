import { RECEIVE_COMMENT, DELETE_COMMENT } from '../actions/comment_actions';

const CommentsReducer = (oldState = {}, action) => {

  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_COMMENT:
      newState[action.comment.id] = action.comment;
      return newState;
    case DELETE_COMMENT:
      delete newState[action.comment.id]
      return newState;
    default:
      return oldState;
  }
};

export default CommentsReducer;