class Like < ApplicationRecord
  validates :liker_id, presence: true 
  validates :liker_id, uniqueness: { scope: [:likeable_type, :likeable_id] }

  belongs_to :likeable, polymorphic: true

  belongs_to :liker,
    foreign_key: :liker_id,
    class_name: :User
end
