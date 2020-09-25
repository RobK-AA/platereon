import { merge } from "lodash";

const userLikeMerge = (oldState = {}, like) => {
  Object.freeze(oldState);

  let likeState = merge(
    {},
    oldState[action.like.liker.id].posts_in_communities_joined[
      action.like.likeable_id
    ]
  );
  let newLike = merge({}, likeState, { likes: { [like.liker.id]: like } });
  let likeId = newLike.id;

  return merge({}, oldState, { [likeId]: newLike });
};

export default userLikeMerge;
