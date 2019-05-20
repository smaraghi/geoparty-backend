import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CountryContainer from './CountryContainer'
import TriviaContainer from './TriviaContainer'
import ProfileContainer from './ProfileContainer';

const MainContainer = () => {
  return(
    <div>
      <Switch>
        <Route path='/country/:name' component={CountryContainer}/>
        <Route exact path='/trivia' component={TriviaContainer} />
        <Route excat path='/profile' component={ProfileContainer} />
      </Switch>
    </div>
  )
}

export default MainContainer
