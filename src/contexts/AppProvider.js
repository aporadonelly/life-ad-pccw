import PropTypes from "prop-types";
import { createContext, useContext, useReducer } from "react";

const Context = createContext();
const { Provider } = Context;

const reducer = (state, action) => {
  switch (action.type) {
    case "collapsed":
      return { ...state, collapsed: !state.collapsed };

    case "languageSwitcher":
      return { ...state, languageSwitcherOpen: !state.languageSwitcherOpen };

    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    collapsed: false,
    languageSwitcherOpen: false,
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
