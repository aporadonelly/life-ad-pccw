import { useDataTableState } from "@contexts/DataTableProvider";
import { Typography } from "@material-ui/core";
import { useStyles } from "./styles";

const TableShowEntries = () => {
  const {
    page,
    pageCount,
    state: { pageIndex, pageSize },
  } = useDataTableState();
  const classes = useStyles();

  return (
    <Typography className={classes.root} variant="body1">
      {page.length * (pageIndex + 1)} of {pageCount * pageSize}
    </Typography>
  );
};

export default TableShowEntries;
