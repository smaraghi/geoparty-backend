import React, { useState } from 'react'
import DisplayContainer from './DisplayContainer';
import CountrySelector from '../components/CountrySelector';

const CountryContainer = () => {
  const [activeCountry, setActiveCountry] = useState('Spain')

  const handleCountry = (country) => {
    setActiveCountry(country)
  }

  return(
    <div>
    {console.log(activeCountry)}
      <CountrySelector handleCountry={handleCountry}/>
      <DisplayContainer activeCountry={activeCountry}/>
    </div>
  )
}

export default CountryContainer