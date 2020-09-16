@posts.each do |post| 
  json.set! post.id do 
    json.extract! post, 
      :id, 
      :author_id,
      :community_id,
      :title,
      :body,
      :created_at

    json.images post.images.map { |image| url_for(image) }
  end
end
