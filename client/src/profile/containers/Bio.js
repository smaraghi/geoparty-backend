import React, { useContext } from 'react'
import shopContext from '../../context/shop-context'
import { Card, Image, Header } from 'semantic-ui-react'
import StarBar from '../../trivia/containers/StarBar'
import { isEmpty } from 'lodash'

const Bio = () => {
  const context = useContext(shopContext)

  return (
    <div id='profile-bio'>
      <Header as='h2'>{context.user.username}</Header>
      <Card.Description>{context.user.bio}</Card.Description>
    </div>
  )
}

export default Bio
