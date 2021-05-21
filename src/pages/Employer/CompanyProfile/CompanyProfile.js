import React, { useEffect } from "react";
import { Grid, Card, CardContent, Typography, makeStyles, Divider } from "@material-ui/core";
import { PageInner } from "@components/layout";
import Button from "../../../common/Button";
import { useTranslation } from "react-i18next";
import { Definition } from "@components/misc";
import CompanySupportingDocs from "./SupportingDocuments";
import AuthorizedPerson from "./AuthorizedPerson";
import { labels } from "../../../common/labels";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { get } from "lodash";
import { getCompanyRegInfoAction } from "@redux/features/company/action";
import { companyRegInfoSelector, errorSelector, isLoadingSelector } from "../../../redux/features/company/selector";

const useStyles = makeStyles((theme) => ({
  titleLabel: {
    textAlign: "left",
    font: "normal normal bold 26px/28px Roboto",
    letterSpacing: "0px",
    color: "#009CCD",
    opacity: 1,
  },
  compRegInfor: {
    marginTop: "13px"
  },
  captionAndValueContainer: {
    marginBottom: 20
  },
  subtitleCaption: {
    textAlign: "left",
    font: "normal normal normal 13px/15px Roboto",
    letterSpacing: "0px",
    color: "#42526E",
    opacity: 1,
    marginBottom: "6px"
  },
  textValue: {
    textAlign: "left",
    font: "normal normal medium 16px/31px Roboto",
    letterSpacing: "0px",
    color: "#42526E",
    opacity: 1,
  },
  supportingDocsLabel: {
    textAlign: "left",
    font: "normal normal bold 14px/16px Roboto",
    letterSpacing: "0px",
    color: "#42526E",
    opacity: 1,
  },
  supportingDocsValue: {
    textAlign: "left",
    font: "normal normal medium 14px/31px Roboto",
    letterSpacing: "0px",
    color: "#42526E",
    opacity: 1,
  }
}));

const CompanyProfile = ({ getCompanyRegInfoAction, companyRegInfo }) => {
  const classes = useStyles();
  const { t } = useTranslation(["typography", "form", "button"]);

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
    getCompanyRegInfoAction();
  }, [getCompanyRegInfoAction])

  return (
    <PageInner>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography className={[classes.titleLabel, classes.compRegInfor]}>
                    {t("typography:heading.companyRegInfo")}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Definition spacing={2} xs={3}>
                    <Definition.List>
                      <Definition.Item dt={labels.companyNameEng} dd={companyNameEng} />
                      <Definition.Item dt={labels.companyNameChi} dd={companyNameChi} />
                      <Definition.Item dt={labels.typeOfCompany} dd={typeOfCompany} />
                      <Definition.Item dt={labels.dateOfIncorporation} dd={dateOfIncorporation} />
                      <Definition.Item dt={labels.placeOfIncorporation} dd={placeOfIncorporation} />
                      <Definition.Item dt={labels.registrationType} dd={registrationType} />
                      <Definition.Item dt={labels.registrationNumber} dd={registrationNumber} />
                      <Definition.Item dt={labels.branchName} dd={branchName} />
                      <Definition.Item dt={labels.natureOfBusiness} dd={natureOfBusiness} />
                      <Definition.Item dt={labels.preferredLanguage} dd={preferredLanguage} />
                    </Definition.List>
                  </Definition>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
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
                    {/* <Grid item xs={6} align="right">
                      <Button
                        text={t("button:edit")}
                      />
                    </Grid> */}
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Definition spacing={2} xs={6}>
                    <Definition.List>
                      <Definition.Item dt={labels.registeredOfficeAddress} dd={registeredOfficeAddress} />
                      <Definition.Item dt={labels.businessAddress} dd={businessAddress} />
                      <Definition.Item dt={labels.correspondenceAddress} dd={correspondenceAddress} />
                    </Definition.List>
                  </Definition>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Grid container alignItems="center">
                    <Grid item xs={6}>
                      <Typography className={classes.titleLabel}>
                        {labels.authorizedPerson}
                      </Typography>
                    </Grid>
                    {/* <Grid item xs={6} align="right">
                      <Button
                        text={t("button:edit")}
                      />
                    </Grid> */}
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <AuthorizedPerson authPerson={authorizedPerson} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Grid container alignItems="center">
                    <Grid item xs={6}>
                      <Typography className={classes.titleLabel}>
                        {labels.primaryContactPerson}
                      </Typography>
                    </Grid>
                    {/* <Grid item xs={6} align="right">
                      <Button
                        text={t("button:edit")}
                      />
                    </Grid> */}
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Definition spacing={2} xs={3}>
                    <Definition.List>
                      <Definition.Item dt={labels.last_name} dd={lastName} />
                      <Definition.Item dt={labels.first_name} dd={firstName} />
                      <Definition.Item dt={labels.nameTitle} dd={nameTitle} />
                      <Definition.Item dt={labels.jobTitle} dd={jobTitle} />
                      <Definition.Item dt={labels.telephoneNumber} dd={telNo} />
                      <Definition.Item dt={labels.mobilePhoneNumber} dd={mobileNo} />
                      <Definition.Item dt={labels.emailAddress} dd={emailAddress} />
                      <Definition.Item dt={labels.preferredLanguage} dd={preferredLanguagePriContact} />
                    </Definition.List>
                  </Definition>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Grid container alignItems="center">
                    <Grid item xs={6}>
                      <Typography className={classes.titleLabel}>
                        {labels.secondaryContactPerson}
                      </Typography>
                    </Grid>
                    {/* <Grid item xs={6} align="right">
                      <Button
                        text={t("button:edit")}
                      />
                    </Grid> */}
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Definition spacing={2} xs={3}>
                    <Definition.List>
                      <Definition.Item dt={labels.last_name} dd={lastName2} />
                      <Definition.Item dt={labels.first_name} dd={firstName2} />
                      <Definition.Item dt={labels.nameTitle} dd={nameTitle2} />
                      <Definition.Item dt={labels.jobTitle} dd={jobTitle2} />
                      <Definition.Item dt={labels.telephoneNumber} dd={telNo2} />
                      <Definition.Item dt={labels.mobilePhoneNumber} dd={mobileNo2} />
                      <Definition.Item dt={labels.emailAddress} dd={emailAddress2} />
                      <Definition.Item dt={labels.preferredLanguage} dd={preferredLanguageContact2} />
                    </Definition.List>
                  </Definition>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography className={classes.titleLabel}>
                    {labels.supportingDocs}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid container justify="space-between" style={{ backgroundColor: '' }}>
                    <Grid className={classes.supportingDocsLabel}>{labels.fileName}</Grid>
                    <Grid className={classes.supportingDocsLabel}>{labels.view}</Grid>
                  </Grid>
                  <Grid item xs={12}>
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
        </Grid>

      </Grid>
    </PageInner >
  );
};

const mapStateToProps = state => ({
  isLoading: isLoadingSelector(state),
  error: errorSelector(state),
  companyRegInfo: companyRegInfoSelector(state),
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ getCompanyRegInfoAction }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyProfile);
