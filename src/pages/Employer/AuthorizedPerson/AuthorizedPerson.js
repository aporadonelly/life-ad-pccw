import React from 'react';
import { TableContainer, TableRow, Table, TableBody, TableCell, Icon, Tooltip } from '@material-ui/core';
import EnhancedTableHead from './TableHeader';
import { ViewButton } from '../../../assets/icons';
import { _ } from 'lodash';
import useStyles from './styles';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(orderDirection, orderBy) {
  return orderDirection === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const orderDirection = comparator(a[0], b[0]);
    if (orderDirection !== 0) return orderDirection;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}


export default function AuthorizedPerson({ authPerson }) {
  const classes = useStyles();
  const [orderDirection, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('status');

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && orderDirection === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  return (
    <div className={classes.root} >
      <TableContainer>
        <Table
          className={classes.table}
          aria-labelledby="tableTitle"
          size={'small'}
          aria-label="enhanced table"
        >
          <EnhancedTableHead
            classes={classes}
            orderDirection={orderDirection}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
          />
          <TableBody>
            {stableSort(authPerson, getComparator(orderDirection, orderBy))
              .map((row, index) => {
                return (
                  <TableRow
                    hover
                    tabIndex={-1}
                    key={index}
                  >
                    <TableCell component="th" id={index} scope="row" padding="none">
                      {row.lastNameEng}
                    </TableCell>
                    <TableCell>{row.firstNameEng}</TableCell>
                    <TableCell>{row.lastNameChi}</TableCell>
                    <TableCell>{row.firstNameChi}</TableCell>
                    <TableCell align="right">
                      <Tooltip title="View" placement="top" arrow>
                        <Icon style={{ cursor: "pointer" }}>
                          <img src={ViewButton} width="32px" />
                        </Icon>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}