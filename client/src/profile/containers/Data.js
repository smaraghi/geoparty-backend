
import React from 'react'
import AvatarImage from '../components/AvatarImage'
import Bio from './Bio'
import Stats from './Stats';
import { Segment, Item } from 'semantic-ui-react'

const Data = () => {

  return (
    <Segment id="profile-data">
        <AvatarImage />
        <Bio />
        <Stats />
    </Segment>
  )
}

export default Data
