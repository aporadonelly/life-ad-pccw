import { useEffect, useState } from "react";
import moment from "moment";
import { isEqual } from "lodash";
import * as yup from "yup";
import { Formik } from "formik";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  CircularProgress,
  Toolbar,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { PageInner } from "@components/layout";
import { Form } from "@components/common";
import { BottomAppBar } from "@components/misc";
import EmployeeStyles from "../../../components/employees/styles/EmployeeStyles";

const initialValues = {
  mpfID: "",
  fullName: "",
  chineseName: "",
  gender: "",
  idType: "",
  idNumber: "",
  dateOfBirth: "",
  nationality: "",
  placeOfBirth: "",
  mobileNumber: "",
  address: "",
  email: "",
  dateOfEmployment: "",
  employeeType: "",
  reportedIndustryType: "",
  occupation: "",
  schemeUuid: "",
  taxResidency: "",
  tin: "",
  status: "",
};

const validationSchema = yup.object().shape({
  email: yup.string().email(),
});

const MemberSearch = ({
  isLoading,
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
}) => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (values) => {
    const newValues = { ...values };
    newValues.dateOfBirth =
      newValues.dateOfBirth &&
      moment(newValues.dateOfBirth).format("YYYY/MM/DD");
    getAllMembers(newValues);
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
                {(formik) => {
                  return (
                    <Form>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <Typography variant="h6" color="primary">
                            {t("typography:heading.memberEnquiry")}
                          </Typography>
                        </Grid>
                        <Grid item xs={2}>
                          <Form.Input
                            label={t("form:label.mpfId")}
                            name="mpfID"
                            type="text"
                            placeholder={t(
                              "form:placeholder.custom.pleaseInput"
                            )}
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
                        <Grid item xs={4}>
                          <Form.Input
                            label={t("form:label.displayName")}
                            name="fullName"
                            type="text"
                            placeholder={t(
                              "form:placeholder.custom.inputEnglishName"
                            )}
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <Form.Input
                            label={t("form:label.chineseName")}
                            name="chineseName"
                            type="text"
                            placeholder={t(
                              "form:placeholder.custom.inputChineseName"
                            )}
                          />
                        </Grid>
                        <Grid item xs={2}>
                          <Form.Select
                            data={{
                              options: gender,
                              label: (option) => option.cstmTypDtlTxt,
                              value: (option) => option.cstmTypId,
                            }}
                            label={t("form:label.gender")}
                            name="gender"
                            type="text"
                            placeholder={t(
                              "form:placeholder.custom.pleaseSelect"
                            )}
                            clearButton
                          />
                        </Grid>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={2}>
                          <Form.Select
                            label={t("form:label.idType")}
                            name="idType"
                            type="text"
                            placeholder={t(
                              "form:placeholder.custom.pleaseSelect"
                            )}
                            data={{
                              options: idType,
                              label: (option) => option.cstmTypDtlTxt,
                              value: (option) => option.cstmTypId,
                            }}
                            clearButton
                          />
                        </Grid>
                        <Grid item xs={2}>
                          <Form.Input
                            label={t("form:label.idNumber")}
                            name="idNumber"
                            type="text"
                            placeholder={t(
                              "form:placeholder.custom.pleaseInput"
                            )}
                          />
                        </Grid>
                        <Grid item xs={2}>
                          <Form.DatePicker
                            label={t("form:label.birthdate")}
                            name="dateOfBirth"
                            format="YYYY/MM/DD"
                            placeholder={t(
                              "form:placeholder.custom.pleaseInput"
                            )}
                            helperText="DDMMYYYY"
                          />
                        </Grid>
                        <Grid item xs={2}>
                          <Form.Select
                            data={{
                              options: nationality,
                              label: (option) => option.cstmTypId,
                              value: (option) => option.cstmTypDtlTxt,
                            }}
                            label={t("form:label.nationality")}
                            name="nationality"
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
                              options: placeOfBirth,
                              label: (option) => option.cntryTypNm,
                              value: (option) => option.cntryTypCd,
                            }}
                            label={t("form:label.placeOfBirth")}
                            name="placeOfBirth"
                            type="text"
                            placeholder={t(
                              "form:placeholder.custom.pleaseSelect"
                            )}
                            clearButton
                          />
                        </Grid>
                        <Grid item xs={2}>
                          <Form.Input
                            label={t("form:label.mobileNumber")}
                            name="mobileNumber"
                            type="text"
                            placeholder={t(
                              "form:placeholder.custom.pleaseInput"
                            )}
                          />
                        </Grid>
                      </Grid>
                      <Grid container spacing={2}>
                        <Grid item xs={8}>
                          <Form.Input
                            label={t("form:label.address")}
                            name="address"
                            type="text"
                            placeholder={t(
                              "form:placeholder.custom.pleaseInput"
                            )}
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <Form.Input
                            label={t("form:label.email")}
                            name="email"
                            type="email"
                            placeholder={t(
                              "form:placeholder.custom.pleaseInput"
                            )}
                          />
                        </Grid>
                      </Grid>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <Typography variant="h6" color="primary">
                            {t("typography:heading.employmentInformation")}
                          </Typography>
                        </Grid>
                        <Grid item xs={2}>
                          <Form.DatePicker
                            label={t("form:label.dateOfEmployment")}
                            name="dateOfEmployment"
                            type="text"
                            placeholder={t(
                              "form:placeholder.custom.pleaseInput"
                            )}
                            helperText="DDMMYYYY"
                          />
                        </Grid>
                        <Grid item xs={2}>
                          <Form.Select
                            data={{
                              options: employeeType,
                              label: (option) => option.cstmTypDtlTxt,
                              value: (option) => option.cstmTypId,
                            }}
                            label={t("form:label.employeeType")}
                            name="employeeType"
                            type="text"
                            placeholder={t(
                              "form:placeholder.custom.pleaseSelect"
                            )}
                          />
                        </Grid>
                        <Grid item xs={2}>
                          <Form.Select
                            data={{
                              options: industryType,
                              label: (option) => option.cstmTypDtlTxt,
                              value: (option) => option.cstmTypId,
                            }}
                            label={t("form:label.reportedIndustryType")}
                            name="reportedIndustryType"
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
                              options: occupation,
                              label: (option) => option.cstmTypDtlTxt,
                              value: (option) => option.cstmTypId,
                            }}
                            label={t("form:label.occupation")}
                            name="occupation"
                            type="text"
                            placeholder={t(
                              "form:placeholder.custom.pleaseInput"
                            )}
                            clearButton
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <Form.Select
                            data={{
                              options: schemeType,
                              label: (option) => option.cstmTypDtlTxt,
                              value: (option) => option.cstmTypId,
                            }}
                            label={t("form:label.mpfSchemeName")}
                            name="schemeUuid"
                            type="text"
                            placeholder={t(
                              "form:placeholder.custom.pleaseInput"
                            )}
                            clearButton
                          />
                        </Grid>
                        <Grid item xs={2}>
                          <Form.Input
                            label={t("form:label.taxResidency")}
                            name="taxResidency"
                            type="text"
                            placeholder={t(
                              "form:placeholder.custom.pleaseInput"
                            )}
                          />
                        </Grid>
                        <Grid item xs={2}>
                          <Form.Input
                            label={t("form:label.tin")}
                            name="tin"
                            type="text"
                            placeholder={t(
                              "form:placeholder.custom.pleaseInput"
                            )}
                          />
                        </Grid>
                        <Grid item xs={2}>
                          <Form.Select
                            data={{
                              options: status,
                              label: (option) => option.cstmTypDtlTxt,
                              value: (option) => option.cstmTypId,
                            }}
                            label={t("form:label.status")}
                            name="status"
                            type="text"
                            placeholder={t(
                              "form:placeholder.custom.pleaseSelect"
                            )}
                            clearButton
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
    </PageInner>
  );
};
export default MemberSearch;
