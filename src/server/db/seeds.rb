# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'json'

req = open("#{Rails.root}/db/factbook.json")
body = req.read
json = JSON.parse(body) 

names = json['countries'].map{ |k, v| v['data']['name'] }


json['countries'].each do |k, v|
  name = v['data']['name']
  profile = v['data']['introduction']['background']
  location = v['data']['geography']['location']
  continent = v['data']['geography']['map_references']
  area = v['data']['geography']['area']['total']['value']
  area_rank = v['data']['geography']['area']['global_rank']
  comparison = v['data']['geography']['area']['comparative']
  
  
  border_countries = ""
  if !v['data']['geography']['land_boundaries']['border_countries'].nil?
    v['data']['geography']['land_boundaries']['border_countries'].each do |c|
      border_countries += c['country'] + " - " 
    end
    border_countries = border_countries[0, border_countries.length - 3]
  else 
    border_countries = 'none'
  end
  

  climate = v['data']['geography']['climate']
  terrain = v['data']['geography']['terrain']
  # lowest_point = v['data']['geography']['elevation']['lowest_point']['name']
  # highest_point = v['data']['geography']['elevation']['highest_point']['name']
  

  Country.create(name: name, profile: profile, location: location, continent: continent, area: area, area_rank: area_rank, comparison: comparison, border_countries: border_countries, climate: climate, terrain: terrain)
end
