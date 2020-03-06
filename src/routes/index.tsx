import React from "react";
import { Switch } from "react-router-dom";
import { RouteWrapper as Route } from "./Route";

import { Main } from "../pages/Main";
import { Signin } from "../pages/Signin";
import { Signup } from "../pages/Signup";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Signin} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/index" component={Main} isPrivate />
    </Switch>
  );
}
