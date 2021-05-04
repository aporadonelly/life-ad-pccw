import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Paper, Typography, Button, Grid, Chip } from '@material-ui/core';
import EmployeeStyles from './styles/EmployeeStyles';
import EmployeesListStyles from './styles/EmployeesListStyle';
import EmployeesTable from './EmployeesTable';
import * as intl from '../../common/labels';

const EmployeesList = ({ employees: { employees, enquiry }, ...props }) => {
  const classes = {
    ...EmployeeStyles(),
    ...EmployeesListStyles(),
  };

  console.log(enquiry);

  const history = useHistory();
  const [chipData, setChipData] = useState({});

  useEffect(() => {
    setChipData(enquiry);
  }, []);

  const handleDelete = chipToDelete => () => {
    const asArray = Object.entries(chipData);
    const chips = asArray.filter(([key, value]) => key !== chipToDelete);
    // setChipData(chips);
    // props.dispatch({ type: 'CLEAR_FIELD_SEARCH_FORM', payload: chipToDelete });
  };

  const renderObject = () => {
    return Object.entries(chipData).map(([key, value], i) => {
      let initKey =
        key === 'id_type' ||
        key === 'mpf_id' ||
        key === 'first_name' ||
        key === 'chinese_name' ||
        key === 'id_number' ||
        key === 'date_of_birth' ||
        key === 'place_of_birth' ||
        key === 'mobile_number' ||
        key === 'date_of_employment' ||
        key === 'employee_type' ||
        key === 'reported_industry_type' ||
        key === 'mpf_scheme_name' ||
        key === 'tax_residency'
          ? key.replace(/_/g, ' ')
          : key;
      let initValue = value === 'HK ID' ? value.replace(/_/g, ' ') : value;
      let finalKey = initKey === 'tin' ? initKey.toUpperCase() : initKey;
      let label = `${finalKey} :  ${initValue}`;

      if (initValue)
        return (
          <Chip
            // style={{ textTransform: 'capitalize', margin: '2px' }}
            className={key !== 'email' && classes.chips}
            key={key}
            label={label}
            onDelete={handleDelete(key)}
            color="primary"
          />
        );
    });
  };

  const handleEditSearch = () => {
    history.push('/employee-search');
  };

  return (
    <>
      <Paper className={classes.pageContent}>
        <Grid container>
          <Grid item xs={12} lg={12} sm={12}>
            <Grid className={classes.pageTitle} item xs={12} lg={12} sm={12}>
              <Typography variant="h6" component="div">
                {intl.labels.memberEnquiry}
              </Typography>
            </Grid>
            <Grid className={classes.root} item xs={12} lg={12} sm={12}>
              <Grid className={classes.root} item xs={12} lg={8} sm={12}>
                {chipData && renderObject()}
              </Grid>
              <Grid
                style={{
                  justifyContent: 'flex-end',
                  display: 'flex',
                }}
                item
                xs={12}
                lg={4}
                sm={12}
              >
                <Button
                  className={classes.formBtn}
                  style={{ width: 'auto', top: '-8px' }}
                  variant="contained"
                  onClick={handleEditSearch}
                >
                  {intl.labels.editSearch}
                </Button>
                <Button
                  className={classes.formBtn}
                  variant="contained"
                  style={{
                    width: 'auto',
                    top: '-8px',
                    background: '#EF841F',
                    color: '#fff',
                  }}
                  onClick={() => {
                    history.push('/employee-search');
                    props.dispatch({ type: 'CLEAR_SEARCH_FORM' });
                  }}
                >
                  {intl.labels.newSearch}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.pageContentTable} style={{ top: '-25px' }}>
        <Grid className={classes.root} item xs={12} lg={12} sm={12}>
          <Grid className={classes.pageTitle} item xs={12} lg={12} sm={12}>
            {employees.length > 0 ? (
              <EmployeesTable employees={employees} />
            ) : (
              <p>NO DATA FOUND</p>
            )}
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

EmployeesList.propTypes = {
  employees: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  employees: state.employees,
});

export default connect(mapStateToProps, null)(EmployeesList);
