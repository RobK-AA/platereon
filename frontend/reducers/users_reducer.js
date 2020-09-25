import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";
import { RECEIVE_COMMENT } from "../actions/comment_actions";
import userLikeMerge from "./likes_merge";
import commentMerge from "./comments_merge";

const UsersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState[action.currentUser.id] = action.currentUser;
      return newState;
    case RECEIVE_LIKE:
      if (action.like.likeable_type === "Post") {
        // newState[action.like.liker.id].posts_in_communities_joined[
        //   action.like.likeable_id
        // ].likes[action.like.liker.id] = action.like;
        return userLikeMerge(oldState, action.like);
      }
      return oldState;
    case REMOVE_LIKE:
      debugger
      delete newState[action.like.liker.id].posts_in_communities_joined[action.like.likeable_id].likes[action.like.liker.id];
      return newState;
    default:
      return oldState;
  }
};

export default UsersReducer;