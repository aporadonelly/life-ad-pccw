import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  CircularProgress,
  Toolbar,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { Formik } from "formik";
import { Form } from "@components/common";
import { BottomAppBar } from "@components/misc";
import { isEqual } from "lodash";
import { unwrapResult } from "@reduxjs/toolkit";
const initialValues = {
  pnsnId: "",
  employerAccountNumber: "",
  companyName: "",
  companyChineseName: "",
  registrationTypeId: "",
  registrationNumber: "",
  branchNumber: "",
  companyTypeId: "",
  incorporationDate: "",
  natureId: "",
  agentRegistrationNumber: "",
  registrationStatusId: "",
  schemeId: "",
  trusteeId: "",
  enrollmentStatusId: "",
  correspondenceAddress: "",
  businessAddress: "",
  registeredOfficeAddress: "",
};

const CompanyProfile = ({
  isLoading,
  industryType,
  registrationType,
  typesOfCompany,
  enrollmentStatus,
  registrationStatus,
  enquiry,
  ldSrchCmpny,
  draftEnquiry,
  trustees,
  schemes,
  push,
}) => {
  const { t } = useTranslation(["typography", "form", "button"]);

  const handleSubmit = (values) => {
    ldSrchCmpny(values)
      .then(unwrapResult)
      .then(() => {
        push("/employers/enquiries/result");
        draftEnquiry(values);
      });
  };

  const handleReset = () => {
    draftEnquiry({});
  };

  return (
    <>
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
                initialValues={{ ...initialValues, ...enquiry }}
                onSubmit={handleSubmit}
                onReset={handleReset}
                enableReinitialize
              >
                {(formik) => {
                  return (
                    <Form>
                      <Grid item xs={12}>
                        <Typography
                          variant="h6"
                          color="primary"
                          style={{ marginBottom: "13px" }}
                        >
                          {t("typography:heading.enrollmentEnquiries")}
                        </Typography>
                      </Grid>

                      {/* First line */}
                      <Grid container spacing={3}>
                        <Grid item xs={3}>
                          <Form.Input
                            label={t("form:label.mpfId")}
                            name="pnsnId"
                            type="text"
                            placeholder={t(
                              "form:placeholder.custom.pleaseInput"
                            )}
                          />
                        </Grid>
                        <Grid item xs={3}>
                          <Form.Input
                            label={t("form:label.employerAcctNo")}
                            name="employerAccountNumber"
                            type="text"
                            placeholder={t(
                              "form:placeholder.custom.pleaseInput"
                            )}
                          />
                        </Grid>
                        <Grid item xs={3}>
                          <Form.Input
                            label={t("form:label.companyNameEnglish")}
                            name="companyName"
                            type="text"
                            placeholder={t(
                              "form:placeholder.custom.pleaseInput"
                            )}
                          />
                        </Grid>
                        <Grid item xs={3}>
                          <Form.Input
                            label={t("form:label.companyNameChinese")}
                            name="companyChineseName"
                            type="text"
                            placeholder={t(
                              "form:placeholder.custom.pleaseInput"
                            )}
                          />
                        </Grid>
                      </Grid>
                      {/* Second line */}
                      <Grid container spacing={3}>
                        <Grid item xs={3}>
                          <Form.Select
                            label={t("form:label.registrationType")}
                            name="registrationTypeId"
                            type="text"
                            placeholder={t(
                              "form:placeholder.custom.pleaseSelect"
                            )}
                            data={{
                              options: registrationType,
                              label: (option) => option.cstmTypDtlTxt,
                              value: (option) => option.cstmTypId,
                            }}
                            clearButton
                          />
                        </Grid>
                        <Grid item xs={3}>
                          <Form.Input
                            label={t("form:label.registrationNumber")}
                            name="registrationNumber"
                            type="text"
                            placeholder={t(
                              "form:placeholder.custom.pleaseInput"
                            )}
                          />
                        </Grid>
                        <Grid item xs={3}>
                          <Form.Select
                            label={t("form:label.typesOfCompany")}
                            name="companyTypeId"
                            type="text"
                            placeholder={t(
                              "form:placeholder.custom.pleaseInput"
                            )}
                            data={{
                              options: typesOfCompany,
                              label: (option) => option.cstmTypDtlTxt,
                              value: (option) => option.cstmTypId,
                            }}
                            clearButton
                          />
                        </Grid>
                        <Grid item xs={3}>
                          <Form.Input
                            label={t("form:label.branchNumber")}
                            name="branchNumber"
                            type="text"
                            placeholder={t(
                              "form:placeholder.custom.pleaseSelect"
                            )}
                            clearButton
                          />
                        </Grid>
                      </Grid>

                      {/* Third line */}
                      <Grid container spacing={3}>
                        <Grid item xs={3}>
                          <Form.DatePicker
                            label={t("form:label.dateOfIncorporation")}
                            name="incorporationDate"
                            format="DD/MM/YYYY"
                            type="text"
                            placeholder={t(
                              "form:placeholder.custom.pleaseInput"
                            )}
                            helperText="DDMMYYYY"
                          />
                        </Grid>
                        <Grid item xs={3}>
                          <Form.Input
                            label={t("form:label.registeredOfcAddress")}
                            name="registeredOfficeAddress"
                            type="text"
                            placeholder={t(
                              "form:placeholder.custom.pleaseInput"
                            )}
                          />
                        </Grid>
                      </Grid>

                      {/* Fourth line */}
                      <Grid container spacing={3}>
                        <Grid item xs={6}>
                          <Form.Input
                            label={t("form:label.businessAddress")}
                            name="businessAddress"
                            type="text"
                            placeholder={t(
                              "form:placeholder.custom.pleaseInput"
                            )}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <Form.Input
                            label={t("form:label.correspondenceAddress")}
                            name="correspondenceAddress"
                            type="text"
                            placeholder={t(
                              "form:placeholder.custom.pleaseInput"
                            )}
                          />
                        </Grid>
                      </Grid>

                      {/* Fifth line */}
                      <Grid container spacing={3}>
                        <Grid item xs={4}>
                          <Form.Select
                            data={{
                              options: industryType,
                              label: (option) => option.cstmTypDtlTxt,
                              value: (option) => option.cstmTypId,
                            }}
                            label={t("form:label.natureOfBusiness")}
                            name="natureId"
                            type="text"
                            placeholder={t(
                              "form:placeholder.custom.pleaseSelect"
                            )}
                            clearButton
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <Form.Input
                            label={t(
                              "form:label.referenceNoOfMpfOrServiceAgent"
                            )}
                            name="agentRegistrationNumber"
                            type="text"
                            placeholder={t(
                              "form:placeholder.custom.pleaseInput"
                            )}
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <Form.Select
                            data={{
                              options: registrationStatus,
                              label: (option) => option.customTypDldText,
                              value: (option) => option.customTypId,
                            }}
                            label={t("form:label.registrationStatus")}
                            name="registrationStatusId"
                            type="text"
                            placeholder={t(
                              "form:placeholder.custom.pleaseSelect"
                            )}
                            clearButton
                          />
                        </Grid>
                      </Grid>
                      {/* 6th line */}
                      <Grid container spacing={3}>
                        <Grid item xs={5}>
                          <Form.Select
                            data={{
                              options: trustees,
                              label: (option) => option.name,
                              value: (option) => option.id,
                            }}
                            label={t("form:label.trustee")}
                            name="trusteeId"
                            type="text"
                            placeholder={t(
                              "form:placeholder.custom.pleaseSelect"
                            )}
                            clearButton
                          />
                        </Grid>
                        <Grid item xs={5}>
                          <Form.Select
                            data={{
                              options: schemes,
                              label: (option) => option.name,
                              value: (option) => option.id,
                            }}
                            label={t("form:label.scheme")}
                            name="schemeId"
                            type="text"
                            placeholder={t(
                              "form:placeholder.custom.pleaseSelect"
                            )}
                            clearButton
                          />
                        </Grid>
                        <Grid item xs={2}>
                          <Form.Select
                            data={{
                              options: enrollmentStatus,
                              label: (option) => option.customTypDldText,
                              value: (option) => option.customTypId,
                            }}
                            label={t("form:label.enrollmentStatus")}
                            name="enrollmentStatusId"
                            type="text"
                            placeholder={t(
                              "form:placeholder.custom.pleaseSelect"
                            )}
                            clearButton
                          />
                        </Grid>
                      </Grid>

                      {/* Floating Buttons */}
                      <Grid container item xs={12} justify="flex-end">
                        <div>
                          <BottomAppBar>
                            <Form.Reset variant="outlined" color="default">
                              {t("button:clear")}
                            </Form.Reset>
                            &emsp;
                            <Form.Submit
                              disabled={isEqual(formik.values, initialValues)}
                            >
                              {isLoading ? (
                                <Box display="flex" justifyContent="center">
                                  <CircularProgress size={25} color="inherit" />
                                </Box>
                              ) : (
                                t("button:search")
                              )}
                            </Form.Submit>
                          </BottomAppBar>
                        </div>
                      </Grid>
                    </Form>
                  );
                }}
              </Formik>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Toolbar variant="regular" />
    </>
  );
};

export default CompanyProfile;
