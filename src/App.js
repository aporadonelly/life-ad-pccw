import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { createRoutes } from "@components/misc";
import { appRoutes } from "@routes";

const routes = createRoutes(appRoutes);

const App = () => {
  const history = useHistory();

  useEffect(() => {
    return history.listen(() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    });
  }, [history]);

  return routes;
};

export default App;
