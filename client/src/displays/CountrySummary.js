
import React from 'react'
import { Segment } from 'semantic-ui-react'

const CountrySummary = props => {

  return (
    <Segment id='country-summary'>
       {props.countryData.profile}
    </Segment>
  )
}

export default CountrySummary
