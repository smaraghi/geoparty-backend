import React from 'react'
import Bio from './Bio'
import Stats from './Stats';
import Options from './Options';
import '../../css/Profile.css'

const Profile = () => {

  return(
    <div>
      <Bio />
      <Stats />
      <Options />
    </div>
  )
}

export default Profile
