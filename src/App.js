import React from "react";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
// Styles
import "./App.css";
// Pages
import Login from "./containers/Login";
import CreateAccount from "./containers/CreateAccount";
import UserProfile from "./containers/UserProfile";
import Header from "./components/Header";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "exercise-five-fall-2020-9a946.firebaseapp.com",
  databaseURL: "https://exercise-five-fall-2020-9a946.firebaseio.com",
  projectId: "exercise-five-fall-2020-9a946",
  storageBucket: "exercise-five-fall-2020-9a946.appspot.com",
  messagingSenderId: "6993524755",
  appId: "1:6993524755:web:edac0fe88bf09f55e727e6",
};

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/create-account">
          <CreateAccount />
        </Route>
        <Route exact path="/">
          <UserProfile />
        </Route>
      </Router>
    </div>
  );
}

export default App;
