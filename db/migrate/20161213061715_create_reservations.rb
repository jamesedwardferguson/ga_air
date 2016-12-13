class CreateReservations < ActiveRecord::Migration
  def change
    create_table :reservations do |t|
      t.integer :flight_id
      t.integer :user_id
      t.integer :res_col
      t.integer :res_row

      t.timestamps null: false
    end
  end
end
