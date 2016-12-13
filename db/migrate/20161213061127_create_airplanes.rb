class CreateAirplanes < ActiveRecord::Migration
  def change
    create_table :airplanes do |t|
      t.integer :row
      t.integer :column
      t.integer :plane_num

      t.timestamps null: false
    end
  end
end
