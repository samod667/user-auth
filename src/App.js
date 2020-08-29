import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Welcome from "./Components/Welcome";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import PasswordReset from "./Components/PasswordReset";
import ProfilePage from "./Components/ProfilePage";

function App() {
  // const user = {
  //   username: 'samod667',
  //   email: 'dorsamoha@gmail.com'
  // }
  const user = null;

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

export default App;
