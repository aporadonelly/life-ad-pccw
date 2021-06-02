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
  Box,
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
import QuickSearch from "./QuickSearch";
import { isFunction, get, orderBy } from "lodash";
import { reactStringReplace } from "@utils";

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
  const { order, sortBy, columns, stickyLabel, onChangeSort } = props;
  const headClasses = useHeadStyles();
  const stickyClasses = useStickyStyles();

  const createSortHandler = (property) => (event) => {
    onChangeSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <TableCell key={column.label} classes={headClasses}>
            <TableSortLabel
              active={sortBy === column.name}
              direction={sortBy === column.name ? order : "asc"}
              onClick={createSortHandler(column.name)}
            >
              {column.label}
            </TableSortLabel>
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
  const { page, rowsPerPage, rows, columns, renderStickyCell, search } = props;
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
                {reactStringReplace(
                  get(row, column.name),
                  search,
                  (match, index) => (
                    <Box
                      key={index}
                      display="inline"
                      bgcolor="common.highlighted"
                    >
                      {match}
                    </Box>
                  )
                )}
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
  const [order, setOrder] = useState("asc");
  const [sortBy, setSortBy] = useState();
  const [search, setSearch] = useState();
  const containerClasses = useContainerStyles();
  const toolbarClasses = useToolbarStyles();
  const scrollbarClasses = useScrollbarStyles();
  const tableClasses = useTableStyles();
  const paginationClasses = usePaginationStyles();

  const handleChangePage = (_event, newPage) => {
    setPage(newPage);
  };

  const handleChangeSort = (_event, property) => {
    const newOrder = sortBy === property && order === "asc" ? "desc" : "asc";
    setOrder(newOrder);
    setSortBy(property);
  };

  const handleChangeSearch = (newSearch) => {
    setSearch(newSearch);
  };

  return (
    <TableContainer classes={containerClasses} component={Paper} elevation={0}>
      <Toolbar classes={toolbarClasses} disableGutters>
        {title && (
          <Typography variant="h6" color="primary">
            Member Search
          </Typography>
        )}
        <QuickSearch onChange={handleChangeSearch} />
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
          <EnhancedTableHead
            order={order}
            sortBy={sortBy}
            columns={columns}
            stickyLabel={stickyLabel}
            onChangeSort={handleChangeSort}
          />
          <EnhancedTableBody
            page={page}
            rowsPerPage={rowsPerPage}
            rows={orderBy(rows, sortBy, order)}
            columns={columns}
            renderStickyCell={renderStickyCell}
            search={search}
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
