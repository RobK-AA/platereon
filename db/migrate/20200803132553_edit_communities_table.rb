class EditCommunitiesTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :communities, :name
    add_column :communities, :name, :string, null: false
  end
end
