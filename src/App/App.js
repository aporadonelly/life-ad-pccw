import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { createRoutes } from "@components/misc";
import { appRoutes } from "@routes";
import { Page } from "@containers";

const intervalTime = 1000 * 60 * 8;

const routes = createRoutes(appRoutes);

const App = (props) => {
  const { isAuthenticating, reissue } = props;
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

  useEffect(() => {
    const interval = setInterval(() => {
      reissue();
    }, intervalTime);

    return () => clearInterval(interval);
  }, [reissue]);

  if (isAuthenticating) return null;

  return <Page>{routes}</Page>;
};

export default App;
