import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CountryContainer from './CountryContainer';

const MainContainer = () => {
  return(
    <div>
      <Switch>
        <Route path='/country/:name' component={CountryContainer}/>
      </Switch>
    </div>
  )
}

export default MainContainer