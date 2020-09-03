@memberships.each do |membership| 
  json.set! membership.id do 
    json.extract! membership, 
      :id, 
      :member_id,
      :community_id
  end
end