import React from 'react'
import { List } from 'semantic-ui-react'
import SidebarItem from '../components/SidebarItem'
import countryData from '../../data/countryData'

const Sidebar = props => {
  return(
    <div>
    <h2>Select Country party</h2>
    <List divided animated>
      {countryData().map((country, i) => <SidebarItem key={i} country={country} setActiveCountry={props.setActiveCountry}/>)}
    </List>
    </div>
  )
}

export default Sidebar
