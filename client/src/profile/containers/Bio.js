import React, { useContext } from 'react'
import shopContext from '../../context/shop-context'
import { Card, Image } from 'semantic-ui-react'
import { isEmpty } from 'lodash'

const Bio = () => {
  const context = useContext(shopContext)

  return (
    <Card id='profile-bio'>
      {isEmpty(context.user) ?
      <Image src={require("../../images/star.png")} alt="party"/>
      :
      <Image src={require(`../../images/${context.user.avatar}`)} alt="party"/>
      }
      <Card.Content>
        <Card.Header>{context.user.username}</Card.Header>
        <Card.Description>{context.user.bio}</Card.Description>
      </Card.Content>
    </Card>
  )
}

export default Bio
