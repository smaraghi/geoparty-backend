import React, { useContext } from 'react'
import shopContext from '../../context/shop-context'
import { Card, Image } from 'semantic-ui-react'

const Bio = () => {
  const context = useContext(shopContext)

  return (
    <Card id='profile-bio'>
      <Image src={require("../../images/star.png")} alt="party"/>
      <Card.Content>
        <Card.Header>{context.user.username}</Card.Header>
        <Card.Description>eat, sleep, party, repeat</Card.Description>  
      </Card.Content>
    </Card>
  )
}

export default Bio
