import { useDataTableState } from "@contexts/DataTableProvider";
import { useStyles } from "./styles";
import {
  TableBody as MuiTableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";

const TableBody = () => {
  const { getTableBodyProps, prepareRow, page, columns } = useDataTableState();
  const classes = useStyles();

  if (page.length === 0) {
    return (
      <MuiTableBody {...getTableBodyProps()}>
        <TableRow>
          <TableCell colSpan={columns.length} align="center">
            No data found
          </TableCell>
        </TableRow>
      </MuiTableBody>
    );
  }

  return (
    <MuiTableBody {...getTableBodyProps()}>
      {page.map((row) => {
        prepareRow(row);
        return (
          <TableRow {...row.getRowProps()}>
            {row.cells.map((cell) => {
              return (
                <TableCell
                  className={classes.root}
                  {...cell.getCellProps(cell.column.cellProps)}
                >
                  {cell.render("Cell")}
                </TableCell>
              );
            })}
          </TableRow>
        );
      })}
    </MuiTableBody>
  );
};

export default TableBody;
