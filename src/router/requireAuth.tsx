import React, { useEffect } from "react";
// @ts-ignore
import { Redirect } from "react-router";

export const RequireAuthHOC = (ComposedComponent: any) => {
  return (props: any) => {
    const isAuthenticated = true;
    // TODO
    return isAuthenticated ? <ComposedComponent {...props} /> : <Redirect to="/login" />;
  };
};
