import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Welcome from './Components/Welcome'
import Login from './Components/Login'
import SignUp from './Components/SignUp'

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </Router>
  );
}

export default App;
