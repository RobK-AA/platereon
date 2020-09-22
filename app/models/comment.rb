class Comment < ApplicationRecord
  validates :commenter_id, presence: true

  belongs_to :commentable, polymorphic: true

  belongs_to :commenter,
    foreign_key: :commenter_id,
    class_name: :User

  has_many :comments, as: :commentable, dependent: :destroy
  has_many :likes, as: :likeable, dependent: :destroy
  
end
