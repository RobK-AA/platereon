class Post < ApplicationRecord
  validates :community_id, :author_id, presence: true
  validates :body, presence: true, length: { minimum: 1 }

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :community,
    foreign_key: :community_id,
    class_name: :community

end
