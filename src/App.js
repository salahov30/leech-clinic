import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import Stocks from './components/Stocks';
import Specialists from './components/Specialists';
import Appointment from './components/Appointment';
import Registration from './components/Registration';

const App = () => (
  <>
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/specialists" component={Specialists} />
      <Route exact path="/stocks" component={Stocks} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/registration" component={Registration} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/appointment" component={Appointment} />
    </Router>
  </>
);

export default App;
