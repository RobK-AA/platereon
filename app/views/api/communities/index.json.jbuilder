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
      :plural
  end
end