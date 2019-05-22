import React, { useContext } from 'react'
import shopContext from '../context/shop-context'
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { isEmpty } from 'lodash'

const Navbar = () => {
  const context = useContext(shopContext)

  return (
    !isEmpty(context.user) ?
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

      <Link to='/login' onClick={context.logoutUser}>
        <Menu.Item name='Logout' />
      </Link>
    </Menu>
    :
    <Menu>
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

      <Link to='/login'>
        <Menu.Item name='Login' />
      </Link>
    </Menu>
  )
}

export default Navbar
