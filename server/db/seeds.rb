# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'json'

Country.destroy_all

req = open("#{Rails.root}/db/factbook.json")
body = req.read
json = JSON.parse(body)

json['countries'].each do |k, v|
  data = v['data']
  geo = data['geography']
  people = data['people']

  name = data['name']
  profile = data['introduction']['background']
  
  location = geo['location']
  continent = geo['map_references']
  area = geo['area']['total']['value']
  area_rank = geo['area']['global_rank']
  comparison = geo['area']['comparative']
  climate = geo['climate']
  terrain = geo['terrain']

  begin
    border_countries = geo['land_boundaries']['border_countries'].map{|i| i['country']}.join('-')
  rescue
    border_countries = "None"
  end

  begin
    lowest_point = geo['elevation']['lowest_point']['name']
    highest_point = geo['elevation']['highest_point']['name']
    natural_resources = geo['natural_resources']['resources'].join('-')
    population = people['population']['total']
    population_rank = people['population']['global_rank']
    nationality = people['nationality']['noun']
    languages = people['languages']['language'].map{|i| i['name']}.join('-')
    religions = people['religions']['religion'].map{|i| i['name']}.join('-')
    major_cities = people['major_urban_areas']['places'].map{|i| i['place']}
    capital = people['major_urban_areas']['places'].select{|i| i['is_capital']}
  rescue
    puts name
    next
  end

  Country.create(name: name, profile: profile, location: location, continent: continent, area: area, area_rank: area_rank, comparison: comparison, border_countries: border_countries, climate: climate, terrain: terrain, lowest_point: lowest_point, highest_point: highest_point, natural_resources: natural_resources, population: population, population_rank: population_rank, nationality: nationality, languages: languages, religions: religions, major_cities: major_cities, capital: capital)
end
