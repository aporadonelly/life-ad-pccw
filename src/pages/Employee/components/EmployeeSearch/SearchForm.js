import React from 'react';
import moment from 'moment';
import { Grid, MenuItem, Button, Select } from '@material-ui/core';
import EmployeeStyles from './Styles/EmployeeStyles';
import { useForm, Form } from './UseForm';
import Controls from '../Controls/Controls';
import TextField from '@material-ui/core/TextField';

const genderItems = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
];

const idTypes = [
  { value: 'hkid', label: 'HKID' },
  { value: 'hkid2', label: 'HKID2' },
];

const nationality = [
  { value: 'chinese', label: 'Chinese' },
  { value: 'taiwanese', label: 'Taiwanese' },
];

const placeOfBirth = [
  { value: 'china', label: 'China' },
  { value: 'taiwan', label: 'Taiwan' },
];

const employeeType = [
  { value: 'reg', label: 'Regular' },
  { value: 'pt', label: 'Part Time' },
];

const reportedIndustryType = [
  { value: 'bpo', label: 'BPO' },
  { value: 'it', label: 'IT' },
];

const occupation = [
  { value: 'manager', label: 'Manager' },
  { value: 'staff', label: 'Staff' },
];

const mpfSchemeName = [
  { value: 'retirement', label: 'Retirement Fund' },
  { value: 'plus', label: 'Plus Fund' },
  { value: 'aggressive', label: 'Aggressive Fund' },
];

const status = [
  { value: 'active', label: 'Active' },
  { value: 'pending', label: 'Pending' },
];

const initialValues = {
  mpf_id: '',
  english_name: '',
  chinese_name: '',
  gender: 'male',
  id_type: 'hkid',
  id_number: '',
  date_of_birth: new Date(),
  nationality: 'chinese',
  place_of_birth: 'china',
  mobile_number: '',
  address: '',
  email: '',
  date_of_employment: new Date(),
  employee_type: 'reg',
  reported_industry_type: 'bpo',
  occupation: 'manager',
  mpf_scheme_name: 'retirement',
  tax_residency: '',
  tin: '',
  status: 'active',
};

export default function EmployeeForm() {
  const classes = { ...EmployeeStyles() };

  const { values, setValues, handleInputChange } = useForm(initialValues);

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Form>
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
                    items={genderItems}
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
                    items={idTypes}
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
                  <TextField
                    // value={values.date_of_birth}
                    name="date_of_birth"
                    id="date"
                    type="date"
                    defaultValue={values.date_of_birth}
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    formatDate={date => moment(date).format('DD-MM-YYYY')}
                    helperText="YYYYMMDD"
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
                    items={nationality}
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
                    items={placeOfBirth}
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
                    id="text"
                    value={values.mobile_number}
                    placeholder="Input Input"
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
                    type="email"
                    value={values.email}
                    placeholder="Please Input"
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
                  <TextField
                    id="date"
                    type="date"
                    defaultValue={values.date_of_employment}
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    formatDate={date => moment(date).format('DD-MM-YYYY')}
                    helperText="YYYYMMDD"
                  />
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
                    items={employeeType}
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
                    items={reportedIndustryType}
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
                    items={occupation}
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
                    items={mpfSchemeName}
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
                    items={status}
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
                <Button
                  data-testid="cancel-btn"
                  variant="contained"
                  size="large"
                  style={{ marginRight: '15px' }}
                  className={classes.formBtn}
                  onClick={() => setValues(initialValues)}
                >
                  clear
                </Button>
                <Button
                  type="submit"
                  data-testid="submit-btn"
                  variant="contained"
                  size="large"
                  color="primary"
                  className={classes.cancelBtn}
                  // onClick={() => {
                  //   setValues({ isFormSubmitted: true });
                  // }}
                  onClick={() => console.log('hey')}
                >
                  SEARCH
                </Button>
              </div>
            </Grid>
          </Form>
        </Grid>
      </Grid>
    </>
  );
}
