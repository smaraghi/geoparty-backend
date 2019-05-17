
import React from 'react'
import { Header } from 'semantic-ui-react'

const CountryGeography = props => {
   const {location, continent, area, area_rank, comparison, border_countries, climate, terrain, lowest_point, highest_point, natural_resources, major_cities} = props.countryData

  return (
    <div>
      <Header as='h2'>Geography Stuff:</Header>

      <p>location: {location}</p>
      <p>continent: {continent}</p>
      <p>area: {area}sq km</p>
      <p>area rank: {area_rank}</p>
      <p>comparison: {comparison}</p>
      <p>border countries: {border_countries}</p>
      <p>climate: {climate}</p>
      <p>terrain: {terrain}</p>
      <p>lowest point: {lowest_point}</p>
      <p>highest point: {highest_point}</p>
      <p>natural resources: {natural_resources}</p>
      <p>major cities: {major_cities}</p>

    </div>
  )
}

export default CountryGeography
