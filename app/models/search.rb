class Search < ApplicationRecord

  def search_communities
    communities = Community.all

    communities = communities.where(["name LIKE ? OR short_description LIKE ? OR description LIKE ?", "%#{keyword}%"]) if keyword.present?

    return communities
  end
end
