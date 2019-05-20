import React, { useState } from 'react'
import Content from './Content';
import Sidebar from './Sidebar';
import { Grid } from 'semantic-ui-react'
import '../../css/Country.css'

const Country = () => {
  const [activeCountry, setActiveCountry] = useState('Spain')

  return(
    <Grid>
      <Grid.Column width={3}  id='party'>
        <Sidebar setActiveCountry={setActiveCountry}/>
      </Grid.Column>
      <Grid.Column width={13}>
        <Content activeCountry={activeCountry}/>
      </Grid.Column>
    </Grid>
  )
}

export default Country
