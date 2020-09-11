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

  has_many :posts,
    foreign_key: :community_id,
    class_name: :Post

  def self.search(search)
    if search
      where(["lower(short_description) LIKE ? 
        OR lower(description) LIKE ? 
        OR lower(name) LIKE ?", 
        "%#{search.downcase}%", "%#{search.downcase}%", "%#{search.downcase}%"])
    else
      all
    end
  end

end
