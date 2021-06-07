import { Switch, Route } from "react-router-dom";
import { AuthWrapper } from "@hocs";

const createRoutes = (routes) => {
  const renderRoutes = (routes) =>
    routes.map((route) => {
      const wrappedComponent = AuthWrapper(route.component);

      if (route.children) {
        return <Switch>{renderRoutes(route.children)}</Switch>;
      }

      return (
        <Route
          key={route.name}
          exact={route.exact}
          name={route.name}
          path={route.path}
          component={wrappedComponent}
        />
      );
    });

  return <Switch>{renderRoutes(routes)}</Switch>;
};

export default createRoutes;
