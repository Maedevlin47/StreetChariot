class AddWebsiteToService < ActiveRecord::Migration[7.0]
  def change
    add_column :services, :website, :string
  end
end
