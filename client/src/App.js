import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Button } from "@material-ui/core";

import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./config/firebase.config";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class App extends Component {
  render() {
    const { user, signOut, signInWithGoogle } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {user ? <p>Hello, {user.displayName}</p> : <p>Please sign in.</p>}
          {user ? (
            <Button variant="contained" color="primary" onClick={signOut}>
              Sign out
            </Button>
          ) : (
            <Button variant="contained" color="primary" onClick={signInWithGoogle}>
              Sign in with Google
            </Button>
          )}
        </header>
      </div>
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
