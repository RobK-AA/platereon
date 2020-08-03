class EditCommunityTable < ActiveRecord::Migration[5.2]
  def change
    add_column :communities, :short_description, :string
    add_column :communities, :plural, :boolean, default: false
  end
end
