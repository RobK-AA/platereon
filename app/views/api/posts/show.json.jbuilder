json.extract! @post, 
  :id, 
  :author_id,
  :community_id,
  :title,
  :body

json.images post.images.map { |image| url_for(image) }