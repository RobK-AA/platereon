class EditCommunitiesTableAgain < ActiveRecord::Migration[5.2]
  def change
    remove_column :communities, :null_false
  end
end
