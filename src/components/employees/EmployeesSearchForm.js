import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import moment from "moment";
import { connect } from "react-redux";
import DateFnsUtils from "@date-io/date-fns";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Grid, MenuItem, Paper, Select } from "@material-ui/core";
import {
  searchMembers,
  saveQuery,
  fetchGender,
  fetchIdType,
  fetchNationality,
  fetchEmployeeType,
  fetchIndustryType,
  fetchSchemeType,
  fetchOccupation,
  fetchStatus,
  fetchPlaceOfBirth,
} from "../../actions/employeesActions";
import EmployeeStyles from "./styles/EmployeeStyles";
import { useForm, Form } from "../UseForm";
import Controls from "../controls/Controls";
import "./styles/index.css";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

const initialValues = {
  mpf_id: "",
  first_name: "",
  chinese_name: "",
  gender: null,
  id_type: null,
  id_number: "",
  date_of_birth: null,
  nationality: null,
  place_of_birth: null,
  mobile_number: "",
  address: "",
  email: "",
  date_of_employment: null,
  employee_type: null,
  reported_industry_type: null,
  occupation: null,
  mpf_scheme_name: null,
  tax_residency: "",
  tin: "",
  status: null,
};

const EmployeeForm = ({
  employees: {
    enquiry,
    genderType,
    idType,
    nationalities,
    employeeType,
    industryType,
    schemeType,
    occupationType,
    statusType,
    placeOfBirth,
  },
}) => {

  const history = useHistory();
  const dispatch = useDispatch();
  const classes = EmployeeStyles();
  const { t } = useTranslation(["typography", "form", "button"]);

  const { values, setValues } = useForm(
    { ...initialValues, ...enquiry },
    true
    // validate
  );

  const {
    mpf_id,
    first_name,
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


  useEffect(() => {
    dispatch(fetchSchemeType());
    dispatch(fetchGender());
    dispatch(fetchIdType());
    dispatch(fetchNationality());
    dispatch(fetchEmployeeType());
    dispatch(fetchIndustryType());
    dispatch(fetchIndustryType());
    dispatch(fetchOccupation());
    dispatch(fetchStatus());
    dispatch(fetchPlaceOfBirth());
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleReset = () => {
    dispatch({ type: "CLEAR_SEARCH_FORM" });
    setValues(initialValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let p = {};
    if (mpf_id) p["mpf_id"] = mpf_id;
    if (first_name) p["first_name"] = first_name;
    if (chinese_name) p["chinese_name"] = chinese_name;
    if (gender) p["gender"] = gender;
    if (id_type) p["id_type"] = id_type;
    if (id_number) p["id_number"] = id_number;
    if (date_of_birth)
      p["date_of_birth"] = moment(date_of_birth).format("YYYY/MM/DD");

    if (nationality) p["nationality"] = nationality;
    if (place_of_birth) p["place_of_birth"] = place_of_birth;
    if (mobile_number) p["mobile_number"] = mobile_number;
    if (address) p["address"] = address;
    if (email) p["email"] = email;
    if (date_of_employment)
      p["date_of_employment"] = moment(date_of_employment).format("DD/MM/YYYY");
    if (employee_type) p["employee_type"] = employee_type;
    if (reported_industry_type)
      p["reported_industry_type"] = reported_industry_type;
    if (occupation) p["occupation"] = occupation;
    if (mpf_scheme_name) p["mpf_scheme_name"] = mpf_scheme_name;
    if (tax_residency) p["tax_residency"] = tax_residency;
    if (tin) p["tin"] = tin;
    if (status) p["status"] = status;

    dispatch(searchMembers(p));
    dispatch(saveQuery(p));
    history.push("/employee-search-results");
  };
  return (
    <>
      <Paper className={classes.pageContent}>
        <Grid container>
          <Grid item xs={12}>
            <Form onSubmit={handleSubmit}>
              <div className={classes.label} style={{ marginBottom: 20 }}>
                {t("typography:heading.memberEnquiry")}
              </div>
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
                    <h3 className={classes.fieldLabel}>
                      {t("form:label.mpfId")}
                    </h3>
                    <Controls.Input
                      className={classes.textValue}
                      onChange={handleInputChange}
                      name="mpf_id"
                      type="text"
                      id="text"
                      placeholder={t("form:placeholder.custom.pleaseInput")}
                      value={mpf_id}
                    />
                  </div>
                </Grid>
              </Grid>
              <div className={classes.subLabel} style={{ marginBottom: 40 }}>
                {t("typography:heading.personalInformation")}
              </div>
              <Grid
                container
                item
                xs={12}
                sm={6}
                lg={12}
                style={{ marginTop: "-20px" }}
              >
                <Grid item sm={4} xs={12} className={classes.fieldSpacing}>
                  <div className={classes.fieldContainer}>
                    <h3 className={classes.fieldLabel}>
                      {t("form:label.displayName")}
                    </h3>
                    <Controls.Input
                      type="text"
                      id="text"
                      name="first_name"
                      onChange={handleInputChange}
                      fullWidth
                      value={first_name}
                      placeholder={t(
                        "form:placeholder.custom.inputEnglishName"
                      )}
                      className={classes.selectValidator}
                    />
                  </div>
                </Grid>
                <Grid item sm={4} xs={12} className={classes.fieldSpacing}>
                  <div className={classes.fieldContainer}>
                    <h3 className={classes.fieldLabel}>
                      {t("form:label.chineseName")}
                    </h3>
                    <Controls.Input
                      name="chinese_name"
                      type="text"
                      id="text"
                      value={chinese_name}
                      placeholder={t(
                        "form:placeholder.custom.inputChineseName"
                      )}
                      onChange={handleInputChange}
                      fullWidth
                      className={classes.selectValidator}
                    />
                  </div>
                </Grid>
                <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                  <div className={classes.fieldContainer}>
                    <h3 className={classes.fieldLabel}>
                      {t("form:label.gender")}
                    </h3>
                    <Controls.Select
                      name="gender"
                      onChange={handleInputChange}
                      value={gender}
                      className={classes.gender}
                      options={genderType}
                    ></Controls.Select>
                  </div>
                </Grid>
              </Grid>
              <Grid container item xs={12} sm={6} lg={12}>
                <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                  <div className={classes.fieldContainer}>
                    <h3 className={classes.fieldLabel}>
                      {t("form:label.idType")}
                    </h3>
                    <Controls.Select
                      label="ID Type"
                      name="id_type"
                      onChange={handleInputChange}
                      fullWidth
                      value={id_type}
                      className={classes.gender}
                      options={idType}
                    ></Controls.Select>
                  </div>
                </Grid>
                <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                  <div className={classes.fieldContainer}>
                    <h3 className={classes.fieldLabel}>
                      {t("form:label.idNumber")}
                    </h3>
                    <Controls.Input
                      name="id_number"
                      onChange={handleInputChange}
                      fullWidth
                      type="text"
                      id="text"
                      value={id_number}
                      placeholder={t("form:placeholder.custom.pleaseInput")}
                    />
                  </div>
                </Grid>
                <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                  <div className={classes.fieldContainer}>
                    <h3 className={classes.fieldLabel}>
                      {t("form:label.birthdate")}
                    </h3>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <Grid container justify="space-around">
                        <Controls.DatePicker
                          name="date_of_birth"
                          fullWidth
                          id="date"
                          type="date"
                          onChange={handleInputChange}
                          className={classes.textField}
                          value={date_of_birth}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          helperText="YYYYMMDD"
                        ></Controls.DatePicker>

                       
                      </Grid>
                    </MuiPickersUtilsProvider>
                  </div>
                </Grid>
                <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                  <div className={classes.fieldContainer}>
                    <h3 className={classes.fieldLabel}>
                      {t("form:label.nationality")}
                    </h3>
                    <Select
                      displayEmpty
                      name="nationality"
                      onChange={handleInputChange}
                      fullWidth
                      value={nationality}
                      className={classes.gender}
                    >
                      <MenuItem value="" disabled>
                        Please Select
                      </MenuItem>
                      {nationalities.map((c) => (
                        <MenuItem key={c.id} value={c.cstmTypId}>
                          {c.cstmTypId}
                        </MenuItem>
                      ))}
                    </Select>
                  </div>
                </Grid>
                <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                  <div className={classes.fieldContainer}>
                    <h3 className={classes.fieldLabel}>
                      {t("form:label.placeOfBirth")}
                    </h3>
                    <Select
                      name="place_of_birth"
                      onChange={handleInputChange}
                      fullWidth
                      value={place_of_birth}
                      className={classes.gender}
                    >
                      <MenuItem value="" disabled>
                        Please Select
                      </MenuItem>
                      {placeOfBirth.map((c) => (
                        <MenuItem key={c.id} value={c.cntryTypNm}>
                          {c.cntryTypNm}
                        </MenuItem>
                      ))}
                    </Select>
                  </div>
                </Grid>
                <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                  <div className={classes.fieldContainer}>
                    <h3 className={classes.fieldLabel}>
                      {t("form:label.mobileNumber")}
                    </h3>
                    <Controls.Input
                      name="mobile_number"
                      onChange={handleInputChange}
                      fullWidth
                      type="text"
                      value={mobile_number}
                      placeholder={t("form:placeholder.custom.pleaseInput")}
                    />
                  </div>
                </Grid>
                <Grid item xs={12} sm={8} className={classes.fieldSpacing}>
                  <div className={classes.fieldContainer}>
                    <h3 className={classes.fieldLabel}>
                      {t("form:label.address")}
                    </h3>
                    <Controls.Input
                      fullWidth
                      id="text"
                      onChange={handleInputChange}
                      name="address"
                      type="text"
                      placeholder={t("form:placeholder.custom.pleaseInput")}
                      value={address}
                    />
                  </div>
                </Grid>
                <Grid item sm={4} xs={12} className={classes.fieldSpacing}>
                  <div className={classes.fieldContainer}>
                    <h3 className={classes.fieldLabel}>
                      {t("form:label.email")}
                    </h3>
                    <Controls.Input
                      id="text"
                      name="email"
                      onChange={handleInputChange}
                      fullWidth
                      value={email}
                      placeholder={t("form:placeholder.custom.pleaseInput")}
                    />
                  </div>
                </Grid>
              </Grid>
              <div className={classes.subLabel} style={{ marginBottom: 40 }}>
                {t("typography:heading.employmentInformation")}
              </div>
              <Grid
                container
                item
                xs={12}
                sm={6}
                lg={12}
                style={{ marginTop: "-20px" }}
              >
                <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                  <div className={classes.fieldContainer}>
                    <h3 className={classes.fieldLabel}>
                      {t("form:label.dateOfEmployment")}
                    </h3>
                    <Controls.DatePicker
                      defaultValue="2010-03-15"
                      name="date_of_employment"
                      fullWidth
                      id="date"
                      type="date"
                      onChange={handleInputChange}
                      className={classes.textField}
                      value={date_of_employment}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      helperText="YYYYMMDD"
                    ></Controls.DatePicker>
                  </div>
                </Grid>
                <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                  <div className={classes.fieldContainer}>
                    <h3 className={classes.fieldLabel}>
                      {t("form:label.employeeType")}
                    </h3>
                    <Controls.Select
                      name="employee_type"
                      onChange={handleInputChange}
                      fullWidth
                      value={employee_type}
                      className={classes.gender}
                      options={employeeType}
                    ></Controls.Select>
                  </div>
                </Grid>
                <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                  <div className={classes.fieldContainer}>
                    <h3 className={classes.fieldLabel}>
                      {t("form:label.reportedIndustryType")}
                    </h3>
                    <Controls.Select
                      name="reported_industry_type"
                      onChange={handleInputChange}
                      fullWidth
                      value={reported_industry_type}
                      className={classes.gender}
                      options={industryType}
                    ></Controls.Select>
                  </div>
                </Grid>
                <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                  <div className={classes.fieldContainer}>
                    <h3 className={classes.fieldLabel}>
                      {t("form:label.occupation")}
                    </h3>
                    <Controls.Select
                      name="occupation"
                      onChange={handleInputChange}
                      fullWidth
                      value={occupation}
                      className={classes.gender}
                      options={occupationType}
                    ></Controls.Select>
                  </div>
                </Grid>
                <Grid item sm={4} xs={12} className={classes.fieldSpacing}>
                  <div className={classes.fieldContainer}>
                    <h3 className={classes.fieldLabel}>
                      {t("form:label.mpfSchemeName")}
                    </h3>
                    <Controls.Select
                      name="mpf_scheme_name"
                      onChange={handleInputChange}
                      fullWidth
                      value={mpf_scheme_name}
                      className={classes.gender}
                      options={schemeType}
                    ></Controls.Select>
                  </div>
                </Grid>
                <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                  <div className={classes.fieldContainer}>
                    <h3 className={classes.fieldLabel}>
                      {t("form:label.taxResidency")}
                    </h3>
                    <Controls.Input
                      id="text"
                      name="tax_residency"
                      onChange={handleInputChange}
                      fullWidth
                      type="text"
                      value={tax_residency}
                      placeholder={t("form:placeholder.custom.pleaseInput")}
                    />
                  </div>
                </Grid>
                <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                  <div className={classes.fieldContainer}>
                    <h3 className={classes.fieldLabel}>
                      {t("form:label.tin")}
                    </h3>
                    <Controls.Input
                      id="text"
                      name="tin"
                      onChange={handleInputChange}
                      fullWidth
                      type="text"
                      value={tin}
                      placeholder={t("form:placeholder.custom.pleaseInput")}
                    />
                  </div>
                </Grid>
                <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                  <div className={classes.fieldContainer}>
                    <h3 className={classes.fieldLabel}>
                      {t("form:label.status")}
                    </h3>
                    <Controls.Select
                      name="status"
                      onChange={handleInputChange}
                      fullWidth
                      value={status}
                      className={classes.gender}
                      type="text"
                      placeholder="Please select"
                      options={statusType}
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
                    text={t("button:clear")}
                    color="default"
                    onClick={handleReset}
                  />
                  <Controls.Button
                    type="submit"
                    data-testid="submit-btn"
                    text={t("button:search")}
                    style={{ backgroundColor: "#EF841F", color: "#fff" }}
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
  searchMembers: PropTypes.func.isRequired,
  fetchGender: PropTypes.func.isRequired,
  fetchIdType: PropTypes.func.isRequired,
  fetchNationality: PropTypes.func.isRequired,
  fetchEmployeeType: PropTypes.func.isRequired,
  fetchIndustryType: PropTypes.func.isRequired,
  fetchSchemeType: PropTypes.func.isRequired,
  fetchOccupation: PropTypes.func.isRequired,
  fetchStatus: PropTypes.func.isRequired,
  fetchPlaceOfBirth: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  employees: state.employees,
});

export default connect(mapStateToProps, {
  searchMembers,
  fetchGender,
  fetchIdType,
  fetchNationality,
  fetchEmployeeType,
  fetchIndustryType,
  fetchSchemeType,
  fetchOccupation,
  fetchStatus,
  fetchPlaceOfBirth,
  saveQuery,
})(EmployeeForm);
