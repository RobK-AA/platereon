class CreateCommunities < ActiveRecord::Migration[5.2]
  def change
    create_table :communities do |t|
      t.string :name, :null_false
      t.integer :creator_id, null: false
      t.string :description, null: false
      t.string :bronze_perks
      t.string :silver_perks
      t.string :gold_perks
      t.timestamps
    end
    add_index :communities, :name, unique: true
    add_index :communities, :creator_id
    add_index :communities, :description
  end
end
