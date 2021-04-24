import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Paper, Typography, makeStyles, Button, Grid } from '@material-ui/core';
import EmployeeStyles from './styles/EmployeeStyles';
import { useHistory } from 'react-router-dom';
import { viewMember } from '../../actions/employeesActions';

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
  label: {
    color: '#42526E',
    fontSize: '13px',
    fontWeight: '400',
  },
  labelValue: {
    color: '#42526E',
    fontSize: '16px',
    fontFamily: 'Roboto',
    fontWeight: '500',
  },
}));

const EmployeeView = ({ employees: { employee } }) => {
  const classes = { ...EmployeeStyles(), ...useStyles() };
  const history = useHistory();

  useEffect(() => {
    viewMember();
  }, [viewMember()]);
  const {
    mpf_id,
    title,
    first_name,
    last_name,
    last_name_chinese,
    fname_chinese,
    gender,
    id_type,
    id_number,
    date_of_birth,
    place_of_birth,
    mobile_number,
    secondary_mobile_number,
    address,
    correspondence_address,
    email,
    preferred_communication_channel,
    preferred_communication_language,
    receive_paper_form_notifications_and_document,
    status,
  } = employee;

  return (
    <>
      <Paper className={classes.pageContent} style={{ fontFamily: 'Roboto' }}>
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
              <div className={classes.labelValue}>{mpf_id}</div>
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
                  <div className={classes.labelValue}>{title}</div>
                </div>
              </Grid>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    First Name
                  </div>
                  <div className={classes.labelValue}> {first_name}</div>
                </div>
              </Grid>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    Last Name
                  </div>
                  <div className={classes.labelValue}>{last_name}</div>
                </div>
              </Grid>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    Last Name (Chinese)
                  </div>
                  <div className={classes.labelValue}> {last_name_chinese}</div>
                </div>
              </Grid>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    First Name (Chinese)
                  </div>
                  <div className={classes.labelValue}>{fname_chinese}</div>
                </div>
              </Grid>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    Gender
                  </div>
                  <div className={classes.labelValue}>{gender}</div>
                </div>
              </Grid>
            </Grid>
            <Grid container item xs={12} sm={6} lg={12}>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    ID Type
                  </div>
                  <div className={classes.labelValue}>{id_type}</div>
                </div>
              </Grid>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    ID Number
                  </div>
                  <div className={classes.labelValue}>{id_number}</div>
                </div>
              </Grid>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    Date of Birth
                  </div>
                  <div className={classes.labelValue}>{date_of_birth}</div>
                </div>
              </Grid>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    Place of Birth
                  </div>
                  <div className={classes.labelValue}>{place_of_birth}</div>
                </div>
              </Grid>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    Mobile Number
                  </div>
                  <div className={classes.labelValue}>{mobile_number}</div>
                </div>
              </Grid>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    Secondary Mobile Number
                  </div>
                  <div className={classes.labelValue}>
                    {secondary_mobile_number}
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={8} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    Residential Address
                  </div>
                  <div className={classes.labelValue}> {address}</div>
                </div>
              </Grid>
              <Grid item sm={4} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    Email
                  </div>
                  <div className={classes.labelValue}> {email} </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    Correspondence Address
                  </div>
                  <div className={classes.labelValue}>
                    {correspondence_address}
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
                  <div className={classes.labelValue}>
                    {preferred_communication_channel}
                  </div>
                </div>
              </Grid>
              <Grid item sm={3} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label}>
                    Preferred Communication Language
                  </div>
                  <div className={classes.labelValue}>
                    {preferred_communication_language}
                  </div>
                </div>
              </Grid>
              <Grid item sm={3} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label}>
                    Receive Paper Form Notifications and Document
                  </div>
                  <div className={classes.labelValue}>
                    {receive_paper_form_notifications_and_document}
                  </div>
                </div>
              </Grid>
              <Grid item sm={3} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label}>Status</div>
                  <div className={classes.labelValue}> {status}</div>
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
          onClick={() => history.push('/employee-search-results')}
          variant="contained"
        >
          BACK TO SEARCH
        </Button>
      </Grid>
    </>
  );
};

EmployeeView.propTypes = {
  employees: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  employees: state.employees,
});

export default connect(mapStateToProps, { viewMember })(EmployeeView);
