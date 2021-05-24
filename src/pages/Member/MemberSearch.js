import { useEffect } from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { get } from "lodash";
import {
  isLoadingSelector,
  errorSelector,
  genderSelector,
  idTypeSelector,
  nationalitySelector,
  placeOfBirthSelector,
  employeeTypeSelector,
  industryTypeSelector,
  occupationSelector,
  schemeTypeSelector,
  statusSelector,
  employeesSelector,
} from "@redux/features/employees/selectors";
import {
  getGender,
  getIdType,
  getNationality,
  getPlaceOfBirth,
  getEmployeeType,
  getIndustryType,
  getOccupation,
  getSchemeType,
  getStatus,
  getAllMembers,
} from "@redux/features/employees/actions";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { Formik } from "formik";
import { PageInner } from "@components/layout";
import { Form } from "@components/common";
import EmployeeStyles from "../../components/employees/styles/EmployeeStyles";

const initialValues = {
  mpfID: "",
  first_name: "",
  chinese_name: "",
  gender: "",
  id_type: "",
  id_number: "",
  date_of_birth: "",
  nationality: "",
  place_of_birth: "",
  mobile_number: "",
  address: "",
  email: "",
  date_of_employment: "",
  employee_type: "",
  reported_industry_type: "",
  occupation: "",
  mpf_scheme_name: "",
  tax_residency: "",
  tin: "",
  status: "",
};

const validationSchema = yup.object().shape({
  email: yup.string().email(),
});

const MemberSearch = (props) => {
  const {
    gender,
    getGender,
    idType,
    getIdType,
    getNationality,
    nationality,
    placeOfBirth,
    getPlaceOfBirth,
    getEmployeeType,
    employeeType,
    industryType,
    getIndustryType,
    getOccupation,
    occupation,
    getSchemeType,
    schemeType,
    getStatus,
    status,
    getAllMembers,
    employees,
  } = props;

  const classes = EmployeeStyles();
  const { t } = useTranslation(["typography", "form", "button"]);

  useEffect(() => {
    getGender();
    getIdType();
    getNationality();
    getPlaceOfBirth();
    getEmployeeType();
    getIndustryType();
    getOccupation();
    getSchemeType();
    getStatus();
  }, []);

  const handleSubmit = (values) => {
    getAllMembers(values);
  };

  return (
    <PageInner>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="h6" color="primary">
                        {t("typography:heading.memberEnquiry")}
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Form.Input
                        label={t("form:label.mpfId")}
                        name="mpfID"
                        type="text"
                        placeholder={t("form:placeholder.custom.pleaseInput")}
                      />
                    </Grid>
                  </Grid>

                  {/* Personal Info */}
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="h6" color="primary">
                        {t("typography:heading.personalInformation")}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                      <Form.Input
                        label={t("form:label.displayName")}
                        name="first_name"
                        type="text"
                        placeholder={t(
                          "form:placeholder.custom.inputEnglishName"
                        )}
                      />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                      <Form.Input
                        label={t("form:label.chineseName")}
                        name="chinese_name"
                        type="text"
                        placeholder={t(
                          "form:placeholder.custom.inputChineseName"
                        )}
                      />
                    </Grid>
                    <Grid item xs={12} lg={3}>
                      <Form.Select
                        data={{
                          options: gender,
                          label: (option) => option.cstmTypDtlTxt,
                          value: (option) => option.cstmTypId,
                        }}
                        label={t("form:label.gender")}
                        name="gender"
                        type="text"
                        placeholder={t("form:placeholder.custom.pleaseSelect")}
                      />
                    </Grid>
                    <Grid item xs={12} lg={2}>
                      <Form.Select
                        label={t("form:label.idType")}
                        name="id_type"
                        type="text"
                        placeholder={t("form:placeholder.custom.pleaseSelect")}
                        data={{
                          options: idType,
                          label: (option) => option.cstmTypDtlTxt,
                          value: (option) => option.cstmTypId,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} lg={2}>
                      <Form.Input
                        label={t("form:label.idNumber")}
                        name="id_number"
                        type="text"
                        placeholder={t("form:placeholder.custom.pleaseInput")}
                      />
                    </Grid>
                    <Grid item xs={12} lg={2}>
                      <Form.DatePicker
                        label={t("form:label.birthdate")}
                        name="date_of_birth"
                        type="text"
                        placeholder={t("form:placeholder.custom.pleaseInput")}
                        helperText="DDMMYYYY"
                      />
                    </Grid>
                    <Grid item xs={12} lg={2}>
                      <Form.Select
                        data={{
                          options: nationality,
                          label: (option) => option.cstmTypId,
                          value: (option) => option.cstmTypDtlTxt,
                        }}
                        label={t("form:label.nationality")}
                        name="nationality"
                        type="text"
                        placeholder={t("form:placeholder.custom.pleaseSelect")}
                      />
                    </Grid>
                    <Grid item xs={12} lg={2}>
                      <Form.Select
                        data={{
                          options: placeOfBirth,
                          label: (option) => option.cntryTypNm,
                          value: (option) => option.cntryTypCd,
                        }}
                        label={t("form:label.placeOfBirth")}
                        name="place_of_birth"
                        type="text"
                        placeholder={t("form:placeholder.custom.pleaseSelect")}
                      />
                    </Grid>
                    <Grid item xs={12} lg={2}>
                      <Form.Input
                        label={t("form:label.mobileNumber")}
                        name="mobile_number"
                        type="text"
                        placeholder={t("form:placeholder.custom.pleaseInput")}
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={12} lg={8}>
                      <Form.Input
                        label={t("form:label.address")}
                        name="address"
                        type="text"
                        placeholder={t("form:placeholder.custom.pleaseInput")}
                      />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                      <Form.Input
                        label={t("form:label.email")}
                        name="email"
                        type="email"
                        placeholder={t("form:placeholder.custom.pleaseInput")}
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="h6" color="primary">
                        {t("typography:heading.employmentInformation")}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} lg={2}>
                      <Form.DatePicker
                        label={t("form:label.dateOfEmployment")}
                        name="date_of_employment"
                        type="text"
                        placeholder={t("form:placeholder.custom.pleaseInput")}
                        helperText="DDMMYYYY"
                      />
                    </Grid>
                    <Grid item xs={12} lg={2}>
                      <Form.Select
                        data={{
                          options: employeeType,
                          label: (option) => option.cstmTypDtlTxt,
                          value: (option) => option.cstmTypId,
                        }}
                        label={t("form:label.employeeType")}
                        name="employee_type"
                        type="text"
                        placeholder={t("form:placeholder.custom.pleaseSelect")}
                      />
                    </Grid>
                    <Grid item xs={12} lg={2}>
                      <Form.Select
                        data={{
                          options: industryType,
                          label: (option) => option.cstmTypDtlTxt,
                          value: (option) => option.cstmTypId,
                        }}
                        label={t("form:label.reportedIndustryType")}
                        name="reported_industry_type"
                        type="text"
                        placeholder={t("form:placeholder.custom.pleaseSelect")}
                      />
                    </Grid>
                    <Grid item xs={12} lg={2}>
                      <Form.Select
                        data={{
                          options: occupation,
                          label: (option) => option.cstmTypDtlTxt,
                          value: (option) => option.cstmTypId,
                        }}
                        label={t("form:label.occupation")}
                        name="occupation"
                        type="text"
                        placeholder={t("form:placeholder.custom.pleaseInput")}
                      />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                      <Form.Select
                        data={{
                          options: schemeType,
                          label: (option) => option.cstmTypDtlTxt,
                          value: (option) => option.cstmTypId,
                        }}
                        label={t("form:label.mpfSchemeName")}
                        name="mpf_scheme_name"
                        type="text"
                        placeholder={t("form:placeholder.custom.pleaseInput")}
                      />
                    </Grid>
                    <Grid item xs={12} lg={2}>
                      <Form.Input
                        label={t("form:label.taxResidency")}
                        name="tax_residency"
                        type="text"
                        placeholder={t("form:placeholder.custom.pleaseInput")}
                      />
                    </Grid>
                    <Grid item xs={12} lg={2}>
                      <Form.Input
                        label={t("form:label.tin")}
                        name="tin"
                        type="text"
                        placeholder={t("form:placeholder.custom.pleaseInput")}
                      />
                    </Grid>
                    <Grid item xs={12} lg={2}>
                      <Form.Select
                        data={{
                          options: status,
                          label: (option) => option.cstmTypDtlTxt,
                          value: (option) => option.cstmTypId,
                        }}
                        label={t("form:label.status")}
                        name="status"
                        type="text"
                        placeholder={t("form:placeholder.custom.pleaseSelect")}
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    item
                    xs={12}
                    justify="flex-end"
                    className={classes.fieldSpacing}
                  >
                    <div className={classes.formBtnContainer}>
                      <Form.Submit variant="outlined">
                        {t("button:clear")}
                      </Form.Submit>
                      &nbsp;
                      <Form.Submit>{t("button:search")}</Form.Submit>
                    </div>
                  </Grid>
                </Form>
              </Formik>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PageInner>
  );
};

const mapStateToProps = (state) => ({
  isLoading: isLoadingSelector(state),
  error: errorSelector(state),
  gender: genderSelector(state),
  idType: idTypeSelector(state),
  nationality: nationalitySelector(state),
  placeOfBirth: placeOfBirthSelector(state),
  employeeType: employeeTypeSelector(state),
  industryType: industryTypeSelector(state),
  occupation: occupationSelector(state),
  schemeType: schemeTypeSelector(state),
  status: statusSelector(state),
  employees: employeesSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      getGender,
      getIdType,
      getNationality,
      getPlaceOfBirth,
      getEmployeeType,
      getIndustryType,
      getOccupation,
      getSchemeType,
      getStatus,
      getAllMembers,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(MemberSearch);
