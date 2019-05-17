
import React from 'react'
import { Header } from 'semantic-ui-react'

const CountryGeography = props => {

  return (
    <div>
      <Header as='h2'>Geography Stuff:</Header>

      <p>location: {props.countryData.location}</p>
      <p>continent: {props.countryData.continent}</p>
      <p>area: {props.countryData.area}sq km</p>
      <p>area_rank: {props.countryData.area_rank}</p>
      <p>comparison: {props.countryData.comparison}</p>
      <p>border_countries: {props.countryData.border_countries}</p>
      <p>climate: {props.countryData.climate}</p>
      <p>terrain: {props.countryData.terrain}</p>
      <p>lowest_point: {props.countryData.lowest_point}</p>
      <p>highest_point: {props.countryData.highest_point}</p>
      <p>natural_resources: {props.countryData.natural_resources}</p>

    </div>
  )
}

export default CountryGeography
