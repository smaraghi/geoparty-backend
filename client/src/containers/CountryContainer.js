import React, { useState } from 'react'
import DisplayContainer from './DisplayContainer';
import CountrySelector from '../components/CountrySelector';
import { Grid } from 'semantic-ui-react'

const CountryContainer = () => {
  const [activeCountry, setActiveCountry] = useState('Spain')

  const handleCountry = (country) => {
    setActiveCountry(country)
  }

  return(
    <Grid>
      <Grid.Column width={3}  id='party'>
        <CountrySelector handleCountry={handleCountry}/>
      </Grid.Column>
      <Grid.Column width={13}>
        <DisplayContainer activeCountry={activeCountry}/>
      </Grid.Column>
    </Grid>
  )
}

export default CountryContainer