/**
 * @Name Member Enquiry Page
 * @Description A page where a member can search and enquire.
 * @Author Nelly
 * @UpdatedBy Nelly
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import SearchForm from '../../components/employees/EmployeesSearchForm';

const useStyles = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(2.5),
    padding: theme.spacing(3),
    boxShadow: '0px 3px 6px #00000029',
    borderRadius: '15px',
    width: '80%',
    float: 'right',
    position: 'relative',
    top: '130px',
    marginBottom: '160px',
  },
}));

const Employees = () => {
  const classes = useStyles();
  return (
    <>
      <SearchForm />
    </>
  );
};

export default Employees;
