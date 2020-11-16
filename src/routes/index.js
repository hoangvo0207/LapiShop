import React from "react";
import { Route, Switch } from "react-router-dom";
import Detail from "../pages/Detail.jsx";
import SignIn from "../pages/SignIn.jsx";
import SignUp from "../pages/SignUp.jsx";

export default function() {
  return (
    <Switch>
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/SignIn" component={SignIn} />
      <Route exact path="/DetailPage" component={Detail} />
    </Switch>
  );
}
