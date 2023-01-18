class CreateServices < ActiveRecord::Migration[7.0]
    def change
      create_table :services do |t|
        t.string :name
        t.string :travel_type
        t.boolean :favorite
        t.string :website

        t.timestamps
      end
    end

end
