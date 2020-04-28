import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Alerts from "./components/Alerts/Alerts";
import "./App.css";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <Alerts />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </Fragment>
  );
};

export default App;
