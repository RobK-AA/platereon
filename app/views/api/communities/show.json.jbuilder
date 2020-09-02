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
  :plural