import React from 'react'
import DisplayContainer from './DisplayContainer';
import CountrySelector from '../components/CountrySelector';


const CountryContainer = () => {
  return(
    <div>
      <CountrySelector />
      <DisplayContainer />
    </div>
  )
}

export default CountryContainer