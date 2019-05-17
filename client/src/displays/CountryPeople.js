
import React from 'react'
import { Header } from 'semantic-ui-react'

const CountryPeople = props => {

  return (
    <div>
      <Header as='h2'>People Stuff:</Header>

      <p>population: {props.countryData.population}</p>
      <p>population_rank: {props.countryData.population_rank}</p>
      <p>nationality: {props.countryData.nationality}</p>
      <p>languages: {props.countryData.languages}</p>
      <p>religions: {props.countryData.religions}</p>
      <p>major_cities: {props.countryData.major_cities}</p>
    </div>
  )
}

export default CountryPeople
