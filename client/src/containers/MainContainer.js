import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CountryContainer from './CountryContainer'
import TriviaContainer from './TriviaContainer'
import ProfileContainer from './ProfileContainer';
import LoginContainer from './LoginContainer'

const MainContainer = () => {
  return(
    <div>
      <Switch>
        <Route exact path='/country' component={CountryContainer}/>
        <Route exact path='/trivia' component={TriviaContainer} />
        <Route exact path='/profile' component={ProfileContainer} />
        <Route exact path='/login' component={LoginContainer} />
      </Switch>
    </div>
  )
}

export default MainContainer
