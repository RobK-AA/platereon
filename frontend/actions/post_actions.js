import * as PostApiUtil from '../util/post_api_util';
import { REMOVE_MEMBERSHIP } from './membership_actions';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS';
export const CLEAR_POST_ERRORS = "CLEAR_POST_ERRORS";

export const receiveErrors = errors => ({
  type: RECEIVE_POST_ERRORS,
  errors
});

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
})

export const receivePost = post => ({
  type: RECEIVE_POSTS,
  post
})

export const removePost = post => ({
  type: REMOVE_POST,
  post
})

export const fetchPosts = communityId => dispatch => (
  PostApiUtil.fetchPosts(communityId).then(
    posts => dispatch(receivePosts(posts)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
)

export const fetchPost = postId => dispatch => (
  PostApiUtil.fetchPost(postId).then(
    post => dispatch(receivePost(post)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
)

export const createPost = post => dispatch => (
  PostApiUtil.createPost(post).then(
    post => dispatch(receivePost(post)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
)

export const updatePost = post => dispatch => (
  PostApiUtil.updatePost(post).then(
    post => dispatch(receivePost(post)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
)

export const deletePost = postId => dispatch => (
  PostApiUtil.deletePost(postId).then(
    postId => dispatch(removePost(postId)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
)