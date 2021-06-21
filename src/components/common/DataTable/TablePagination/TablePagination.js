import { useDataTableState } from "@contexts/DataTableProvider";
import { useStyles } from "./styles";
import { Box, ButtonBase } from "@material-ui/core";

const TablePagination = () => {
  const {
    canPreviousPage,
    canNextPage,
    previousPage,
    nextPage,
    state: { pageIndex },
  } = useDataTableState();
  const classes = useStyles();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      width={130}
    >
      <ButtonBase
        className={classes.button}
        onClick={() => previousPage()}
        disabled={!canPreviousPage}
      />
      <Box className={classes.page}>{pageIndex + 1}</Box>
      <ButtonBase
        className={classes.button}
        onClick={() => nextPage()}
        disabled={!canNextPage}
      />
    </Box>
  );
};

export default TablePagination;
