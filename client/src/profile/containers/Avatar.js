import React from 'react'
import RobotImage from '../components/RobotImage';
import { Segment, Header, Card } from 'semantic-ui-react'

const Options = () => {
  return(
    <Segment id="avatar-options">
      <Header>Edit Avatar</Header>
      <Card.Group>
        {Array.from(Array(6), (_, i) => <span key={i}><RobotImage num={i + 1}/></span>)}
      </Card.Group>
    </Segment>
  )
}

export default Options
