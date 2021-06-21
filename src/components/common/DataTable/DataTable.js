import DataTableProvider from "@contexts/DataTableProvider";
import { TableContainer } from "@material-ui/core";
import TableToolbar from "./TableToolbar";
import TableScrollbar from "./TableScrollbar";
import Table from "./Table";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const DataTable = (props) => {
  const { components: Components, ...rest } = props;
  return (
    <DataTableProvider {...rest}>
      <TableContainer>
        <Components.Toolbar />
        <TableScrollbar>
          <Table>
            <TableHeader />
            <TableBody />
          </Table>
        </TableScrollbar>
      </TableContainer>
    </DataTableProvider>
  );
};

DataTable.defaultProps = {
  components: {
    Toolbar: TableToolbar,
  },
};

export default DataTable;
