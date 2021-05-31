import PropTypes from "prop-types";
import { useState } from "react";
import {
  useContainerStyles,
  useToolbarStyles,
  useScrollbarStyles,
  useTableStyles,
  useHeadStyles,
  useCellStyles,
  usePaginationStyles,
  usePaginationActionsStyles,
  useStickyStyles,
} from "./styles";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableSortLabel,
  TablePagination,
  Toolbar,
  Typography,
  ButtonBase,
} from "@material-ui/core";
import PerfectScrollbar from "react-perfect-scrollbar";
import { isFunction, get } from "lodash";

const TablePaginationActions = (props) => {
  const { count, page, rowsPerPage, onChangePage } = props;
  const paginationActionsClasses = usePaginationActionsStyles();

  const handlePrevClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextClick = (event) => {
    onChangePage(event, page + 1);
  };

  return (
    <div className={paginationActionsClasses.root}>
      <ButtonBase
        className={paginationActionsClasses.buttonBase}
        size="small"
        onClick={handlePrevClick}
        disabled={page === 0}
      />
      <span className={paginationActionsClasses.page}>{page + 1}</span>
      <ButtonBase
        className={paginationActionsClasses.buttonBase}
        size="small"
        onClick={handleNextClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
      />
    </div>
  );
};

const EnhancedTableHead = (props) => {
  const { columns, stickyLabel } = props;
  const headClasses = useHeadStyles();
  const stickyClasses = useStickyStyles();
  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <TableCell key={column.label} classes={headClasses}>
            <TableSortLabel onClick={() => {}}>{column.label}</TableSortLabel>
          </TableCell>
        ))}
        {stickyLabel && (
          <TableCell className={stickyClasses.root} align="center">
            {stickyLabel}
          </TableCell>
        )}
      </TableRow>
    </TableHead>
  );
};

const EnhancedTableBody = (props) => {
  const { page, rowsPerPage, rows, columns, renderStickyCell } = props;
  const cellClasses = useCellStyles();
  const stickyClasses = useStickyStyles();
  return (
    <TableBody>
      {rows
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row) => (
          <TableRow key={row.id}>
            {columns.map((column) => (
              <TableCell key={column.name} classes={cellClasses}>
                {get(row, column.name)}
              </TableCell>
            ))}
            {isFunction(renderStickyCell) && (
              <TableCell className={stickyClasses.root}>
                {renderStickyCell(row)}
              </TableCell>
            )}
          </TableRow>
        ))}
    </TableBody>
  );
};

const TableCustomized = (props) => {
  const {
    title,
    rows,
    columns,
    rowsPerPage,
    stickyLabel,
    renderStickyCell,
  } = props;
  const [page, setPage] = useState(0);
  const containerClasses = useContainerStyles();
  const toolbarClasses = useToolbarStyles();
  const scrollbarClasses = useScrollbarStyles();
  const tableClasses = useTableStyles();
  const paginationClasses = usePaginationStyles();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <TableContainer classes={containerClasses} component={Paper} elevation={0}>
      <Toolbar classes={toolbarClasses} disableGutters>
        {title && (
          <Typography variant="h6" color="primary">
            Member Search
          </Typography>
        )}
        <TablePagination
          component="div"
          classes={paginationClasses}
          colSpan={3}
          count={rows.length}
          labelRowsPerPage=""
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          ActionsComponent={TablePaginationActions}
        />
      </Toolbar>
      <PerfectScrollbar
        className={scrollbarClasses.root}
        options={{ maxScrollbarLength: 75 }}
      >
        <Table classes={tableClasses}>
          <EnhancedTableHead columns={columns} stickyLabel={stickyLabel} />
          <EnhancedTableBody
            page={page}
            rowsPerPage={rowsPerPage}
            rows={rows}
            columns={columns}
            renderStickyCell={renderStickyCell}
          />
        </Table>
      </PerfectScrollbar>
    </TableContainer>
  );
};

TableCustomized.defaultProps = {
  rowsPerPage: 50,
  rows: [],
  columns: [],
};

TableCustomized.propTypes = {
  title: PropTypes.string,
  rowsPerPage: PropTypes.number.isRequired,
  rows: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  stickyLabel: PropTypes.string,
  renderStickyCell: PropTypes.func,
};

export default TableCustomized;
