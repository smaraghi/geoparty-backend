import React from 'react'
import countryData from '../data/countryMenu'
import { Dropdown } from 'semantic-ui-react'

const CountrySelector = props => {
  return(
    <Dropdown 
      placeholder='Select Country'
      search
      selection
      options={countryData()}
      onChange={(e) => {
        props.handleCountry(e.target.innerText)
      }}
    /> 
  )
}

export default CountrySelector