import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "firebase/auth";
import Card from "./components/HowTo/Card";
import Home from "./components/Home/Home";
import { Toolbar, IconButton, Typography, Button, makeStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AppbarWebsite from "./components/Home/Appbar";
import RegistrationForm from "./components/Form/RegistrationForm";
import NotFound from "./components/NotFound";
import CustomerListView from "./components/Dashboard/Admin";
import LandingPage from "./components/Home/LandingPage";

const App = () => {
  return (
    <Router>
      <AppbarWebsite />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/howto/:cardName" component={Card} />
        <Route exact path="/register" component={RegistrationForm} />
        <Route exact path="/customerlist" component={CustomerListView} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </Router>
  );
};

export default App;
