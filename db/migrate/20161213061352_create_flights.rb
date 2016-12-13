class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
      t.integer :airplane_id
      t.integer :flight_num
      t.string :origin
      t.string :destination
      t.datetime :departure_date

      t.timestamps null: false
    end
  end
end
