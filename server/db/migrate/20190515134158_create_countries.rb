class CreateCountries < ActiveRecord::Migration[5.2]
  def change
    create_table :countries do |t|
      t.string :name
      t.string :profile
      t.string :location
      t.string :continent
      t.string :area
      t.integer :area_rank
      t.string :comparison
      t.string :border_countries
      t.string :climate
      t.string :terrain
      t.string :lowest_point
      t.string :highest_point
      t.string :natural_resources
      t.string :population
      t.integer :population_rank
      t.string :nationality
      t.string :languages
      t.string :religions
      t.string :major_cities
      t.string :capital
      t.timestamps
    end
  end
end
