class Comment < ApplicationRecord
  validates :commenter_id, presence: true

  belongs_to :commentable, polymorphic: true

  belongs_to :commenter,
    forieign_id: :commenter_id,
    class_name: :User

  has_many :comments, as: :commentable, dependent: :destroy


end
