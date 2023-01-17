class AddLikedToServices < ActiveRecord::Migration[7.0]
  def change
    add_column :services, :liked, :boolean, default: false
  end
end
