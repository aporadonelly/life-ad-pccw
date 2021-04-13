import React from 'react';
import moment from 'moment';
import { Grid, MenuItem, Button, Select } from '@material-ui/core';
// import { CalendarTodayOutlined } from '@material-ui/icons';
// import {
//   KeyboardDatePicker,
//   MuiPickersUtilsProvider,
// } from '@material-ui/pickers';
// import DateFnsUtils from '@date-io/date-fns';
import EmployeeStyles from './EmployeeStyles';

import { useForm, Form } from './UseForm';
import Controls from '../Controls/Controls';
import TextField from '@material-ui/core/TextField';

const genderItems = [
  { id: 'male', title: 'Male' },
  { id: 'female', title: 'female' },
  { id: 'other', title: 'Other' },
];
const initialValues = {
  mpf_id: '',
  english_name: '',
  chinese_name: '',
  gender: 'male',
  id_type: 'hkid',
  id_number: '',
  date_of_birth: new Date(),
  nationality: '',
  place_of_birth: '',
  mobile_number: '',
  address: '',
  email: '',
  date_of_employment: new Date(),
  employee_type: '',
  reported_industry_type: 'callCenter',
  occupation: '',
  mpf_scheme_name: '',
  tax_residency: '',
  tin: '',
  status: '',
};

export default function EmployeeForm() {
  const classes = { ...EmployeeStyles() };

  const { values, setValues, handleInputChange } = useForm(initialValues);

  const handleGenderChange = event => {
    const { value } = event.target;

    setValues({ gender: value });
  };

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
            {/* Personal Information */}
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
                  {/* <Select */}
                  <Select
                    name="gender"
                    // onChange={handleInputChange}
                    onChange={handleGenderChange}
                    fullWidth
                    value={values.gender}
                    className={classes.gender}
                    // items={genderItems}
                  >
                    <MenuItem value="Chinese">Chinese</MenuItem>
                    <MenuItem value="Filipino">Filipino</MenuItem>
                    {/* </Select> */}
                  </Select>
                </div>
              </Grid>
            </Grid>
            {/* start of ID Type, Numberr, etc*/}
            <Grid container item xs={12} sm={6} lg={12}>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <h3 className={classes.fieldLabel}>ID Type</h3>
                  <Select
                    name="id_type"
                    onChange={handleInputChange}
                    fullWidth
                    value={values.id_type}
                    className={classes.gender}
                  >
                    <MenuItem value="hkid">HKID</MenuItem>
                    <MenuItem value="hkid2">HKID2</MenuItem>
                  </Select>
                </div>
              </Grid>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <h3 className={classes.fieldLabel}>ID Number</h3>
                  <Controls.Input
                    name="id_number"
                    // onChange={handleInputChange}
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
                  <Select
                    name="nationality"
                    // onChange={handleInputChange}
                    fullWidth
                    value={values.nationality}
                    className={classes.gender}
                    placeholder="Please Input"
                  >
                    <MenuItem value="" disabled>
                      Select a province
                    </MenuItem>
                    <MenuItem value="Chinese">Chinese</MenuItem>
                    <MenuItem value="Filipino">Filipino</MenuItem>
                  </Select>
                </div>
              </Grid>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <h3 className={classes.fieldLabel}>Place of Birth</h3>
                  <Select
                    name="place_of_birth"
                    // onChange={handleInputChange}
                    fullWidth
                    value={values.place_of_birth}
                    className={classes.gender}
                  >
                    <MenuItem value="China">China</MenuItem>
                    <MenuItem value="HongKong">HongKong</MenuItem>
                  </Select>
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
                    name="locationStreet"
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
            {/* Start of employment information */}
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
                  {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      name="date_of_employment"
                      className={classes.dateFromStyle}
                      format="MM/dd/yyyy"
                      value={values.date_of_employment}
                      keyboardIcon={<CalendarTodayOutlined />}
                      helperText="YYYYMMDD"
                    />
                  </MuiPickersUtilsProvider> */}
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
                  <Select
                    name="employee_type"
                    // onChange={handleInputChange}
                    fullWidth
                    value={values.employee_type}
                    className={classes.gender}
                  >
                    <MenuItem value="Regular">Regular</MenuItem>
                    <MenuItem value="Temporary">Temporary</MenuItem>
                  </Select>
                </div>
              </Grid>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <h3 className={classes.fieldLabel}>Reported Industry Type</h3>
                  <Select
                    name="reported_industry_type"
                    onChange={handleInputChange}
                    fullWidth
                    value={values.reported_industry_type}
                    className={classes.gender}
                  >
                    <MenuItem value="callCenter">Call Center</MenuItem>
                    <MenuItem value="InformationTechnology">IT</MenuItem>
                    <MenuItem value="Education">Education</MenuItem>
                  </Select>
                </div>
              </Grid>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <h3 className={classes.fieldLabel}>Occupation</h3>
                  <Select
                    name="occupation"
                    // onChange={handleInputChange}
                    fullWidth
                    value={values.occupation}
                    className={classes.gender}
                  >
                    <MenuItem value="Manager">Manager</MenuItem>
                    <MenuItem value="Sales">Sales</MenuItem>
                  </Select>
                </div>
              </Grid>
              <Grid item sm={4} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <h3 className={classes.fieldLabel}>MPF Scheme Name</h3>
                  <Select
                    name="mpf_scheme_name"
                    // onChange={handleInputChange}
                    fullWidth
                    value={values.mpf_scheme_name}
                    className={classes.gender}
                  >
                    <MenuItem value="Retirement Fund">Retirement Fund</MenuItem>
                    <MenuItem value=" Aggressive Fund">
                      {' '}
                      Aggressive Fund
                    </MenuItem>
                    <MenuItem value="Plus Fund">Plus Fund</MenuItem>
                  </Select>
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
                  <Select
                    name="status"
                    // onChange={handleInputChange}
                    fullWidth
                    value={values.status}
                    className={classes.gender}
                    type="text"
                    placeholder="Please select"
                  >
                    <MenuItem value="Active">Active</MenuItem>
                    <MenuItem value=" In progress"> In progress</MenuItem>
                  </Select>
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
                  // onClick={() => history.push('/branches')}
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
          {/* </form> */}
        </Grid>
      </Grid>
    </>
  );
}
