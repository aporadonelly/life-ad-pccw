import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { Grid, Card, CardContent, Typography, Divider, CircularProgress, Box, Button } from "@material-ui/core";
import { PageHeader, PageInner } from "@components/layout";
import { useTranslation } from "react-i18next";
import { Definition } from "@components/misc";
import CompanySupportingDocs from "./SupportingDocuments";
import AuthorizedPerson from "../AuthorizedPerson/AuthorizedPerson";
import { get } from "lodash";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";

const CompanyProfile = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { t } = useTranslation(["typography", "form", "button"]);
  const { LdRegCmpnyInfoforAdmnPrtl, getAuthorizedPersonList, companyRegInfo, authPersonList, isLoading } = props;

  const {
    companyNameEng,
    branchName,
    companyNameChi,
    dateOfIncorporation,
    natureOfBusiness,
    placeOfIncorporation,
    preferredLanguage,
    registrationNumber,
    registrationType,
    typeOfCompany } = get(companyRegInfo, "[0].companyRegistrationInfo") ?? {};

  const { registeredOfficeAddress, businessAddress, correspondenceAddress } = get(companyRegInfo, "[1].address") ?? {};
  const authorizedPerson = get(companyRegInfo, "[2].authorizedPerson") ?? [];
  const {
    lastName,
    firstName,
    nameTitle,
    jobTitle,
    telNo,
    mobileNo,
    emailAddress,
    preferredLanguagePriContact
  } = get(companyRegInfo, "[3].primaryContactPerson") ?? {};

  const {
    lastName2,
    firstName2,
    nameTitle2,
    jobTitle2,
    telNo2,
    mobileNo2,
    emailAddress2,
    preferredLanguageContact2
  } = get(companyRegInfo, "[4].secondaryContactPerson") ?? {};

  const supportingDocuments = get(companyRegInfo, "[5].supportingDocuments") ?? [];

  useEffect(() => {
    LdRegCmpnyInfoforAdmnPrtl();
    getAuthorizedPersonList();
  }, [LdRegCmpnyInfoforAdmnPrtl, getAuthorizedPersonList])

  return (
    <>
      <PageHeader
        routes={[
          {
            name: "Company Registration Information",
            path: "/employer",
            component: null,
          },
          {
            name: "Termination",
            path: "/employer/profile",
            component: null,
          },
        ]}
      >
        <PageHeader.SubjectInfo
          subject="ABC Company Limited"
          info={{
            "Employer NO.": 123132,
          }}
        />
        <PageHeader.SubjectInfo subject="Branch 002" />
      </PageHeader>
      <PageInner>
        {isLoading ? (
          <Box display="flex" justifyContent="center" mt={5}>
            {" "}
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              {companyNameEng && (
                <Card>
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={12} style={{ marginTop: 13 }}>
                        <Typography className={classes.titleLabel}>
                          {t("typography:heading.companyRegInfo")}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Definition spacing={2} xs={3}>
                          <Definition.List>
                            <Definition.Item item xs={3} sm={3} dt={t("form:label.companyNameEnglish")} dd={companyNameEng} />
                            <Definition.Item item xs={3} dt={t("form:label.companyNameChinese")} dd={companyNameChi} />
                            <Definition.Item item xs={3} dt={t("form:label.typeOfCompany")} dd={typeOfCompany} />
                            <Definition.Item item xs={3} dt={t("form:label.dateOfIncorporation")} dd={dateOfIncorporation} />
                            <Definition.Item item xs={3} dt={t("form:label.placeOfIncorporation")} dd={placeOfIncorporation} />
                            <Definition.Item item xs={3} dt={t("form:label.registrationType")} dd={registrationType} />
                            <Definition.Item item xs={3} dt={t("form:label.registrationNumber")} dd={registrationNumber} />
                            <Definition.Item item xs={3} dt={t("form:label.branchNumber")} dd={branchName} />
                            <Definition.Item item xs={3} dt={t("form:label.natureOfBusiness")} dd={natureOfBusiness} />
                            <Definition.Item item xs={3} dt={t("form:label.preferredCommunicationLanguage")} dd={preferredLanguage} />
                          </Definition.List>
                        </Definition>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              )}
            </Grid>

            <Grid item xs={12}>
              {registeredOfficeAddress && (
                <Card>
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Grid container alignItems="center">
                          <Grid item xs={6}>
                            <Typography className={classes.titleLabel}>
                              {t("typography:heading.address")}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Definition spacing={2} xs={6}>
                          <Definition.List>
                            <Definition.Item dt={t("form:label.registeredOfcAddress")} dd={registeredOfficeAddress} />
                            <Definition.Item dt={t("form:label.businessAddress")} dd={businessAddress} />
                            <Definition.Item dt={t("form:label.correspondenceAddress")} dd={correspondenceAddress} />
                          </Definition.List>
                        </Definition>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              )}
            </Grid>

            <Grid item xs={12}>
              {authorizedPerson.length > 0 && (
                <Card>
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Grid container alignItems="center">
                          <Grid item xs={6}>
                            <Typography className={classes.titleLabel}>
                              {t("typography:heading.authorizedPersonOfEmployer")}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <AuthorizedPerson authPerson={authorizedPerson} />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              )}
            </Grid>

            <Grid item xs={12}>
              {lastName && (
                <Card>
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Grid container alignItems="center">
                          <Grid item xs={6}>
                            <Typography className={classes.titleLabel}>
                              {t("typography:heading.primaryContactPerson")}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Definition spacing={2} xs={3}>
                          <Definition.List>
                            <Definition.Item dt={t("form:label.lastNameContactPerson")} dd={lastName} />
                            <Definition.Item dt={t("form:label.firstNameContactPerson")} dd={firstName} />
                            <Definition.Item dt={t("form:label.title")} dd={nameTitle} />
                            <Definition.Item dt={t("form:label.jobTitle")} dd={jobTitle} />
                            <Definition.Item dt={t("form:label.telNo")} dd={telNo} />
                            <Definition.Item dt={t("form:label.mobileNo")} dd={mobileNo} />
                            <Definition.Item dt={t("form:label.email")} dd={emailAddress} />
                            <Definition.Item dt={t("form:label.preferredCommunicationLanguage")} dd={preferredLanguagePriContact} />
                          </Definition.List>
                        </Definition>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              )}
            </Grid>

            <Grid item xs={12}>
              {lastName2 && (
                <Card>
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Grid container alignItems="center">
                          <Grid item xs={6}>
                            <Typography className={classes.titleLabel}>
                              {t("typography:heading.secondaryContactPerson")}
                            </Typography>
                          </Grid>

                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Definition spacing={2} xs={3}>
                          <Definition.List>
                            <Definition.Item dt={t("form:label.lastNameContactPerson")} dd={lastName2} />
                            <Definition.Item dt={t("form:label.firstNameContactPerson")} dd={firstName2} />
                            <Definition.Item dt={t("form:label.title")} dd={nameTitle2} />
                            <Definition.Item dt={t("form:label.jobTitle")} dd={jobTitle2} />
                            <Definition.Item dt={t("form:label.telNo")} dd={telNo2} />
                            <Definition.Item dt={t("form:label.mobileNo")} dd={mobileNo2} />
                            <Definition.Item dt={t("form:label.email")} dd={emailAddress2} />
                            <Definition.Item dt={t("form:label.preferredCommunicationLanguage")} dd={preferredLanguageContact2} />
                          </Definition.List>
                        </Definition>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              )}
            </Grid>

            <Grid item xs={12}>
              {supportingDocuments.length > 0 && (
                <Card>
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography className={classes.titleLabel}>
                          {t("typography:heading.supportingDocs")}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container justify="space-between" >
                          <Grid className={classes.supportingDocsLabel}>{t("form:label.fileName")}</Grid>
                          {/* <Grid className={classes.supportingDocsLabel}>{t("form:label.viewAction")}</Grid> */}
                        </Grid>
                        <Grid item xs={12} style={{ paddingTop: 5 }}>
                          <Divider />
                          {
                            supportingDocuments.map((item, index) => (
                              <CompanySupportingDocs item={item} key={index} classes={classes} />
                            ))
                          }
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              )}
            </Grid>

            <Grid item xs={12} align="right">
              <Button variant="outlined" onClick={() => history.push("/")}>{t("button:back")}</Button>
            </Grid>
          </Grid>
        )}
      </PageInner >
    </>
  );
};

CompanyProfile.propTypes = {
  companyRegInfo: PropTypes.arrayOf(PropTypes.shape({
    companyRegistrationInfo: PropTypes.object,
    address: PropTypes.object,
    authorizedPerson: PropTypes.arrayOf(PropTypes.object),
    primaryContactPerson: PropTypes.object,
    secondaryContactPerson: PropTypes.object,
    supportingDocuments: PropTypes.arrayOf(PropTypes.object)
  })),
  LdRegCmpnyInfoforAdmnPrtl: PropTypes.func.isRequired
}

CompanyProfile.defaultProps = {
  companyRegInfo: [{}],
  companyRegistrationInfo: {},
  address: {},
  authorizedPerson: [{}],
  primaryContactPerson: {},
  secondaryContactPerson: {},
  supportingDocuments: [{}],
  LdRegCmpnyInfoforAdmnPrtl: () => { }
}

export default CompanyProfile;
