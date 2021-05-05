import PropTypes from "prop-types";
import { createContext, useContext, useReducer, useCallback } from "react";

const Context = createContext();
const { Provider } = Context;

const reducer = (state, action) => {
  switch (action.type) {
    case "siderToggled":
      return { ...state, siderOpen: !state.siderOpen };

    case "settingsToggled":
      return { ...state, settingsOpen: !state.settingsOpen };

    default:
      return state;
  }
};

const AppProvider = ({ user, cycleDate, children }) => {
  const [state, dispatch] = useReducer(reducer, {
    siderOpen: false,
    settingsOpen: false,
    user,
    cycleDate,
  });

  const siderToggled = useCallback(() => {
    dispatch({ type: "siderToggled" });
  }, [dispatch]);

  const settingsToggled = useCallback(() => {
    dispatch({ type: "settingsToggled" });
  }, [dispatch]);

  return (
    <Provider value={{ ...state, siderToggled, settingsToggled }}>
      {children}
    </Provider>
  );
};

AppProvider.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    role: PropTypes.string,
  }),
  cycleDate: PropTypes.string,
};

export default AppProvider;
export const useAppState = () => useContext(Context);
