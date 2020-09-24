json.partial! "api/users/user", user: @user, posts: @posts
    
# json.extract! @user, 
#   :id, 
#   :email, 
#   :name, 
#   :communities_created, 
#   :communities_joined,
#   :posts

# json.posts_in_communities_joined do
#   @posts.each do |post| 
#     json.set! post.id do 
#       json.extract! post, 
#         :id, 
#         :author_id,
#         :community_id,
#         :title,
#         :body,
#         :video_url,
#         :link_url,
#         :created_at

#       json.comments do
#         post.comments.each do |comment|
#           json.set! comment.id do
#             json.extract! comment,
#               :id, 
#               :body,
#               :created_at
#             json.author do
#               json.extract! comment.commenter, :id, :name
#             end
#           end
#         end
#       end

#       json.likes do
#         post.likes.each do |like|
#           json.set! like.liker_id do
#             json.extract! like,
#               :id, 
#               :liker_id,
#               :likeable_id,
#               :likeable_type
#           end
#         end
#       end
#     json.images post.images.map { |image| url_for(image) }
#     end
#   end
# end
