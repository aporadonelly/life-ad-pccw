import React from "react";
import { Switch, Route } from "react-router-dom";
import { AuthWrapper } from "@hocs";
import { isArray } from "lodash";

const createRoutes = (routes) => (
  <Switch>
    {routes.map((route) => {
      if (!isArray(route.children)) {
        const wrappedComponent = AuthWrapper(route.component);
        return (
          <Route
            key={route.name}
            exact={route.exact}
            name={route.name}
            path={route.path}
            component={wrappedComponent}
          />
        );
      }

      return (
        <Route
          key={route.name}
          exact={route.exact}
          name={route.name}
          path={route.path}
          component={() => createRoutes(route.children)}
        />
      );
    })}
  </Switch>
);

export default createRoutes;
