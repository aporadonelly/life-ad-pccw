import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Paper,
  Typography,
  makeStyles,
  Button,
  Grid,
  Chip,
} from '@material-ui/core';
import api from './api/employees';
import EmployeeStyles from './styles/EmployeeStyles';
import EmployeesTable from './EmployeesTable';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#fdfdff',
    display: 'flex',
    justifyContent: 'start',
    flexWrap: 'wrap',
    listStyle: 'none',
  },
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
  pageContentTable: {
    margin: theme.spacing(2.5),
    padding: theme.spacing(3),
    boxShadow: '0px 3px 6px #00000029',
    borderRadius: '15px',
    width: '80%',
    float: 'right',
    position: 'relative',
  },
  chip: {
    margin: theme.spacing(0.5),
    backgroundColor: '#6E55E2',
    color: '#fff',
  },
  chip1: {
    margin: theme.spacing(0.5),
    backgroundColor: '#EA5F63',
    color: '#fff',
  },
  pageHeader: {
    padding: theme.spacing(1),
    display: 'flex',
    marginBottom: theme.spacing(3),
  },
  pageIcon: {
    display: 'inline-block',
    padding: theme.spacing(1),
    color: '#3c44b1',
  },
  pageTitle: {
    paddingLeft: theme.spacing(1),
    '& .MuiTypography-subtitle2': {
      opacity: '0.6',
    },
    color: '#009CCD',
    fontSize: '26px',
  },
  button: {
    background: '#6E55E2',
    color: '#fff',
    fontSize: '14px',
    opacity: 1,
    textTransform: 'none',
    marginRight: '10px',
    marginRLeft: '4px',
    borderRadius: '16px',
    pointerEvents: 'none',
  },
  test: {
    width: '200px',
    display: 'inline-block',
    overflow: 'auto',
    whiteSpace: 'nowrap',
    margin: '0px 10px',
    clear: 'both',
  },
}));

export default function EmployeesSearch(props) {
  const classes = { ...EmployeeStyles(), ...useStyles() };
  const history = useHistory();
  const [employees, setEmployees] = useState(null);
  const [chipData, setChipData] = useState([
    { key: 0, label: 'Gender: Male' },
    { key: 1, label: 'ID Type: HKID' },
  ]);

  const handleDelete = chipToDelete => () => {
    setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key));
  };

  const fetchEmployees = async () => {
    const res = await api.get('/employees');
    return res.data;
  };

  useEffect(() => {
    const getAllEmployees = async () => {
      const allEmp = await fetchEmployees();
      if (allEmp) setEmployees(allEmp);
    };
    getAllEmployees();
  }, []);

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

      <Paper className={classes.pageContentTable}>
        <Grid className={classes.root} item xs={12} lg={12} sm={12}>
          <Grid className={classes.pageTitle} item xs={12} lg={6} sm={12}>
            <Typography variant="h6" component="div">
              Search Result
            </Typography>
          </Grid>
          <Grid className={classes.pageTitle} item xs={12} lg={6} sm={12}>
            <Typography variant="h6" component="div">
              Search Result
            </Typography>
          </Grid>
          <Grid className={classes.pageTitle} item xs={12} lg={12} sm={12}>
            {employees && <EmployeesTable employees={employees} />}
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
