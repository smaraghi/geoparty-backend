import React, { useContext } from 'react'
import shopContext from '../../context/shop-context'
import { Header, Image } from 'semantic-ui-react'

const Bio = () => {
  const context = useContext(shopContext)

  return (
    <div>
      <Header as='h1'>{context.user.username}</Header>
      <Image src="party" alt="party"/>
      <p>
        eat, sleep, party, repeat
      </p>
    </div>
  )
}

export default Bio
