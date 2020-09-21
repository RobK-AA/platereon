import * as CommentApiUtil from '../util/comment_api_util';
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const UPDATE_COMMENT = "UPDATE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = commentId => ({
  type: DELETE_COMMENT,
  commentId
});

export const receiveErrors = errors => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
});

export const createComment = comment => dispatch => {
  return CommentApiUtil.createComment(comment).then(
    comment => {
      return dispatch(receiveComment(comment));
    },
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
};

export const deleteComment = comment => dispatch => {
  return CommentApiUtil.deleteComment(comment).then(
    commentId => {
      return dispatch(removeComment(commentId));
    },
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
};

export const updateComment = comment => dispatch => {
  return CommentApiUtil.updateComment(comment).then(
    commentId => {
      return dispatch(receiveComment(commentId));
    },
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
};