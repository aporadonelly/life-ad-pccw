import React from 'react';
import { Table, TableCell } from '@material-ui/core';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  table: {
    marginTop: theme.spacing(3),
    '& thead th': {
      fontWeight: '600',
      color: '#42526E',
    },
    '& tbody td': {
      fontWeight: '300',
    },
    '& tbody tr:hover': {
      backgroundColor: '#fffbf2',
      cursor: 'pointer',
    },
  },
}));

export default function useTable(employees, headCells) {
  const classes = { ...useStyles() };
  const TblContainer = props => (
    <Table className={classes.table}>{props.children}</Table>
  );
  const TblHead = props => (
    <TableHead>
      <TableRow>
        {headCells.map(headCell => (
          <TableCell key={headCell.id}>{headCell.label}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );

  return { TblContainer, TblHead };
}
