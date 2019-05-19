import React, { useContext } from 'react'
import Star from '../components/Star';
import shopContext from '../context/shop-context';

const StarContainer = () => {
  const context = useContext(shopContext)

  return(
    <div>
      {context.starAmount.map((s, index) => <Star key={index} /> )}
    </div>
  )
}

export default StarContainer