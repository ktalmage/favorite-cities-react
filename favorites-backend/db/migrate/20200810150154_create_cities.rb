class CreateCities < ActiveRecord::Migration[6.0]
  def change
    create_table :cities do |t|
      t.string :name
      t.string :zipcode
      t.string :title
      t.text :description
      t.integer :state_id

      t.timestamps
    end
  end
end
