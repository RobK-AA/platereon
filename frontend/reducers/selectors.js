export const selectCurrentUser = state => {
  return state.entities.users[state.session.id]
}

export const selectPostLikes = (postId, state) => {
  return state.entities.posts[postId].likes;
}