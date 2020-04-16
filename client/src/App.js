import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";

import "./App.css";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </Fragment>
  );
};

export default App;
