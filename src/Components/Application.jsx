import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserContext } from '../Providers/UserProvider'

import Welcome from "./Welcome";
import Login from "./Login";
import SignUp from "./SignUp";
import PasswordReset from "./PasswordReset";
import ProfilePage from "./ProfilePage";

function Application() {
    const user = useContext(UserContext);

    return user ? (
      <ProfilePage />
    ) : (
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/password-reset" component={PasswordReset}></Route>
        </Switch>
      </Router>
    );
}

export default Application
