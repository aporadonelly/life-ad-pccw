import PropTypes from "prop-types";
import {
  createContext,
  useContext,
  useReducer,
  useCallback,
  useEffect,
} from "react";
import { useMountedState } from "react-use";

const Context = createContext();
const { Provider } = Context;

const reducer = (state, action) => {
  switch (action.type) {
    case "siderToggled":
      return { ...state, siderOpen: !state.siderOpen };

    case "settingsToggled":
      return { ...state, settingsOpen: !state.settingsOpen };

    case "setSystemEnv":
      return { ...state, systemEnv: action.systemEnv };

    case "setCycleDate":
      return { ...state, cycleDate: action.cycleDate };

    case "setUser":
      return { ...state, user: action.user };

    default:
      return state;
  }
};

const AppProvider = ({ systemEnv, cycleDate, user, onLogout, children }) => {
  const isMounted = useMountedState();
  const [state, dispatch] = useReducer(reducer, {
    siderOpen: false,
    settingsOpen: false,
    systemEnv: null,
    cycleDate: null,
    user: null,
  });

  console.log(systemEnv);

  useEffect(() => {
    if (isMounted()) {
      dispatch({
        type: "setSystemEnv",
        systemEnv,
      });
    }
  }, [isMounted, systemEnv]);

  useEffect(() => {
    if (isMounted()) {
      dispatch({
        type: "setCycleDate",
        cycleDate,
      });
    }
  }, [isMounted, cycleDate]);

  useEffect(() => {
    if (isMounted()) {
      dispatch({
        type: "setUser",
        user,
      });
    }
  }, [isMounted, user]);

  const siderToggled = useCallback(() => {
    dispatch({ type: "siderToggled" });
  }, [dispatch]);

  const settingsToggled = useCallback(() => {
    dispatch({ type: "settingsToggled" });
  }, [dispatch]);

  return (
    <Provider value={{ ...state, siderToggled, settingsToggled, onLogout }}>
      {children}
    </Provider>
  );
};

AppProvider.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
  }),
  cycleDate: PropTypes.string,
};

export default AppProvider;
export const useAppState = () => useContext(Context);
