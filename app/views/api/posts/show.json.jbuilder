json.extract! @post, 
  :id, 
  :author_id,
  :community_id,
  :title,
  :body,
  :video_url,
  :link_url

json.comments do
  @post.comments.each do |comment|
    json.set! comment.id do
      json.extract! comment,
        :id, 
        :body,
        :created_at,
      json.author do
        json.extract! comment.commenter, :id, :name
      end
    end
  end
end

json.images @post.images.map { |image| url_for(image) }