import React, { useContext } from 'react'
import shopContext from '../../context/shop-context'
import {Image} from 'semantic-ui-react'
import { isEmpty } from 'lodash'

const AvatarImage = () => {
  const context = useContext(shopContext)

  return (  
    <div id='profile-image'>
      {isEmpty(context.user) ?
      <Image src={require("../../images/star.png")} alt="avatar"/>
      :
      <Image src={require(`../../images/${context.user.avatar}`)} alt="avatar"/>
      }
    </div>
  )
}

export default AvatarImage
