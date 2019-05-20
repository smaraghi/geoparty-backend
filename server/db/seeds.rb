
require 'json'

Country.destroy_all
User.destroy_all

User.create(username: 'Phil', password: '111', total_questions: 37, correct_answers: 32)

req = open("#{Rails.root}/db/factbook.json")
body = req.read
json = JSON.parse(body)

json['countries'].each do |k, v|
  data = v['data']
  geo = data['geography']
  people = data['people']

  name = data['name']
  next if name == 'World'
  profile = data['introduction']['background']

  location = geo['location']
  continent = geo['map_references']
  area = geo['area']['total']['value']
  area_rank = geo['area']['global_rank']
  comparison = geo['area']['comparative']
  climate = geo['climate']
  terrain = geo['terrain']
  lowest_point = [geo['elevation']['lowest_point']['name'], geo['elevation']['lowest_point']['elevation']['value']].join(' - ')
  highest_point = [geo['elevation']['highest_point']['name'], geo['elevation']['highest_point']['elevation']['value']].join(' - ')
  population = people['population']['total']
  population_rank = people['population']['global_rank']
  nationality = people['nationality']['noun']
  languages = people['languages']['language'].map{|i| i['name']}.join('-')
  religions = people['religions']['religion'].map{|i| i['name']}.join('-')
  major_cities = people['major_urban_areas']['places'].map{|i| i['place']}.join('-')
  capital = people['major_urban_areas']['places'].select{|i| i['is_capital']}[0]['place']

  begin
    border_countries = geo['land_boundaries']['border_countries'].map{|i| i['country']}.join('-')
  rescue
    border_countries = "None"
  end

  begin
    natural_resources = geo['natural_resources']['resources'].join('-')
  rescue
    natural_resources = "None"
  end

  Country.create(
    name: name,
    profile: profile,
    location: location,
    continent: continent,
    area: area,
    area_rank: area_rank,
    comparison: comparison,
    border_countries: border_countries,
    climate: climate,
    terrain: terrain,
    lowest_point: lowest_point,
    highest_point: highest_point,
    natural_resources: natural_resources,
    population: population,
    population_rank: population_rank,
    nationality: nationality,
    languages: languages,
    religions: religions,
    major_cities: major_cities,
    capital: capital
  )
end
