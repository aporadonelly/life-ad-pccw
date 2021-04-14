import React from 'react';
import { Grid } from '@material-ui/core';
import EmployeeStyles from './Styles/EmployeeStyles';
import { useForm, Form } from './UseForm';
import Controls from '../Controls/Controls';
import * as employeeMockData from '../MockData/mockData';
import './Styles/index.css';

const initialValues = {
  mpf_id: '',
  english_name: '',
  chinese_name: '',
  gender: '',
  id_type: '',
  id_number: '',
  date_of_birth: new Date(),
  nationality: '',
  place_of_birth: '',
  mobile_number: '',
  address: '',
  email: '',
  date_of_employment: new Date(),
  employee_type: '',
  reported_industry_type: '',
  occupation: '',
  mpf_scheme_name: '',
  tax_residency: '',
  tin: '',
  status: '',
};

export default function EmployeeForm() {
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

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
      alert('API to fetch data to be called here ...');
      resetForm();
    }
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Form onSubmit={handleSubmit}>
            <div className={classes.label}>Member Enquiry</div>
            <Grid
              item
              container
              xs={12}
              sm={12}
              className={classes.fieldSpacing}
            >
              <Grid item xs={12} lg={2} sm={6} className={classes.rightSpacing}>
                <div className={classes.fieldContainer}>
                  <h3 className={classes.fieldLabel}>MPF ID</h3>
                  <Controls.Input
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
            <div className={classes.subLabel}>Personal Information</div>
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
                  <h3 className={classes.fieldLabel}>Member Name</h3>
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
                  <h3 className={classes.fieldLabel}>Member Name (Chinese)</h3>
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
                  <h3 className={classes.fieldLabel}>Gender</h3>
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
                  <h3 className={classes.fieldLabel}>ID Type</h3>
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
                  <h3 className={classes.fieldLabel}>ID Number</h3>
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
                  <h3 className={classes.fieldLabel}>Date of Birth</h3>
                  <Controls.DatePicker
                    name="date_of_birth"
                    onChange={handleInputChange}
                    fullWidth
                    type="date"
                    id="text"
                    value={values.date_of_birth}
                    placeholder="Please Input"
                  />
                </div>
              </Grid>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <h3 className={classes.fieldLabel}>Nationality</h3>
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
                  <h3 className={classes.fieldLabel}>Place of Birth</h3>
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
                  <h3 className={classes.fieldLabel}>Mobile Number</h3>
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
                  <h3 className={classes.fieldLabel}> Address</h3>
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
                  <h3 className={classes.fieldLabel}>Email</h3>
                  <Controls.Input
                    id="text"
                    name="email"
                    onChange={handleInputChange}
                    fullWidth
                    value={values.email}
                    placeholder="Please Input"
                    error={errors.email}
                  />
                </div>
              </Grid>
            </Grid>
            <div className={classes.subLabel}>Employment Information</div>
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
                  <h3 className={classes.fieldLabel}>Date of Employment</h3>
                  <Controls.DatePicker
                    name="date_of_employment"
                    onChange={handleInputChange}
                    fullWidth
                    type="date"
                    id="text"
                    value={values.date_of_employment}
                    placeholder="Please Input"
                  ></Controls.DatePicker>
                </div>
              </Grid>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <h3 className={classes.fieldLabel}>Employee Type</h3>
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
                  <h3 className={classes.fieldLabel}>Reported Industry Type</h3>
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
                  <h3 className={classes.fieldLabel}>Occupation</h3>
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
                  <h3 className={classes.fieldLabel}>MPF Scheme Name</h3>
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
                  <h3 className={classes.fieldLabel}>Tax Residency</h3>
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
                  <h3 className={classes.fieldLabel}>TIN</h3>
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
                  <h3 className={classes.fieldLabel}>Status</h3>
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
    </>
  );
}
