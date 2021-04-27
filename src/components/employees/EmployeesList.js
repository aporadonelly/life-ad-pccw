import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Paper, Typography, Button, Grid, Chip } from '@material-ui/core';
import EmployeeStyles from './styles/EmployeeStyles';
import EmployeesListStyles from './styles/EmployeesListStyle';
import EmployeesTable from './EmployeesTable';
import { searchMembers } from '../../actions/employeesActions';

const EmployeesList = ({ employees: { employees } }) => {
  console.log(employees, 'enquiry');
  const classes = {
    ...EmployeeStyles(),
    ...EmployeesListStyles(),
  };
  const history = useHistory();

  useEffect(() => {
    searchMembers();
  }, []);

  const [chipData, setChipData] = useState([
    { key: 0, label: 'Gender: Male' },
    { key: 1, label: 'ID Type: HKID' },
  ]);

  // const [chipData, setChipData] = useState(enquiry);

  const handleDelete = chipToDelete => () => {
    setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key));
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
                {chipData.map(data => {
                  let icon;
                  return (
                    <li key={data.key}>
                      <Chip
                        icon={icon}
                        label={data.label}
                        onDelete={handleDelete(data)}
                        className={
                          data.label === 'ID Type: HKID'
                            ? classes.chip1
                            : classes.chip
                        }
                      />
                    </li>
                  );
                })}
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
