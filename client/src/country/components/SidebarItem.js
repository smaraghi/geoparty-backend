import React from 'react'
import { List, Flag } from 'semantic-ui-react'

const SidebarItem = props => {
  return(
    <List.Item onClick={() => props.setActiveCountry(props.country.text)}>
      <Flag name={props.country.flag}/>
      <span>{props.country.text}</span>
    </List.Item>
  )
}

export default SidebarItem
