import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from "../components/navbar/NavBar";

function RegisterPage () {
  return <h1>Register Page</h1>;
}

function LoginPage () {
  return <h1>Login Page</h1>;
}

function HomePage () {
  return <h1>Home Page</h1>;
}

function RouterApp () {
  return (
    <Router>
      <div>
        <NavBar title={"One Messages"}/>
        <Switch>
          <Route path={"/register"}>
            <RegisterPage/>
          </Route>
          <Route path={"/login"}>
            <LoginPage/>
          </Route>
          <Route path={"/"}>
            <HomePage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default RouterApp;
