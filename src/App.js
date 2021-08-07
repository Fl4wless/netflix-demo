import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./Screens/HomeScreen";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import LoginScreen from "./Screens/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./Screens/ProfileScreen";
import Navbar from "./Navbar";
import { Fragment } from "react";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Fragment>
            <Navbar />
            <Switch>
              <Route path="/profile" exact>
                <ProfileScreen />
              </Route>
              <Route path="/" exact>
                <HomeScreen />
              </Route>
            </Switch>
          </Fragment>
        )}
      </Router>
    </div>
  );
}

export default App;
