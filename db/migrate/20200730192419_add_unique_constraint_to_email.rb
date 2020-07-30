class AddUniqueConstraintToEmail < ActiveRecord::Migration[5.2]
  def change
  end
  remove_index :users, :email
  add_index :users, :email, unique: true
end
