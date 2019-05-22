import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const RobotImage = (props) => {
  return(
    <Card id="robot-image">
      <Image src={require(`../../images/Robot-${props.num}.png`)} alt="robot"/>
    </Card>
  )
}

export default RobotImage