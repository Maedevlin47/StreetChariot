class AddSignUpToServices < ActiveRecord::Migration[7.0]
  def change
    add_column :services, :signup, :string
  end
end
