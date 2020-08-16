import React from "react";
import { AppBar, Toolbar, IconButton, Typography, makeStyles, Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import "./Appbar.css";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../config/firebase.config";
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


function AppbarWebsite(props) {
  const classes = useStyles();
  const { user, signOut, signInWithGoogle } = props;
  // const AppBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          News
        </Typography>
        <Button color="inherit" onClick={ withFirebaseAuth }>Register</Button>
        {user ? (
        <Button colo="inherit" onClick={signOut}>
          Log Out
        </Button>
      ) : (
        <Button color="inherit" onClick={signInWithGoogle}>
          Log In
        </Button>
      )}
      </Toolbar>
    </AppBar>
  );
  // };
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(AppbarWebsite);
