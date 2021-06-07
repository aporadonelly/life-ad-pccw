import { Grid, Card, CardContent, Typography, Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { Formik } from "formik";
import * as yup from "yup";
import { PageInner } from "@components/layout";
import { Form } from "@components/common";
import { BottomAppBar } from "@components/misc";
import EmployeeStyles from "@components/employees/styles/EmployeeStyles";

const initialValues = {
  mpfID: "",
  employerAcctNo: "",
  companyNameEnglish: "",
  companyNameChinese: "",
  registrationType: "",
  registrationNumber: "",
  branchNumber: "",
  typesOfCompany: "",
  dateOfIncorporation: "",
  natureOfBusiness: "",
  referenceNoOfMpfOrServiceAgent: "",
  registrationStatus: "",
  scheme: "",
  enrolmentStatus: "",
};

const validationSchema = yup.object().shape({
  email: yup.string().email("Please input valid email address."),
  mobileNumber: yup.number().typeError("Please enter numbers."),
});

const CompanyProfile = () => {
  const { t } = useTranslation(["typography", "form", "button"]);
  const classes = EmployeeStyles();

  const handleSubmit = (values) => {
    console.log(values, "submit");
  };

  const handleReset = () => {
    console.log("Reset");
  };

  return (
    <PageInner>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Button data-testid="addErEnroment">
            {t("button:addErEnrollment")}
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                onReset={handleReset}
                enableReinitialize
              >
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="h6" color="primary">
                        {t("typography:heading.employerRegOrEnr")}
                      </Typography>
                    </Grid>
                  </Grid>

                  {/* First line */}
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      <Form.Input
                        label={t("form:label.mpfId")}
                        name="mpfID"
                        type="text"
                        placeholder={t("form:placeholder.custom.pleaseInput")}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <Form.Input
                        label={t("form:label.employerAcctNo")}
                        name="employerAcctNo"
                        type="text"
                        placeholder={t("form:placeholder.custom.pleaseInput")}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <Form.Input
                        label={t("form:label.companyNameEnglish")}
                        name="companyNameEnglish"
                        type="text"
                        placeholder={t("form:placeholder.custom.pleaseInput")}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <Form.Input
                        label={t("form:label.companyNameChinese")}
                        name="companyNameChinese"
                        type="text"
                        placeholder={t("form:placeholder.custom.pleaseInput")}
                      />
                    </Grid>
                  </Grid>
                  {/* Second line */}
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      <Form.Select
                        label={t("form:label.registrationType")}
                        name="registrationType"
                        type="text"
                        placeholder={t("form:placeholder.custom.pleaseSelect")}
                        // data={{
                        //   options: idType,
                        //   label: (option) => option.cstmTypDtlTxt,
                        //   value: (option) => option.cstmTypId,
                        // }}
                        clearButton
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <Form.Input
                        label={t("form:label.registrationNumber")}
                        name="registrationNumber"
                        type="text"
                        placeholder={t("form:placeholder.custom.pleaseInput")}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <Form.Input
                        label={t("form:label.typesOfCompany")}
                        name="typesOfCompany"
                        type="text"
                        placeholder={t("form:placeholder.custom.pleaseInput")}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <Form.Select
                        label={t("form:label.branchNumber")}
                        name="branchNumber"
                        type="text"
                        placeholder={t("form:placeholder.custom.pleaseSelect")}
                        // data={{
                        //   options: idType,
                        //   label: (option) => option.cstmTypDtlTxt,
                        //   value: (option) => option.cstmTypId,
                        // }}
                        clearButton
                      />
                    </Grid>
                  </Grid>

                  {/* Third line */}
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      <Form.Input
                        label={t("form:label.dateOfIncorporation")}
                        name="dateOfIncorporation"
                        type="text"
                        placeholder={t("form:placeholder.custom.pleaseInput")}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Form.Input
                        label={t("form:label.registeredOfcAddress")}
                        name="registeredOfcAddress"
                        type="text"
                        placeholder={t("form:placeholder.custom.pleaseInput")}
                      />
                    </Grid>
                  </Grid>

                  {/* Fourth line */}
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Form.Input
                        label={t("form:label.businessAddress")}
                        name="businessAddress"
                        type="text"
                        placeholder={t("form:placeholder.custom.pleaseInput")}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Form.Input
                        label={t("form:label.correspondenceAddress")}
                        name="correspondenceAddress"
                        type="text"
                        placeholder={t("form:placeholder.custom.pleaseInput")}
                      />
                    </Grid>
                  </Grid>

                  {/* Fifth line */}
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      <Form.Select
                        // data={{
                        //   options: placeOfBirth,
                        //   label: (option) => option.cntryTypNm,
                        //   value: (option) => option.cntryTypCd,
                        // }}
                        label={t("form:label.natureOfBusiness")}
                        name="natureOfBusiness"
                        type="text"
                        placeholder={t("form:placeholder.custom.pleaseSelect")}
                        clearButton
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <Form.Input
                        label={t("form:label.referenceNoOfMpfOrServiceAgent")}
                        name="referenceNoOfMpfOrServiceAgent"
                        type="text"
                        placeholder={t("form:placeholder.custom.pleaseInput")}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <Form.Select
                        // data={{
                        //   options: placeOfBirth,
                        //   label: (option) => option.cntryTypNm,
                        //   value: (option) => option.cntryTypCd,
                        // }}
                        label={t("form:label.registrationStatus")}
                        name="registrationStatus"
                        type="text"
                        placeholder={t("form:placeholder.custom.pleaseSelect")}
                        clearButton
                      />
                    </Grid>
                  </Grid>
                  {/* 6th line */}
                  <Grid container spacing={2}>
                    <Grid item xs={5}>
                      <Form.Select
                        // data={{
                        //   options: placeOfBirth,
                        //   label: (option) => option.cntryTypNm,
                        //   value: (option) => option.cntryTypCd,
                        // }}
                        label={t("form:label.trustee")}
                        name="trustee"
                        type="text"
                        placeholder={t("form:placeholder.custom.pleaseSelect")}
                        clearButton
                      />
                    </Grid>
                    <Grid item xs={5}>
                      <Form.Select
                        // data={{
                        //   options: placeOfBirth,
                        //   label: (option) => option.cntryTypNm,
                        //   value: (option) => option.cntryTypCd,
                        // }}
                        label={t("form:label.scheme")}
                        name="scheme"
                        type="text"
                        placeholder={t("form:placeholder.custom.pleaseSelect")}
                        clearButton
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <Form.Select
                        // data={{
                        //   options: placeOfBirth,
                        //   label: (option) => option.cntryTypNm,
                        //   value: (option) => option.cntryTypCd,
                        // }}
                        label={t("form:label.enrolmentStatus")}
                        name="enrolmentStatus"
                        type="text"
                        placeholder={t("form:placeholder.custom.pleaseSelect")}
                        clearButton
                      />
                    </Grid>
                  </Grid>

                  {/* Floating Buttons */}
                  <Grid
                    container
                    item
                    xs={12}
                    justify="flex-end"
                    className={classes.fieldSpacing}
                  >
                    <div className={classes.formBtnContainer}>
                      <BottomAppBar>
                        <Form.Reset variant="outlined" color="default">
                          {t("button:clear")}
                        </Form.Reset>
                        &emsp;
                        <Form.Submit
                        // disabled={isEqual(formik.values, initialValues)}
                        >
                          {/* {isLoading ? (
                            <Box display="flex" justifyContent="center">
                              <CircularProgress size={25} color="inherit" />
                            </Box>
                          ) : ( */}
                          {t("button:search")}
                          {/* )} */}
                        </Form.Submit>
                      </BottomAppBar>
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

export default CompanyProfile;
