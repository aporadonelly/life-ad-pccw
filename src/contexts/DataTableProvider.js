import { createContext, useContext } from "react";
import {
  useTable,
  usePagination,
  useSortBy,
  useGlobalFilter,
} from "react-table";
import { useSticky } from "react-table-sticky";
import { toString } from "lodash";

const Context = createContext();
const { Provider } = Context;

const defaultColumn = {
  Cell: ({ cell: { value }, state: { globalFilter } }) => (
    <div
      dangerouslySetInnerHTML={{
        __html: toString(value).replace(
          new RegExp(globalFilter, "gi"),
          (match) => `<mark>${match}</mark>`
        ),
      }}
    />
  ),
};

const DataTableProvider = (props) => {
  const { columns, data, pageSize, title, children } = props;
  const tableInstance = useTable(
    {
      columns,
      data,
      defaultColumn,
      manualGlobalFilter: true,
      disableSortRemove: true,
      initialState: { pageSize },
    },
    useGlobalFilter,
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
