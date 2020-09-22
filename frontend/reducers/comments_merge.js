import { merge } from "lodash";

const commentMerge = (oldState = {}, comment) => {
  Object.freeze(oldState);

  let commentState = merge({}, oldState[comment.commentable_id]);
  let newComment = merge({}, commentState, { comments: { [comment.id]: comment } });
  let commentId = newComment.id;

  return merge({}, oldState, { [commentId]: newComment });
};

export default commentMerge;
