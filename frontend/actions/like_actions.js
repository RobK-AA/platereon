import * as LikeApiUtil from "../util/like_api_util";

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";
export const RECEIVE_LIKE_ERRORS = "RECEIVE_LIKE_ERRORS";

export const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

export const removeLike = (like) => ({
  type: REMOVE_LIKE,
  like
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_LIKE_ERRORS,
  errors
});

export const like = like => dispatch => {
  return LikeApiUtil.like(like).then(
    (like) => {
      return dispatch(receiveLike(like));
    },
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
};

export const unlike = (like) => (dispatch) => {
  return LikeApiUtil.unlike(like).then(
    (like) => {
      return dispatch(removeLike(like));
    },
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  );
};