import { merge } from "lodash";

const likeMerge = (oldState = {}, like) => {
  Object.freeze(oldState);

  let likeState = merge({}, oldState[like.likeable_id]);
  let newLike = merge({}, likeState, { likes: { [like.liker.id]: like}});
  let likeId = newLike.id;

  return merge({}, oldState, { [likeId]: newLike });
}

export default likeMerge;