# json.partial! "api/communities", communities: @communities
@communities.each do |community| 
  json.set! community.id do 
    json.extract! community, 
      :id, 
      :creator_id, 
      :name, 
      :description, 
      :bronze_perks, 
      :silver_perks, 
      :gold_perks,
      :short_description,
      :plural,
      :members,
      :posts
    
    json.background_image community.background_image.attached? ? url_for(community.background_image) : nil
  end
end