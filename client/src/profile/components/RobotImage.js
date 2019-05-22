import React from 'react'
import { Grid, Image, Card } from 'semantic-ui-react'

const RobotImage = (props) => {
  return(
    <Grid.Column width={4} divided>
     <Card id='robot-image-card' onClick={null}>
      <Image id='robot-image' src={require(`../../images/Robot-${props.num}.png`)} alt="robot"/>
      </Card> 
    </Grid.Column>
  )
}

export default RobotImage