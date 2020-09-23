export const selectCurrentUser = state => {
  return state.entities.users[state.session.id]
}

export const selectPostLikes = (postId, state) => {
  if (state.entities.posts[postId]) {
    return state.entities.posts[postId].likes;
  } else {
    return {}
  };
}