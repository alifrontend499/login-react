import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import NotFound from './components/not_found/NotFound';
import MyAccount from './components/user/MyAccount';
import Logout from './components/auth/Logout';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/myaccount' component={MyAccount} />
          <Route path='/logout' component={Logout} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
