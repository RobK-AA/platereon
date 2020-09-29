@posts.each do |post| 
  json.set! post.id do 
    json.extract! post, 
      :id, 
      :author_id,
      :community_id,
      :title,
      :body,
      :video_url,
      :link_url,
      :created_at

    json.community do
      json.extract! post.community, :name, :id
    end

    !post.comments.nil? ?

    (json.comments do
      post.comments.each do |comment|
        json.set! comment.id do
          json.extract! comment,
            :id, 
            :body,
            :created_at
          json.author do
            json.extract! comment.commenter, :id, :name
            json.profile_photo comment.commenter.profile_photo.attached? ? url_for(comment.commenter.profile_photo) : nil
          end
        end
      end
    end) : nil

    !post.likes.nil? ?

    (json.likes do
      post.likes.each do |like|
        json.set! like.liker_id do
          json.extract! like,
            :id, 
            :liker_id,
            :likeable_id,
            :likeable_type
        end
      end
    end) : nil

    json.author do
            json.extract! post.author, :id, :name
            json.profile_photo post.author.profile_photo.attached? ? url_for(post.author.profile_photo) : nil
    end

    json.images post.images.map { |image| url_for(image) }
  end
end
