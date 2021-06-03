import PropTypes from "prop-types";
import { createContext, useContext, useReducer } from "react";

const Context = createContext();
const { Provider } = Context;

const reducer = (state, action) => {
  switch (action.type) {
    case "sidebarCollapsed":
      return { ...state, collapsed: !state.collapsed };

    case "settingsToggled":
      return { ...state, settingsOpen: !state.settingsOpen };

    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    collapsed: false,
    settingsOpen: false,
  });

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

AppProvider.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
  }),
  cycleDate: PropTypes.string,
};

export default AppProvider;
export const useAppState = () => useContext(Context);
