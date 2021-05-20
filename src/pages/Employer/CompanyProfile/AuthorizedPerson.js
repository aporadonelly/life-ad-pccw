import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import EnhancedTableHead from './TableHeader';
import { Icon } from '@material-ui/core';
import { BusinessCenter } from '../../../assets/icons';

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

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  activeSortIcon: {
    opacity: 1,
    color: '#2D9FC3 !important',
    paddingLeft: 0
  },
  inActiveSortIcon: {
    opacity: 0.2,
  },
  tableHeadAlign: {
    padding: '0px 0px 0px 0px',
  },
  alignAction: {
    display: 'flex',
    // marginRight: '5.5rem'
  },

}));

export default function AuthorizedPerson({ AuthPerson }) {
  const classes = useStyles();
  const [orderDirection, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('status');

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && orderDirection === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  return (
    <div className={classes.root}>
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
            {stableSort(AuthPerson, getComparator(orderDirection, orderBy))
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
                    <TableCell
                    >
                      <div style={{ marginLeft: '12px' }}>
                        <Icon>
                          <img src={BusinessCenter} width="70%" />
                        </Icon>
                      </div>
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