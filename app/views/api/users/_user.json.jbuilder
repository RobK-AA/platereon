json.extract! user, 
  :id, 
  :email, 
  :name, 
  :communities_created, 
  :communities_joined
  :posts

!posts.nil? ?

(json.posts_in_communities_joined do
  posts.each do |post| 
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

      json.comments do
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
      end

      json.likes do
        post.likes.each do |like|
          json.set! like.liker_id do
            json.extract! like,
              :id, 
              :liker_id,
              :likeable_id,
              :likeable_type
          end
        end
      end

      json.author do
            json.extract! post.author, :id, :name
            json.profile_photo post.author.profile_photo.attached? ? url_for(post.author.profile_photo) : nil
      end
    json.images post.images.map { |image| url_for(image) }
    end
  end
end) : nil

!user.communities_joined.nil? ?

(json.communities_joined_photos do
  user.communities_joined.each do |community| 
    json.set! community.id do 
      json.extract! community, 
        :id, 
        :creator_id, 
        :name, 
        :short_description,
        :plural

      json.profile_photo community.creator.profile_photo.attached? ? url_for(community.creator.profile_photo) : nil
    end
  end
end) : nil

json.profile_photo user.profile_photo.attached? ? url_for(user.profile_photo) : nil
