import { useDataTableState } from "@contexts/DataTableProvider";
import { useStyles } from "./styles";
import { Table as MuiTable } from "@material-ui/core";

const Table = (props) => {
  const { children } = props;
  const { getTableProps } = useDataTableState();
  const classes = useStyles();

  return (
    <MuiTable className={classes.root} {...getTableProps()}>
      {children}
    </MuiTable>
  );
};

export default Table;
