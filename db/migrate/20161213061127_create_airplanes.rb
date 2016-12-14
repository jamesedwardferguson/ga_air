class CreateAirplanes < ActiveRecord::Migration
  def change
    create_table :airplanes do |t|
      t.integer :row
      t.integer :column
      t.string :plane_num
      t.string  :plane_type
      t.timestamps null: false
    end
  end
end
