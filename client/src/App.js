import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../src/css/App.css';
import ContactNav from './components/layout/ContactNav'
// import Navbar from './components/layout/Navbar';
import Login from './components/layout/auth/Login';
import Register from './components/layout/auth/Register';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import CreateProfile from './components/profile-form/CreateProfile';
import EditProfile from './components/profile-form/EditProfile';
import AgentProfiles from './components/profiles/AgentProfiles';
import Properties from './components/properties/Properties';
//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken'
// import Navbar from './components/layout/Navbar';


if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <ContactNav />
          <Route exact path="/" component={Landing} />
          <Alert />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/agents" component={AgentProfiles} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/create-profile" component={CreateProfile} />
            <PrivateRoute exact path="/edit-profile" component={EditProfile} />
            <PrivateRoute exact path="/properties" component={Properties} />

          </Switch>
          <Footer />
        </Fragment >
      </Router>
    </Provider>
  )
};

export default App;
