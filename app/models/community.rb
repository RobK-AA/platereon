class Community < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :creator_id, presence: true
  validates :description, presence: true

  belongs_to :creator,
    primary_key: :id,
    foreign_key: :creator_id,
    class_name: :User
  
  has_many :memberships,
    foreign_key: :community_id,
    class_name: :Membership

  has_many :members,
    through: :memberships,
    source: :member
  
end
