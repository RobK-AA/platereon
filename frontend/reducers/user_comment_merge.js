import { merge } from "lodash";

const userCommentMerge = (oldState = {}, comment) => {
  Object.freeze(oldState);

  let commentState = merge(
    {}, 
    oldState[comment.commenter.id].posts_in_communities_joined[comment.commentable_id]
  );
  let newComment = merge({}, commentState, {
    comments: { [comment.id]: comment },
  });
  let commentId = newComment.id;

  return merge({}, oldState, { [commentId]: newComment });
};

export default userCommentMerge;
