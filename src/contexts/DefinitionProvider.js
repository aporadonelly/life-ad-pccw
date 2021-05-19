import { createContext, useContext } from "react";

const Context = createContext();
const { Provider } = Context;

const DefinitionProvider = (props) => {
  const { spacing, xl, lg, md, sm, xs, children } = props;
  const gridProps = {
    container: { spacing },
    item: { xl, lg, md, sm, xs },
  };
  return <Provider value={gridProps}>{children}</Provider>;
};

export default DefinitionProvider;
export const useDefinitionState = () => useContext(Context);
