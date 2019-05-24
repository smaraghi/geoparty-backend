import React, { useContext } from 'react'
import shopContext from '../../context/shop-context'
import { Card, Header } from 'semantic-ui-react'

const Bio = () => {
  const context = useContext(shopContext)

  return (
    <div>
      <Header as='h2'>{context.user.username}</Header>
      <Card.Description>{context.user.bio}</Card.Description>
    </div>
  )
}

export default Bio
