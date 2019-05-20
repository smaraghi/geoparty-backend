import React, { useContext } from 'react'
import Star from '../components/Star';
import shopContext from '../context/shop-context';

const StarContainer = () => {
  const context = useContext(shopContext)

  return(
    <div>
      {Array.from(Array(context.starAmount), (_, i) => <span key={i}><Star /></span>)}
    </div>
  )
}

export default StarContainer
