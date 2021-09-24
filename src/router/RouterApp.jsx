import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function RegisterPage () {
  return <h1>Register Page</h1>;
}

function RouterApp () {
  return (
    <Router>
      <div>
        <Switch>
          <Route path={"/register"}>
            <RegisterPage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default RouterApp;
