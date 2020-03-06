import React from "react";
import { Route, Redirect } from "react-router-dom";
import { store } from "../store";

interface Props {
  component: React.FC;
  isPrivate?: boolean;
  exact?: boolean;
  path: string;
}

export const RouteWrapper: React.FC<Props> = ({
  component: Component,
  isPrivate,
  ...rest
}) => {
  const { signed } = store.getState().auth;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/index" />;
  }

  return <Route {...rest} component={Component} />;
};

RouteWrapper.defaultProps = {
  isPrivate: false
};
