import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import RegisterPage from "../page/register-page/RegisterPage";

function LoginPage () {
  return <p>Login Page</p>;
}

function HomePage () {
  return <p>Home Page</p>;
}

function RouterApp () {
  return (
    <Router>
      <div>
        <NavBar title={"One Messages"}/>

        <div className={"container py-2"}>
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

      </div>
    </Router>
  );
}

export default RouterApp;
