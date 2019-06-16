import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Specialists from "./components/Specialists";
import Appointment from "./components/Appointment";
import Registration from "./components/Registration";
import Services from "./components/Services";
import Dashboard from "./components/Dashboard";
import SpecialistsPage from "./components/Specialists/specialistPage";

const App = () => (
  <>
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/specialists" component={Specialists} />
      <Route exact path="/specialists/:id" component={SpecialistsPage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/registration" component={Registration} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/appointment" component={Appointment} />
      <Route exact path="/about" component={About} />
      <Route path="/profile" component={Profile} />
      <Route path="/dashboard" component={Dashboard} />
    </Router>
  </>
);

export default App;
