import { useDataTableState } from "@contexts/DataTableProvider";
import { useStyles } from "./styles";
import {
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
} from "@material-ui/core";

const TableHeader = () => {
  const { headerGroups } = useDataTableState();
  const classes = useStyles();

  return (
    <TableHead>
      {headerGroups.map((headerGroup) => (
        <TableRow {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <TableCell
              sortDirection={
                column.isSorted ? (column.isSortedDesc ? "desc" : "asc") : false
              }
              className={classes.root}
              {...column.getHeaderProps()}
            >
              {column.canSort ? (
                <TableSortLabel
                  active={column.isSorted}
                  direction={
                    column.isSorted
                      ? column.isSortedDesc
                        ? "desc"
                        : "asc"
                      : "asc"
                  }
                  {...column.getSortByToggleProps()}
                >
                  {column.render("Header")}
                </TableSortLabel>
              ) : (
                column.render("Header")
              )}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableHead>
  );
};

export default TableHeader;
