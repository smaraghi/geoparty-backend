
import React from 'react'

const CountrySummary = props => {

  return (
    <div>
      Summary: <p>{props.countryData.profile}</p>
      Capital: {props.countryData.capital}
      Population: {props.countryData.population}
      Area: {props.countryData.area}sq km
    </div>
  )
}

export default CountrySummary
