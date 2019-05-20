
import React from 'react'
import { Card } from 'semantic-ui-react'

const CountrySummary = props => {

  return (
    <Card>
      <Card.Header>
      </Card.Header>
      <Card.Meta>
        Capital: {props.countryData.capital}
        Population: {props.countryData.population}
        Area: {props.countryData.area}sq km
      </Card.Meta>
      <Card.Description>
        Summary: {props.countryData.profile}
      </Card.Description>
    </Card>
  )
}

export default CountrySummary
