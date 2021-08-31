import { useDataTableState } from "@contexts/DataTableProvider";
import { Toolbar, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import TableQuickSearch from "../TableQuickSearch";
import TablePagination from "../TablePagination";
import TableShowEntries from "../TableShowEntries";

const TableToolbar = () => {
  const {
    title,
    disableQuickSearch,
    disablePagination,
    disableShowEntries,
  } = useDataTableState();
  const classes = useStyles();

  return (
    <Toolbar className={classes.toolbar} variant="regular">
      <Typography className={classes.title} variant="h6" color="primary">
        {title}
      </Typography>
      {!disableQuickSearch && <TableQuickSearch />}
      {!disablePagination && <TablePagination />}
      {!disableShowEntries && <TableShowEntries />}
    </Toolbar>
  );
};

export default TableToolbar;
