import { createContext, useContext } from "react";
import { useTable, usePagination, useSortBy } from "react-table";
import { useSticky } from "react-table-sticky";

const Context = createContext();
const { Provider } = Context;

const DataTableProvider = (props) => {
  const { columns, data, pageSize, title, children } = props;
  const tableInstance = useTable(
    {
      columns,
      data,
      disableSortRemove: true,
      initialState: { pageSize },
    },
    useSortBy,
    usePagination,
    useSticky
  );

  return <Provider value={{ ...tableInstance, title }}>{children}</Provider>;
};

DataTableProvider.defaultProps = {
  columns: [],
  data: [],
  pageSize: 50,
};

export default DataTableProvider;
export const useDataTableState = () => useContext(Context);
