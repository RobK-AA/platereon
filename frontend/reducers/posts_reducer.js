import { RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST, RECEIVE_COMMUNITY_POSTS } from '../actions/post_actions';
import { merge } from "lodash";
import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";
import { RECEIVE_COMMENT } from "../actions/comment_actions";
import likeMerge from "./likes_merge";
import commentMerge from "./comments_merge";

const PostsReducer = (oldState = {}, action) => {

  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_POSTS:
      return merge({}, oldState, action.posts );
    case RECEIVE_COMMUNITY_POSTS:
      return action.posts;
    case RECEIVE_POST:
      newState[action.post.id] = action.post;
      return newState;
    case RECEIVE_LIKE:
      if (action.like.likeable_type === "Post") {
        // newState[action.like.id] = action.like;
        // return newState;
        return likeMerge(oldState, action.like)
        // return merge({}, oldState, { [action.like.id]: action.like });
        // return action.like;
      }
      return oldState;
    case REMOVE_LIKE:
      
      delete newState[action.like.likeable_id].likes[action.like.liker.id];
      return newState;
    case RECEIVE_COMMENT:
      if (action.comment.commentable_type === "Post") {
        return commentMerge(oldState, action.comment)
      }
      return oldState;
    case REMOVE_POST:
      delete newState[action.post.id];
      return newState;
    default:
      return oldState;
  }
};

export default PostsReducer;