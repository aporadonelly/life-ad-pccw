import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Paper, Typography, makeStyles, Button, Grid } from '@material-ui/core';
import EmployeeStyles from './styles/EmployeeStyles';
import { useHistory } from 'react-router-dom';

import * as intl from '../../common/labels';
import Controls from '../controls/Controls';

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

const EmployeeView = ({ employees: { employee, id } }) => {
  const classes = { ...EmployeeStyles(), ...useStyles() };
  const history = useHistory();

  const {
    mpf_id,
    title,
    first_name,
    last_name,
    last_name_chinese,
    chinese_name,
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

  const goToSearch = () => {
    history.push('/employee-search-results');
  };

  return (
    <>
      <Paper className={classes.pageContent} style={{ fontFamily: 'Roboto' }}>
        <Grid container>
          <Grid item xs={12}>
            <Grid
              className={classes.pageTitle}
              item
              xs={12}
              lg={12}
              sm={12}
              style={{ marginBottom: '10px' }}
            >
              <Typography
                variant="h6"
                component="div"
                style={{ fontSize: '26px' }}
              >
                {intl.labels.member_reg_view}
              </Typography>
              <Controls.Button
                text="edit"
                className={classes.formBtn}
                style={{ float: 'right', bottom: '35px', width: '84px' }}
                variant="contained"
              ></Controls.Button>
              <div className={classes.label} variant="contained">
                {intl.labels.mpf_id}
              </div>
              <div className={classes.labelValue}>{mpf_id}</div>
            </Grid>
            <div className={classes.subLabel}>{intl.labels.personal_info}</div>
            <Grid
              container
              item
              xs={12}
              sm={6}
              lg={12}
              style={{ marginTop: '-20px', marginBottom: '10px' }}
            >
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    {intl.labels.title}
                  </div>
                  <div className={classes.labelValue}>{title}</div>
                </div>
              </Grid>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    {intl.labels.first_name}
                  </div>
                  <div className={classes.labelValue}> {first_name}</div>
                </div>
              </Grid>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    {intl.labels.last_name}
                  </div>
                  <div className={classes.labelValue}>{last_name}</div>
                </div>
              </Grid>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    {intl.labels.last_name_chinese}
                  </div>
                  <div className={classes.labelValue}> {last_name_chinese}</div>
                </div>
              </Grid>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    {intl.labels.first_name_chinese}
                  </div>
                  <div className={classes.labelValue}>{chinese_name}</div>
                </div>
              </Grid>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    {intl.labels.gender}
                  </div>
                  <div className={classes.labelValue}>
                    {gender.charAt(0).toUpperCase() + gender.slice(1)}
                  </div>
                </div>
              </Grid>
            </Grid>
            <Grid container item xs={12} sm={6} lg={12}>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    {intl.labels.id_type}
                  </div>
                  <div className={classes.labelValue}>
                    {id_type.toUpperCase()}
                  </div>
                </div>
              </Grid>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    {intl.labels.id_number}
                  </div>
                  <div className={classes.labelValue}>{id_number}</div>
                </div>
              </Grid>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    {intl.labels.date_of_birth}
                  </div>
                  <div className={classes.labelValue}>
                    {moment(date_of_birth).format('DD MMMM YYYY')}
                  </div>
                </div>
              </Grid>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    {intl.labels.place_of_birth}
                  </div>
                  <div className={classes.labelValue}>
                    {place_of_birth.charAt(0).toUpperCase() +
                      place_of_birth.slice(1)}
                  </div>
                </div>
              </Grid>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    {intl.labels.mobile_number}
                  </div>
                  <div className={classes.labelValue}>{mobile_number}</div>
                </div>
              </Grid>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    {intl.labels.secondary_mobile_no}
                  </div>
                  <div className={classes.labelValue}>
                    {secondary_mobile_number}
                  </div>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                sm={8}
                className={classes.fieldSpacing}
                style={{ marginTop: '10px', marginBottom: '10px' }}
              >
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    {intl.labels.residential_address}
                  </div>
                  <div className={classes.labelValue}> {address}</div>
                </div>
              </Grid>
              <Grid
                item
                sm={4}
                xs={12}
                className={classes.fieldSpacing}
                style={{ marginTop: '10px', marginBottom: '10px' }}
              >
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    {intl.labels.email}
                  </div>
                  <div className={classes.labelValue}> {email} </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    {intl.labels.correspondence_address}
                  </div>
                  <div className={classes.labelValue}>
                    {correspondence_address}
                  </div>
                </div>
              </Grid>
            </Grid>
            <div className={classes.subLabel}>{intl.labels.other_info}</div>
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
                    {intl.labels.preferred_communication_channel}
                  </div>
                  <div className={classes.labelValue}>
                    {preferred_communication_channel}
                  </div>
                </div>
              </Grid>
              <Grid item sm={3} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label}>
                    {intl.labels.preferred_communication_language}
                  </div>
                  <div className={classes.labelValue}>
                    {preferred_communication_language}
                  </div>
                </div>
              </Grid>
              <Grid item sm={3} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label}>
                    {intl.labels.recv_paper_form_notif_docs}
                  </div>
                  <div className={classes.labelValue}>
                    {receive_paper_form_notifications_and_document}
                  </div>
                </div>
              </Grid>
              <Grid item sm={3} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label}>{intl.labels.status}</div>
                  <div className={classes.labelValue}>
                    {' '}
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </div>
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
          onClick={() => goToSearch(id)}
          variant="contained"
        >
          {intl.labels.backToSearch}
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

export default connect(mapStateToProps, {})(EmployeeView);
