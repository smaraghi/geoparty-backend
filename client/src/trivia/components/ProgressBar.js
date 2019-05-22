import React, { useContext } from 'react'
import shopContext from '../../context/shop-context'
import '../../css/ProgressBar.css'
import Filler from './Filler'
import { isEmpty } from 'lodash'

const ProgressBar = () => {
  const context = useContext(shopContext)

  return(
    <div className="progress-bar">
      <Filler percentage={context.percentage}/>
    </div>
  )
}

export default ProgressBar
