import React from 'react'
import Data from './Data'
import Avatar from './Avatar'
import Options from '../components/Options';
import '../../css/Profile.css'
import { Button } from 'semantic-ui-react'

const Profile = () => {

  return(
    <div>
      <Data />
      <Avatar />
      <Options />
    </div>
  )
}

export default Profile
