import { Switch, Route } from "react-router-dom";
import createPrivateRoute from "./createPrivateRoute";

const createRoutes = (routes) => {
  const renderRoutes = (routes) =>
    routes.map((route) =>
      route.children ? (
        <Switch>{renderRoutes(route.children)}</Switch>
      ) : (
        <Route
          key={route.name}
          exact={route.exact}
          name={route.name}
          path={route.path}
          {...createPrivateRoute({
            component: route.component,
          })}
        />
      )
    );

  return <Switch>{renderRoutes(routes)}</Switch>;
};

export default createRoutes;
