import { Switch, Route } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";

const createRoutes = (routes) => (
  <Switch key={nanoid()}>
    {routes.map((route) => {
      const hasChildren = route.children ? true : false;
      if (!hasChildren) {
        return (
          <Route
            key={route.name}
            exact={route.exact}
            name={route.name}
            path={route.path}
            component={route.component}
          />
        );
      }
      return createRoutes(route.children);
    })}
  </Switch>
);

export default createRoutes;
