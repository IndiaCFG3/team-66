import React from "react";
import { Button } from "@material-ui/core";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../config/firebase.config";
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

function Home(props) {
  const { user, signOut, signInWithGoogle } = props;

  return (
    <div>
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
    </div>
  );
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Home);
