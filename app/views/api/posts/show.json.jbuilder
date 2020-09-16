json.extract! @post, 
  :id, 
  :author_id,
  :community_id,
  :title,
  :body,
  :video_url,
  :link_url

json.images @post.images.map { |image| url_for(image) }