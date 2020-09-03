class Membership < ApplicationRecord
  validates :member_id, presence: true
  validates :community_id, presence: true

  belongs_to :member,
    primary_key: :id,
    foreign_key: :member_id,
    class_name: :User

  belongs_to :community,
    primary_key: :id,
    foreign_key: :community_id,
    class_name: :Community
  
end
