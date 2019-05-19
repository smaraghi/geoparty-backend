import React, {useContext} from 'react'
import shopContext from '../context/shop-context'

const Header = () => {
  const context = useContext(shopContext)

  return (
    <div>
      <h1>GeoParty!</h1>
      <h2>{context.user.username}</h2>
    </div>
  )
}

export default Header
