# json.partial! "api/communities/:communityId", community: @community

json.extract! @community, 
  :id, 
  :creator_id, 
  :name, 
  :description, 
  :bronze_perks, 
  :silver_perks, 
  :gold_perks,
  :short_description,
  :plural,
  :posts

json.background_image @community.background_image.attached? ? url_for(@community.background_image) : nil
# json.profile_photo @user.profile_photo.attached? ? url_for(@user.profile_photo) : nil