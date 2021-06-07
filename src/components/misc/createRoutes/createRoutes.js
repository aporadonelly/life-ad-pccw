import { Switch, Route } from "react-router-dom";
import { AuthWrapper } from "@hocs";
import { Box } from "@material-ui/core";

const createRoutes = (routes) => {
  const renderRoutes = (routes) =>
    routes.map((route) => {
      const wrappedComponent = AuthWrapper(route.component ?? Box);

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
