import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/styled-components/Navbar'
import SignupContainer from './components/Signup/SignupContainer'
import LoginContainer from './components/Login/LoginContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import ProfileCreate from './components/Profile/ProfileCreate'
import Home from './components/Home/Home'
import AllComments from './components/Home/AllComments'
import AllVisits from './components/Home/AllVisits'

function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignupContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/profile" component={ProfileContainer} />
        <Route exact path="/create" component={ProfileCreate} />
        <Route exact path="/comments" component={AllComments} />
        <Route exact path="/visits" component={AllVisits} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes