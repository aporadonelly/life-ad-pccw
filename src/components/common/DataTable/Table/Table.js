import { useDataTableState } from "@contexts/DataTableProvider";
import { useStyles } from "./styles";
import { Table as MuiTable } from "@material-ui/core";

const Table = (props) => {
  const { children } = props;
  const { getTableProps, tableProps } = useDataTableState();
  const classes = useStyles();

  return (
    <MuiTable className={classes.root} {...getTableProps(tableProps)}>
      {children}
    </MuiTable>
  );
};

export default Table;
