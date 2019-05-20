
import React from 'react'
import { List } from 'semantic-ui-react'
import CountrySidebarItem from '../components/CountrySidebarItem'
import countryData from '../data/countryData'

const CountrySidebarContainer = props => {
  return(
    <div>
    <h2>Select Country party</h2>
    <List divided animated>
      {countryData().map((country, i) => <CountrySidebarItem key={i} country={country} setActiveCountry={props.setActiveCountry}/>)}
    </List>
    </div>
  )
}

export default CountrySidebarContainer
