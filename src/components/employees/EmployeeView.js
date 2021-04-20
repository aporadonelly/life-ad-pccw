import React from 'react';
import { Paper, Typography, makeStyles, Button } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#fdfdff',
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
    paddingLeft: theme.spacing(0),
    '& .MuiTypography-subtitle2': {
      opacity: '0.6',
    },
    color: '#009CCD',
    fontSize: '#26px',
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

export default function EmployeeView(props) {
  const classes = useStyles();
  const { title } = props;
  return (
    <Paper elevation={0} square className={classes.root}>
      <div className={classes.pageHeader}>
        <div className={classes.pageTitle}>
          <Typography variant="h6" component="div">
            Member Registration View
          </Typography>
        </div>
      </div>
    </Paper>
  );
}
