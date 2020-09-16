class AddVideoUrlColumnToPostModel < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :video_url, :string
    add_column :posts, :link_url, :string
  end
end
