import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";
import { RECEIVE_COMMENT } from "../actions/comment_actions";
import userLikeMerge from "./user_like_merge";
import userCommentMerge from "./user_comment_merge";

const UsersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState[action.currentUser.id] = action.currentUser;
      return newState;
    case LOGOUT_CURRENT_USER:
      return oldState;
    case RECEIVE_COMMENT:
      if (action.comment.commentable_type === "Post") {
        return userCommentMerge(oldState, action.comment);
      }
    case RECEIVE_LIKE:
      if (action.like.likeable_type === "Post") {
        return userLikeMerge(oldState, action.like);
      }
      return oldState;
    case REMOVE_LIKE:
      delete newState[action.like.liker.id].posts_in_communities_joined[
        action.like.likeable_id
      ].likes[action.like.liker.id];
      return newState;
    default:
      return oldState;
  }
};

export default UsersReducer;