export const fetchPosts = (communityId) => {
  return $.ajax({
    url: `api/communities/${communityId}/posts`
  })
}

export const fetchPost = (postId) => {
  return $.ajax({
    url: `api/posts/${postId}`
  })
}

export const createPost = (formData) => {
  
  return $.ajax({
    url: `api/posts`,
    method: `POST`,
    data: formData , 
    processData: false,
    contentType: false
  })
}

export const updatePost = (post) => {
  return $.ajax({
    url: `api/posts/${post.id}`,
    method: `DELETE`,
    data: { post }
  })
}

export const deletePost = (postId) => {
  return $.ajax({
    url: `api/posts/${postId}`,
    method: `DELETE`
  })
}