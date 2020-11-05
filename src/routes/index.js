import React from "react";
import { Route, Switch } from "react-router-dom";
import SignIn from "../containers/SignIn.jsx";
import SignUp from "../containers/SignUp.jsx";


export default function () {
  return (
    <Switch>
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/SignIn" component={SignIn} />
    </Switch>
  );
}