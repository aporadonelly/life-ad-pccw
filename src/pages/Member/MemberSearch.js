import { Grid, Card, CardContent, Typography, Box } from "@material-ui/core";
import { PageInner } from "@components/layout";
import { Formik } from "formik";
import { Form } from "@components/common";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import EmployeeStyles from "../../components/employees/styles/EmployeeStyles";

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
// const gender = [
//   {
//     version: null,
//     id: "c172a061-2de8-464f-e053-870a1fac8115",
//     cstmTypId: "GT_M",
//     cstmGrpId: "GD",
//     cstmGrpTxt: "Gender Type",
//     cstmTypDtlTxt: "Male",
//     lnggTypId: "en",
//   },
//   {
//     version: null,
//     id: "c172a061-2de9-464f-e053-870a1fac8115",
//     cstmTypId: "GT_F",
//     cstmGrpId: "GD",
//     cstmGrpTxt: "Gender Type",
//     cstmTypDtlTxt: "Female",
//     lnggTypId: "en",
//   },
//   {
//     version: null,
//     id: "c172a061-2dea-464f-e053-870a1fac8115",
//     cstmTypId: "GT_B",
//     cstmGrpId: "GD",
//     cstmGrpTxt: "Gender Type",
//     cstmTypDtlTxt: "Both",
//     lnggTypId: "en",
//   },
// ];

const validationSchema = yup.object().shape({
  email: yup.string().email(),
});

const MemberSearch = () => {
  const classes = EmployeeStyles();
  const { t } = useTranslation(["typography", "form", "button"]);

  const handleSubmit = (values) => {
    console.log(values, "hey");
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
                        name="mpf_id"
                        type="text"
                        placeholder={t("form:placeholder.custom.pleaseInput")}
                      />
                    </Grid>
                  </Grid>
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
                    <Grid item xs={12} lg={2}>
                      <Form.Select
                        //option 1
                        data={{
                          options: gender,
                          label: (option) => option.cstmTypDtlTxt,
                          value: (option) => option.cstmTypId,
                        }}
                        //option 2
                        // data={{ options: genderType }}
                        label={t("form:label.gender")}
                        name="gender"
                        type="text"
                        placeholder={t("form:placeholder.custom.pleaseSelect")}
                      />
                    </Grid>
                  </Grid>

                  <Grid container spacing={2}>
                    <Grid item xs={12} lg={2}>
                      <Form.Select
                        label={t("form:label.idType")}
                        name="id_type"
                        type="text"
                        placeholder={t("form:placeholder.custom.pleaseSelect")}
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
                        label={t("form:label.nationality")}
                        name="nationality"
                        type="text"
                        placeholder={t("form:placeholder.custom.pleaseSelect")}
                      />
                    </Grid>
                    <Grid item xs={12} lg={2}>
                      <Form.Select
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
                        label={t("form:label.employeeType")}
                        name="employee_type"
                        type="text"
                        placeholder={t("form:placeholder.custom.pleaseSelect")}
                      />
                    </Grid>
                    <Grid item xs={12} lg={2}>
                      <Form.Select
                        label={t("form:label.reportedIndustryType")}
                        name="reported_industry_type"
                        type="text"
                        placeholder={t("form:placeholder.custom.pleaseSelect")}
                      />
                    </Grid>
                    <Grid item xs={12} lg={2}>
                      <Form.Select
                        label={t("form:label.occupation")}
                        name="occupation"
                        type="text"
                        placeholder={t("form:placeholder.custom.pleaseInput")}
                      />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                      <Form.Select
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
                      </Form.Submit>{" "}
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

export default MemberSearch;
