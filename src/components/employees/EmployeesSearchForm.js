import React, { useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Paper, TextField } from '@material-ui/core';
import {
  fetchEmployees,
  searchMember,
  searchMembers,
} from '../../actions/employeesActions';
import EmployeeStyles from './styles/EmployeeStyles';
import { useForm, Form } from '../UseForm';
import Controls from '../controls/Controls';
import * as employeeMockData from '../../pages/employees/mockData/mockData';
import * as intl from '../../common/labels';
import './styles/index.css';

const initialValues = {
  mpf_id: '',
  english_name: '',
  chinese_name: '',
  gender: '',
  id_type: '',
  id_number: '',
  date_of_birth: '',
  nationality: '',
  place_of_birth: '',
  mobile_number: '',
  address: '',
  email: '',
  date_of_employment: '',
  employee_type: '',
  reported_industry_type: '',
  occupation: '',
  mpf_scheme_name: '',
  tax_residency: '',
  tin: '',
  status: '',
};

const EmployeeForm = ({ searchMember }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [employeeResult, setEmployeeResult] = useState(false);
  const classes = { ...EmployeeStyles() };

  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if ('email' in fieldValues)
      temp.email = /$^|.+@.+..+/.test(values.email)
        ? ''
        : 'Email is not valid. Please include @';

    setErrors({ ...temp });

    if (fieldValues === values) return Object.values(temp).every(x => x === '');
  };

  const {
    values,
    setValues,
    handleInputChange,
    errors,
    setErrors,
    resetForm,
  } = useForm(initialValues, true, validate);

  const {
    mpf_id,
    english_name,
    chinese_name,
    gender,
    id_type,
    id_number,
    date_of_birth,
    nationality,
    place_of_birth,
    mobile_number,
    address,
    email,
    date_of_employment,
    employee_type,
    reported_industry_type,
    occupation,
    mpf_scheme_name,
    tax_residency,
    tin,
    status,
  } = values;

  const handleSubmit = e => {
    e.preventDefault();
    let params = [];
    if ((gender, id_type, status)) {
      params.push(gender, id_type, status);
      console.log(params, 'params');
      // dispatch(searchMembers(gender, id_type, status));
      dispatch(searchMembers(params));

      history.push('/employee-search-results');
    } else if (gender) {
      dispatch(searchMembers(gender));
      history.push('/employee-search-results');
    } else if (id_type) {
      dispatch(searchMembers(id_type));
      history.push('/employee-search-results');
    } else {
      dispatch(fetchEmployees());
      history.push('/employee-search-results');
    }
  };
  return (
    <>
      <Paper className={classes.pageContent}>
        <Grid container>
          <Grid item xs={12}>
            <Form onSubmit={handleSubmit}>
              <div className={classes.label}>{intl.labels.member_enquiry}</div>
              <Grid
                item
                container
                xs={12}
                sm={12}
                className={classes.fieldSpacing}
              >
                <Grid
                  item
                  xs={12}
                  lg={2}
                  sm={6}
                  className={classes.rightSpacing}
                >
                  <div className={classes.fieldContainer}>
                    <h3 className={classes.fieldLabel}>{intl.labels.mpf_id}</h3>
                    <Controls.Input
                      className={classes.textValue}
                      onChange={handleInputChange}
                      name="mpf_id"
                      type="text"
                      id="text"
                      placeholder="Please Input"
                      value={values.mpf_id}
                      error={errors.mpf_id}
                    />
                  </div>
                </Grid>
              </Grid>
              <div className={classes.subLabel}>
                {intl.labels.personal_info}
              </div>
              <Grid
                container
                item
                xs={12}
                sm={6}
                lg={12}
                style={{ marginTop: '-20px' }}
              >
                <Grid item sm={4} xs={12} className={classes.fieldSpacing}>
                  <div className={classes.fieldContainer}>
                    <h3 className={classes.fieldLabel}>
                      {intl.labels.english_name}
                    </h3>
                    <Controls.Input
                      type="text"
                      id="text"
                      name="english_name"
                      onChange={handleInputChange}
                      fullWidth
                      value={values.english_name}
                      placeholder="Input English Name"
                      className={classes.selectValidator}
                    />
                  </div>
                </Grid>
                <Grid item sm={4} xs={12} className={classes.fieldSpacing}>
                  <div className={classes.fieldContainer}>
                    <h3 className={classes.fieldLabel}>
                      {intl.labels.chinese_name}
                    </h3>
                    <Controls.Input
                      name="chinese_name"
                      type="text"
                      id="text"
                      value={values.chinese_name}
                      placeholder="Input Chinese Name"
                      onChange={handleInputChange}
                      fullWidth
                      className={classes.selectValidator}
                    />
                  </div>
                </Grid>
                <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                  <div className={classes.fieldContainer}>
                    <h3 className={classes.fieldLabel}>{intl.labels.gender}</h3>
                    <Controls.Select
                      label="Gender"
                      name="gender"
                      onChange={handleInputChange}
                      fullWidth
                      value={values.gender}
                      className={classes.gender}
                      options={employeeMockData.getGenderCollection()}
                    ></Controls.Select>
                  </div>
                </Grid>
              </Grid>
              <Grid container item xs={12} sm={6} lg={12}>
                <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                  <div className={classes.fieldContainer}>
                    <h3 className={classes.fieldLabel}>
                      {intl.labels.id_type}
                    </h3>
                    <Controls.Select
                      label="ID Type"
                      name="id_type"
                      onChange={handleInputChange}
                      fullWidth
                      value={values.id_type}
                      className={classes.gender}
                      options={employeeMockData.idTypes()}
                    ></Controls.Select>
                  </div>
                </Grid>
                <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                  <div className={classes.fieldContainer}>
                    <h3 className={classes.fieldLabel}>
                      {' '}
                      {intl.labels.id_number}
                    </h3>
                    <Controls.Input
                      name="id_number"
                      onChange={handleInputChange}
                      fullWidth
                      type="text"
                      id="text"
                      value={values.id_number}
                      placeholder="Please Input"
                    />
                  </div>
                </Grid>
                <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                  <div className={classes.fieldContainer}>
                    <h3 className={classes.fieldLabel}>
                      {' '}
                      {intl.labels.date_of_birth}
                    </h3>
                    {/* <Controls.DatePicker
                      name="date_of_birth"
                      onChange={handleInputChange}
                      fullWidth
                      id="date"
                      type="date"
                      className={classes.textField}
                      // value={values.date_of_birth}
                      value={moment(values.date_of_birth).format(
                        'YYYY MMMM DD  '
                      )}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    /> */}
                    <TextField
                      name="date_of_birth"
                      onChange={handleInputChange}
                      fullWidth
                      id="date"
                      type="date"
                      className={classes.textField}
                      value={values.date_of_birth}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </div>
                </Grid>
                <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                  <div className={classes.fieldContainer}>
                    <h3 className={classes.fieldLabel}>
                      {intl.labels.nationality}
                    </h3>
                    <Controls.Select
                      name="nationality"
                      onChange={handleInputChange}
                      fullWidth
                      value={values.nationality}
                      className={classes.gender}
                      options={employeeMockData.nationality()}
                    ></Controls.Select>
                  </div>
                </Grid>
                <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                  <div className={classes.fieldContainer}>
                    <h3 className={classes.fieldLabel}>
                      {' '}
                      {intl.labels.place_of_birth}
                    </h3>
                    <Controls.Select
                      name="place_of_birth"
                      onChange={handleInputChange}
                      fullWidth
                      value={values.place_of_birth}
                      className={classes.gender}
                      options={employeeMockData.placeOfBirth()}
                    ></Controls.Select>
                  </div>
                </Grid>
                <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                  <div className={classes.fieldContainer}>
                    <h3 className={classes.fieldLabel}>
                      {' '}
                      {intl.labels.mobile_number}
                    </h3>
                    <Controls.Input
                      name="mobile_number"
                      onChange={handleInputChange}
                      fullWidth
                      type="number"
                      value={values.mobile_number}
                      placeholder="Please Input"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} sm={8} className={classes.fieldSpacing}>
                  <div className={classes.fieldContainer}>
                    <h3 className={classes.fieldLabel}>
                      {' '}
                      {intl.labels.address}
                    </h3>
                    <Controls.Input
                      fullWidth
                      id="text"
                      onChange={handleInputChange}
                      name="address"
                      type="text"
                      placeholder="Please Input"
                      value={values.address}
                    />
                  </div>
                </Grid>
                <Grid item sm={4} xs={12} className={classes.fieldSpacing}>
                  <div className={classes.fieldContainer}>
                    <h3 className={classes.fieldLabel}> {intl.labels.email}</h3>
                    <Controls.Input
                      id="text"
                      name="email"
                      onChange={handleInputChange}
                      fullWidth
                      value={values.email}
                      placeholder="Please Input"
                      // error={errors.email}
                    />
                  </div>
                </Grid>
              </Grid>
              <div className={classes.subLabel}>{intl.labels.emp_info}</div>
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
                    <h3 className={classes.fieldLabel}>
                      {intl.labels.date_of_employment}
                    </h3>
                    {/* <Controls.DatePicker
                    name="date_of_employment"
                    onChange={handleInputChange}
                    fullWidth
                    type="date"
                    id="text"
                    value={values.date_of_employment}
                    placeholder="Please Input"
                  ></Controls.DatePicker> */}
                    <TextField
                      name="date_of_employment"
                      onChange={handleInputChange}
                      fullWidth
                      id="date"
                      type="date"
                      className={classes.textField}
                      value={values.date_of_employment}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </div>
                </Grid>
                <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                  <div className={classes.fieldContainer}>
                    <h3 className={classes.fieldLabel}>
                      {intl.labels.employee_type}
                    </h3>
                    <Controls.Select
                      name="employee_type"
                      onChange={handleInputChange}
                      fullWidth
                      value={values.employee_type}
                      className={classes.gender}
                      options={employeeMockData.employeeType()}
                    ></Controls.Select>
                  </div>
                </Grid>
                <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                  <div className={classes.fieldContainer}>
                    <h3 className={classes.fieldLabel}>
                      {intl.labels.reported_industry_type}
                    </h3>
                    <Controls.Select
                      name="reported_industry_type"
                      onChange={handleInputChange}
                      fullWidth
                      value={values.reported_industry_type}
                      className={classes.gender}
                      options={employeeMockData.reportedIndustryType()}
                    ></Controls.Select>
                  </div>
                </Grid>
                <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                  <div className={classes.fieldContainer}>
                    <h3 className={classes.fieldLabel}>
                      {intl.labels.occupation}
                    </h3>
                    <Controls.Select
                      name="occupation"
                      onChange={handleInputChange}
                      fullWidth
                      value={values.occupation}
                      className={classes.gender}
                      options={employeeMockData.occupation()}
                    ></Controls.Select>
                  </div>
                </Grid>
                <Grid item sm={4} xs={12} className={classes.fieldSpacing}>
                  <div className={classes.fieldContainer}>
                    <h3 className={classes.fieldLabel}>
                      {' '}
                      {intl.labels.mpf_scheme_name}
                    </h3>
                    <Controls.Select
                      name="mpf_scheme_name"
                      onChange={handleInputChange}
                      fullWidth
                      value={values.mpf_scheme_name}
                      className={classes.gender}
                      options={employeeMockData.mpfSchemeName()}
                    ></Controls.Select>
                  </div>
                </Grid>
                <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                  <div className={classes.fieldContainer}>
                    <h3 className={classes.fieldLabel}>
                      {intl.labels.tax_residency}
                    </h3>
                    <Controls.Input
                      id="text"
                      name="tax_residency"
                      onChange={handleInputChange}
                      fullWidth
                      type="text"
                      value={values.tax_residency}
                      placeholder="Please Input"
                    />
                  </div>
                </Grid>
                <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                  <div className={classes.fieldContainer}>
                    <h3 className={classes.fieldLabel}>{intl.labels.tin}</h3>
                    <Controls.Input
                      id="text"
                      name="tin"
                      onChange={handleInputChange}
                      fullWidth
                      type="text"
                      value={values.tin}
                      placeholder="Please Input"
                    />
                  </div>
                </Grid>
                <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                  <div className={classes.fieldContainer}>
                    <h3 className={classes.fieldLabel}>{intl.labels.status}</h3>
                    <Controls.Select
                      name="status"
                      onChange={handleInputChange}
                      fullWidth
                      value={values.status}
                      className={classes.gender}
                      type="text"
                      placeholder="Please select"
                      options={employeeMockData.status()}
                    ></Controls.Select>
                  </div>
                </Grid>
              </Grid>
              <Grid
                container
                item
                xs={12}
                sm={12}
                justify="flex-end"
                className={classes.fieldSpacing}
              >
                <div className={classes.formBtnContainer}>
                  <Controls.Button
                    data-testid="cancel-btn"
                    text="clear"
                    color="default"
                    onClick={resetForm}
                  />
                  <Controls.Button
                    type="submit"
                    data-testid="submit-btn"
                    text="search"
                  />
                </div>
              </Grid>
            </Form>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

EmployeeForm.propTypes = {
  fetchEmployees: PropTypes.func.isRequired,
  searchMember: PropTypes.func.isRequired,
};

export default connect(null, { fetchEmployees, searchMember, searchMembers })(
  EmployeeForm
);
