import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { get } from 'lodash';

import {
  Box,
  makeStyles,
  TableRow,
  Grid,
  TableBody,
  TableCell,
  Typography,
} from '@material-ui/core';
import useTable from '../useTable';
import { viewMember, saveQuery } from '../../actions/employeesActions';
import EmployeeItem from './EmployeeItem';
import reactStringReplace from '@utils/reactStringReplace';
import AnimatedSearchBar from '@components/AnimatedSearchBar';
import viewEnrollActive from '../../assets/icons/enroll-active.PNG';
import viewEnrollInActive from '../../assets/icons/enroll-inactive.PNG';
import EmployeeStyles from './styles/EmployeeStyles';
import viewReg from '../../assets/icons/view_reg.PNG';
import * as intl from '../../common/labels';

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
      fontSize: '26px',
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
  { id: 'pnsnIdTxt', label: 'MPF ID' },
  { id: 'fullname', label: 'Member Name' },
  { id: 'idTypeId', label: 'ID Type' },
  { id: 'idNoTxt', label: 'ID Number' },
  { id: 'phoneNumber', label: 'Mobile Number' },
  { id: 'emailAddrTxt', label: 'Email' },
  { id: 'statusTypId', label: 'Status' },
  { id: 'action', label: 'Action', disableSorting: true },
];

const EmployeesTable = ({ employees: { employees, employee }, viewMember }) => {
  console.log(employees[0].clntPhones[0].phoneNumber);
  const history = useHistory();
  const classes = { ...useStyles(), ...EmployeeStyles() };

  const [viewMemberState, setViewMemberState] = useState(false);
  const [tableView, setTableView] = useState(true);

  const [filterFn, setfilterFn] = useState({
    fn: items => {
      return items;
    },
  });
  const [search, setSearch] = useState();

  const {
    TblContainer,
    TblHead,
    TblPagination,
    employeesAfterPagingAndSorting,
  } = useTable(employees, headCells, filterFn);

  const handleSearch = e => {
    setSearch(e.target.value);
  };

  const handleClear = e => {
    setSearch('');
  };

  const employeeView = id => {
    viewMember(id);
    setViewMemberState(true);
    setTableView(false);
    saveQuery();
    history.push('/employee-view');
  };

  const highligtedText = (source, match) =>
    reactStringReplace(source, match, (match, i) => (
      <Box display="inline" bgcolor="common.highlighted">
        {match}
      </Box>
    ));

  return (
    <>
      <Grid container alignItems="center" style={{ marginBottom: '-10px' }}>
        <Grid className={classes.pageTitle} item lg={2} sm={3} xs={12}>
          <Typography variant="h6" component="div">
            {intl.labels.searchResult}
          </Typography>
        </Grid>
        <Grid className={classes.pageTitle} item lg={8} sm={6} xs={12}>
          <Box display="flex" justifyContent="flex-end">
            <AnimatedSearchBar
              placeholder="Quick Search"
              value={search}
              onChange={handleSearch}
              onClear={handleClear}
            />
          </Box>
        </Grid>
        <Grid className={classes.pageTitle} item lg={2} sm={3} xs={12}>
          <TblPagination />
        </Grid>
      </Grid>
      <TblContainer>
        <TblHead />
        <TableBody>
          {employeesAfterPagingAndSorting().map(emp => (
            <TableRow key={emp.pnsnIdTxt}>
              <TableCell style={{ color: '#2D9FC3' }}>
                {highligtedText(emp.pnsnIdTxt, search)}
              </TableCell>
              <TableCell>{highligtedText(emp.fullname, search)}</TableCell>
              <TableCell>
                {highligtedText(
                  (() => {
                    switch (emp.idTypeId) {
                      case 'ID_HK':
                        return 'HKID';
                      case 'ID_PP':
                        return 'Passport';
                      default:
                        return 'test';
                    }
                  })(),
                  search
                )}
              </TableCell>
              <TableCell>{highligtedText(emp.idNoTxt, search)}</TableCell>
              <TableCell>
                {highligtedText(
                  get(
                    emp.clntPhones.filter(v => v.phnTypId === 'TP_MB'),
                    '[0].phoneNumber'
                  ),
                  search
                )}
              </TableCell>
              <TableCell>
                {highligtedText(get(emp.cntcts, '[0].emailAddrTxt'), search)}
              </TableCell>
              <TableCell
                style={{
                  textTransform: 'capitalize',
                }}
              >
                {highligtedText(
                  (() => {
                    switch (emp.statusTypId) {
                      case 'ST_NW':
                        return 'New';
                      case 'ST_CP':
                        return 'Completed';
                      default:
                        return 'test';
                    }
                  })(),
                  search
                )}
              </TableCell>
              <TableCell style={{ padding: '0 1px' }}>
                <img
                  src={viewReg}
                  alt="View Registration"
                  onClick={() => employeeView(emp.pnsnIdTxt)}
                  variant="contained"
                  style={{
                    margin: '0 5px',
                    background: '#EF841F',
                    color: '#fff',
                  }}
                />
                <img
                  src={
                    emp.vwEnrFlg === true
                      ? viewEnrollActive
                      : viewEnrollInActive
                  }
                  alt="View Enrollment"
                  variant="contained"
                  style={{
                    margin: '0 5px',
                    background: '#EF841F',
                    color: '#fff',
                  }}
                  // className={classes.disabled}
                />
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
  viewMember: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  employees: state.employees,
});

export default connect(mapStateToProps, { viewMember, saveQuery })(
  EmployeesTable
);
