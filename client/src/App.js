import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "firebase/auth";
import Card from "./components/HowTo/Card";
import Home from "./components/Home/Home";
import { Toolbar, IconButton, Typography, Button, makeStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AppbarWebsite from "./components/Home/Appbar";
import RegistrationForm from "./components/Form/RegistrationForm";

const App = () => {
  return (
    <Router>
      <AppbarWebsite />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/howto/:cardName" component={Card} />
        <Route exact path="/register" component={RegistrationForm} />
      </Switch>
    </Router>
  );
};

export default App;
