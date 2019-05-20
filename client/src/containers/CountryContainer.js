import React, { useState } from 'react'
import DisplayContainer from './DisplayContainer';
import CountrySidebarContainer from './CountrySidebarContainer';
import { Grid } from 'semantic-ui-react'
import '../css/Country.css'

const CountryContainer = () => {
  const [activeCountry, setActiveCountry] = useState('Spain')

  return(
    <Grid>
      <Grid.Column width={3}  id='party'>
        <CountrySidebarContainer setActiveCountry={setActiveCountry}/>
      </Grid.Column>
      <Grid.Column width={13}>
        <DisplayContainer activeCountry={activeCountry}/>
      </Grid.Column>
    </Grid>
  )
}

export default CountryContainer
