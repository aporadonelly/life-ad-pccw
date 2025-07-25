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
import QuickSearch from "./QuickSearch";
import HighlightedText from "./HighlightedText";
import { isFunction, get, orderBy, toString } from "lodash";

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
  const {
    rowKey,
    page,
    rowsPerPage,
    rows,
    columns,
    renderStickyCell,
    search,
  } = props;
  const cellClasses = useCellStyles();
  const stickyClasses = useStickyStyles();

  return (
    <TableBody>
      {rows
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row) => (
          <TableRow key={row[rowKey]}>
            {columns.map((column) => (
              <TableCell key={column.name} classes={cellClasses}>
                <HighlightedText
                  text={toString(get(row, column.name))}
                  match={search}
                />
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
    rowKey,
    title,
    rows,
    columns,
    rowsPerPage,
    stickyLabel,
    renderStickyCell,
    renderToolbar,
    TableContainerProps,
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

  const toolbar = () =>
    Object.freeze({
      title: (
        <Typography variant="h6" color="primary">
          {title}
        </Typography>
      ),
      quickSearch: <QuickSearch onChange={handleChangeSearch} />,
      pagination: (
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
      ),
    });

  return (
    <TableContainer
      classes={containerClasses}
      component={Paper}
      elevation={0}
      {...TableContainerProps}
    >
      <Toolbar classes={toolbarClasses} disableGutters>
        {isFunction(renderToolbar)
          ? renderToolbar(toolbar())
          : Object.values(toolbar())}
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
            rowKey={rowKey}
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
  rowKey: "id",
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
