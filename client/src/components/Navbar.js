import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Menu >
      <Link to='/about'>
        <Menu.Item header>
          GeoParty &nbsp;
          <Icon name='globe' />
        </Menu.Item>
      </Link>

      <Link to='/country'>
        <Menu.Item name='Country' />
      </Link>

      <Link to='/trivia'>
        <Menu.Item name='Trivia' />
      </Link>
      
      <Link to='/profile'>
        <Menu.Item name='Profile' />
      </Link>

      <Link to='/login'>
        <Menu.Item name='Login' />
      </Link>
    </Menu>
  )
}

export default Navbar 