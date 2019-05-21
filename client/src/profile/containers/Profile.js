import React from 'react'
import Bio from './Bio'
import Stats from './Stats';
import Options from './Options';
import {Divider} from 'semantic-ui-react'

const Profile = () => {

  return(
    <div>
      <Bio />
      <Divider />
      <Stats />
      <Divider />
      <Options />
    </div>
  )
}

export default Profile
