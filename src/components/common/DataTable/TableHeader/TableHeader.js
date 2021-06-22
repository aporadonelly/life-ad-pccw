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
            <TableCell className={classes.root} {...column.getHeaderProps()}>
              <TableSortLabel {...column.getSortByToggleProps()}>
                {column.render("Header")}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableHead>
  );
};

export default TableHeader;
