import React, { useContext } from 'react'
import shopContext from '../../context/shop-context'
import { Menu } from 'semantic-ui-react'

const ContentMenu = () => {
  const context = useContext(shopContext)

  return(
    <div>
      <Menu id='content-menu' tabular attached='top'>
        <Menu.Item name='overview' active={context.activeItem === 'overview'} onClick={() => context.setActiveItem('overview')}/>
        <Menu.Item name='geography' active={context.activeItem === 'geography'} onClick={() => context.setActiveItem('geography')}/>
        <Menu.Item name='people' active={context.activeItem === 'people'} onClick={() => context.setActiveItem('people')}/>
      </Menu>
    </div>
  )
}

export default ContentMenu
