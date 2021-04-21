import React from 'react';
import { Paper, Typography, makeStyles, Button, Grid } from '@material-ui/core';
import EmployeeStyles from './styles/EmployeeStyles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#fdfdff',
  },
  pageHeader: {
    padding: theme.spacing(1),
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
  label: {
    color: '#42526E',
    fontSize: '13px',
  },
  labelValue: {
    color: '#42526E',
    fontSize: '16px',
    fontWeight: 'Bold',
  },
}));

export default function EmployeeView(props) {
  const classes = { ...EmployeeStyles(), ...useStyles() };
  const history = useHistory();

  const { title } = props;
  return (
    <>
      <Paper className={classes.pageContent}>
        <Grid container>
          <Grid item xs={12}>
            <Grid className={classes.pageTitle} item xs={12} lg={12} sm={12}>
              <Typography
                variant="h6"
                component="div"
                style={{ fontSize: '26px' }}
              >
                Member Registration View
              </Typography>
              <Button
                className={classes.formBtn}
                style={{ float: 'right', bottom: '35px', width: '84px' }}
                variant="contained"
              >
                Edit
              </Button>
              <div className={classes.label} variant="contained">
                MPF ID
              </div>
              <div className={classes.labelValue}>273637338</div>
            </Grid>
            <div className={classes.subLabel}>Personal Information</div>
            <Grid
              container
              item
              xs={12}
              sm={6}
              lg={12}
              style={{ marginTop: '-20px' }}
            >
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    Title
                  </div>
                  <div className={classes.labelValue}>Mr</div>
                </div>
              </Grid>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    First Name
                  </div>
                  <div className={classes.labelValue}>Tai Man</div>
                </div>
              </Grid>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    Last Name
                  </div>
                  <div className={classes.labelValue}>Chan</div>
                </div>
              </Grid>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    Last Name (Chinese)
                  </div>
                  <div className={classes.labelValue}>陳</div>
                </div>
              </Grid>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    First Name (Chinese)
                  </div>
                  <div className={classes.labelValue}>大文</div>
                </div>
              </Grid>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    Gender
                  </div>
                  <div className={classes.labelValue}>Male</div>
                </div>
              </Grid>
            </Grid>
            <Grid container item xs={12} sm={6} lg={12}>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    ID Type
                  </div>
                  <div className={classes.labelValue}>HKID</div>
                </div>
              </Grid>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    ID Number
                  </div>
                  <div className={classes.labelValue}> F223546(8)</div>
                </div>
              </Grid>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    Date of Birth
                  </div>
                  <div className={classes.labelValue}>21 Aug 1998</div>
                </div>
              </Grid>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    Place of Birth
                  </div>
                  <div className={classes.labelValue}> Hong Kong</div>
                </div>
              </Grid>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    Mobile Number
                  </div>
                  <div className={classes.labelValue}>+852 8876 3635</div>
                </div>
              </Grid>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    Secondary Mobile Number
                  </div>
                  <div className={classes.labelValue}>+852 9883 2123</div>
                </div>
              </Grid>
              <Grid item xs={12} sm={8} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    Residential Address
                  </div>
                  <div className={classes.labelValue}>
                    Rm 307, Man Tai Building, 31 Lok Man Street, Tai Po, NT.
                  </div>
                </div>
              </Grid>
              <Grid item sm={4} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    Email
                  </div>
                  <div className={classes.labelValue}>man_tt@ssis.com </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    Correspondence Address
                  </div>
                  <div className={classes.labelValue}>
                    Flat 2232, Good Manson, 28 Main Street, Tai Kwok Tsui,
                    Kowloon.
                  </div>
                </div>
              </Grid>
            </Grid>
            <div className={classes.subLabel}>Other Information</div>
            <Grid
              container
              item
              xs={12}
              sm={6}
              lg={12}
              style={{ marginTop: '-20px' }}
            >
              <Grid item sm={3} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label}>
                    Preferred Communication Channel
                  </div>
                  <div className={classes.labelValue}> Mobile SMS</div>
                </div>
              </Grid>
              <Grid item sm={3} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label}>
                    Preferred Communication Language
                  </div>
                  <div className={classes.labelValue}> Traditional Chinese</div>
                </div>
              </Grid>
              <Grid item sm={3} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label}>
                    Receive Paper Form Notifications and Document
                  </div>
                  <div className={classes.labelValue}> No</div>
                </div>
              </Grid>
              <Grid item sm={3} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label}>Status</div>
                  <div className={classes.labelValue}> Active</div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Grid
        container
        item
        xs={12}
        sm={12}
        justify="flex-end"
        className={classes.fieldSpacing}
      >
        <Button
          className={classes.cancelBtn}
          style={{
            float: 'right',
            bottom: '35px',
            width: '163px',
            color: '#fff',
            top: '.5px',
          }}
          onClick={() => history.push('/employee-search')}
          variant="contained"
        >
          BACK TO SEARCH
        </Button>
      </Grid>
    </>
  );
}
