import React from 'react'
import '../../css/Star.css'

const Star = () => {
  return(
    <span>
      <img 
        className='star' 
        src={require('../../images/star.png')} alt='star' />
    </span>
  )
}

export default Star