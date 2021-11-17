import React from "react";
// @ts-ignore
import { Route, Switch } from "react-router";

export const routerAssessor = (parentRoutePath: string | null, route: any) => {
  const { children, path, exact, component } = route;

  if (!children.length) {
    return (
      <Route
        key={path}
        path={parentRoutePath ? `${parentRoutePath}${path}` : path}
        // @ts-ignore
        exact={exact}
        component={component}
      />
    );
  } else {
    return (
      <Switch key="parent">
        <Route
          key={path}
          path={parentRoutePath ? `${parentRoutePath}${path}` : path}
          // @ts-ignore
          exact={exact}
          component={component}
        />
        {children.map((childRoute: any) => routerAssessor(path, childRoute))}
      </Switch>
    );
  }
};
