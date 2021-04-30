export const saveQuery = p => async dispatch => {
  try {
    const res = p;
    dispatch({
      type: CREATE_QUERY_SUCCESS,
      payload: res,
    });
  } catch (e) {
    console.log(e, 'err');
  }
}; 



import {
  FETCH_EMPLOYEES_SUCCESS,
  VIEW_EMPLOYEE_SUCCESS,
  SEARCH_MEMBERS,
  CREATE_QUERY_SUCCESS,
} from '../actions/types';

const initialState = {
  employees: [],
  employee: {},
  enquiry: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES_SUCCESS:
      return {
        ...state,
        employees: action.payload,
      };
    case VIEW_EMPLOYEE_SUCCESS:
      return {
        ...state,
        employee: action.payload,
      };
    case SEARCH_MEMBERS:
      return {
        ...state,
        employees: action.payload,
      };
    case CREATE_QUERY_SUCCESS:
      return {
        ...state,
        enquiry: action.payload,
        // createSuccess: true,
      };
    default:
      return state;
  }
};




import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Paper, Typography, Button, Grid, Chip } from '@material-ui/core';
import EmployeeStyles from './styles/EmployeeStyles';
import EmployeesListStyles from './styles/EmployeesListStyle';
import EmployeesTable from './EmployeesTable';
import { searchMembers, saveQuery } from '../../actions/employeesActions';

const EmployeesList = ({ employees: { employees, enquiry } }) => {
  const classes = {
    ...EmployeeStyles(),
    ...EmployeesListStyles(),
  };
  const history = useHistory();
  const [chipData, setChipData] = useState(enquiry);

  useEffect(() => {
    searchMembers();
    saveQuery();
  }, []);

  const handleDelete = chipToDelete => () => {
    const asArray = Object.entries(chipData);
    const chips = asArray.filter(([key, value]) => key !== chipToDelete);
    setChipData(chips);
    console.log(chips, 'chips');
    searchMembers(chipData);
  };

  const renderObject = () => {
    console.log(chipData, 'chipData');
    return Object.entries(chipData).map(([key, value], i) => {
      let initValue =
        value === 'hkid' ||
        value === 'twid' ||
        value === 'bpo' ||
        value === 'it'
          ? value.toUpperCase()
          : value;
      let initKey = key.replace(/_/g, ' ');
      let label = `${initKey} :  ${initValue}`;

      return (
        <Chip
          style={{ textTransform: 'capitalize', margin: '2px' }}
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
                Member Enquiry
              </Typography>
            </Grid>
            <Grid className={classes.root} item xs={12} lg={12} sm={12}>
              <Grid className={classes.root} item xs={12} lg={8} sm={12}>
                {renderObject()}
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
                  Edit Search
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
                  onClick={() => history.push('/employee-search')}
                >
                  New Search
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
              <p>No employee found.</p>
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

export default connect(mapStateToProps, {})(EmployeesList);
