import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  makeStyles,
  TableRow,
  Grid,
  TableBody,
  TableCell,
  Typography,
  Button,
  Toolbar,
  InputAdornment,
  IconButton,
} from '@material-ui/core';
import Controls from '../controls/Controls';
import useTable from '../useTable';
import { Search } from '@material-ui/icons';
import { viewMember, searchMember } from '../../actions/employeesActions';
import EmployeeItem from './EmployeeItem';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#fdfdff',
    display: 'flex',
    justifyContent: 'start',
    flexWrap: 'wrap',
    listStyle: 'none',
  },
  pageTitle: {
    paddingLeft: theme.spacing(1),
    '& .MuiTypography-subtitle2': {
      opacity: '0.6',
    },
    color: '#009CCD',
    fontSize: '26px',
    fontFamily: 'Roboto',
  },
  disabled: {
    pointerEvents: 'none',
    cursor: 'not-allowed',
    opacity: 0.65,
    filter: 'alpha(opacity=65)',
    boxShadow: 'none',
  },
}));

const headCells = [
  { id: 'mpf_id', label: 'MPF ID' },
  { id: 'full_name', label: 'Member Name' },
  { id: 'id_type', label: 'ID Type' },
  { id: 'id_number', label: 'ID Number' },
  { id: 'mobile_number', label: 'Mobile Number' },
  { id: 'email', label: 'Email' },
  { id: 'status', label: 'Status' },
  { id: 'action', label: 'Action', disableSorting: true },
];

const EmployeesTable = ({
  employees: { employees, employee },
  viewMember,
  // searchMember,
}) => {
  const history = useHistory();
  const classes = { ...useStyles() };
  const [viewMemberState, setViewMemberState] = useState(false);
  const [tableView, setTableView] = useState(true);

  const [filterFn, setfilterFn] = useState({
    fn: items => {
      return items;
    },
  });

  const {
    TblContainer,
    TblHead,
    TblPagination,
    employeesAfterPagingAndSorting,
  } = useTable(employees, headCells, filterFn);

  const handleSearch = e => {
    let target = e.target;
    setfilterFn({
      fn: items => {
        if (target.value == '') return items;
        else
          return items.filter(x =>
            x.full_name.toLowerCase().includes(target.value)
          );
      },
    });
  };

  const employeeView = id => {
    viewMember(id);
    setViewMemberState(true);
    setTableView(false);
    history.push('/employee-view');
  };

  return (
    <>
      <Grid className={classes.root} item xs={12} lg={12} sm={12}>
        <Grid className={classes.pageTitle} item xs={12} lg={6} sm={12}>
          <Typography variant="h6" component="div">
            Search Result
          </Typography>
        </Grid>
        <Grid className={classes.pageTitle} item xs={12} lg={3} sm={12}>
          <Toolbar>
            <Controls.Input
              name="searchQuery"
              type="search"
              onChange={handleSearch}
              placeholder="Quick Search"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton
                      data-testid="search-icon"
                      aria-label="Search"
                      disableRipple
                    >
                      <Search />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Toolbar>
        </Grid>
        <Grid className={classes.pageTitle} item xs={12} lg={3} sm={12}>
          <TblPagination />
        </Grid>
      </Grid>
      <TblContainer>
        <TblHead />
        <TableBody>
          {employeesAfterPagingAndSorting().map(emp => (
            <TableRow key={emp.id}>
              <TableCell style={{ color: '#2D9FC3' }}>{emp.mpf_id}</TableCell>
              <TableCell>
                {emp.first_name} {''}
                {emp.last_name}
              </TableCell>
              <TableCell>{emp.id_type}</TableCell>
              <TableCell>{emp.id_number}</TableCell>
              <TableCell>{emp.mobile_number}</TableCell>
              <TableCell>{emp.email}</TableCell>
              <TableCell>{emp.status}</TableCell>
              <TableCell style={{ padding: '0 1px' }}>
                <Button
                  onClick={() => employeeView(emp.id)}
                  variant="contained"
                  color="primary"
                  style={{ margin: '0 5px' }}
                  className={emp.status === 'Inactive' && classes.disabled}
                >
                  R
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ margin: '0 5px' }}
                >
                  E
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TblContainer>
      <TblPagination />
      {viewMemberState && <EmployeeItem employee={employee} />}
    </>
  );
};

EmployeesTable.propTypes = {
  employees: PropTypes.object.isRequired,
  searchMember: PropTypes.func.isRequired,
  viewMember: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  employees: state.employees,
});

export default connect(mapStateToProps, { viewMember, searchMember })(
  EmployeesTable
);
