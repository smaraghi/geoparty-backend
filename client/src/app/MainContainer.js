import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Country from '../country/containers/Country'
import Trivia from '../trivia/containers/Trivia'
import Profile from '../profile/containers/Profile';
import Login from '../login/Login'

const MainContainer = () => {
  return(
    <div>
      <Switch>
        <Route exact path='/country' component={Country}/>
        <Route exact path='/trivia' component={Trivia} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </div>
  )
}

export default MainContainer