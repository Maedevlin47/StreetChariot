class AddFeaturesToServices < ActiveRecord::Migration[7.0]
  def change
    add_column :services, :features, :string
  end
end
