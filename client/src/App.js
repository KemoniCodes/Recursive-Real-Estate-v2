import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../src/css/App.css';
import Login from './components/layout/auth/Login';
import Register from './components/layout/auth/Register';
import Landing from './components/layout/Landing';

const App = () => (
  <Router>
    <Fragment>
      <Route exact path="/" component={Landing} />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Fragment >
  </Router>
);

export default App;
