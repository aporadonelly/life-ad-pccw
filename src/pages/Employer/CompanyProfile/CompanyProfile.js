import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { Grid, Card, CardContent, Typography, Divider, CircularProgress, Box, Button } from "@material-ui/core";
import { PageInner } from "@components/layout";
import { useTranslation } from "react-i18next";
import { Definition } from "@components/misc";
import CompanySupportingDocs from "./SupportingDocuments";
// import AuthorizedPerson from "../AuthorizedPerson/AuthorizedPerson";
import { get, concat } from "lodash";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";
import TableCustomized from "../../../components/common/TableCustomized/TableCustomized";
import moment from "moment";

function getLanguage(lg) {
  switch (lg) {
    case "LG_EN":
      return "English"
    default:
      return "Chinese";
  }
}

const CompanyProfile = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { t } = useTranslation(["typography", "form", "table", "button"]);

  const { LdRegCmpnyInfoforAdmnPrtl, getAuthorizedPersonList, companyRegInfo, authPersonList, isLoading } = props;
  const columns = [
    { label: t("table:thead.lastName"), name: "lastName" },
    { label: t("table:thead.firstName"), name: "firstName" },
    { label: t("table:thead.chineseLastName"), name: "chineseLastName" },
    { label: t("table:thead.chineseFirstName"), name: "chineseFirstName" }
  ];

  const {
    cmpnyNm,
    cmpnyChnsNm,
    incrprtnDt,
    natureOfBusiness,
    placeOfIncorporation,
    registrationNumber,
    registrationType,
    cmpnyTypId } = get(companyRegInfo, "[0]") ?? {};
  const address1 = get(companyRegInfo, "[0].addresses[0]") ?? {};
  const address2 = get(companyRegInfo, "[0].addresses[1]") ?? {};
  const address3 = get(companyRegInfo, "[0].addresses[2]") ?? {};
  const registeredOfficeAddress = concat(address1.addrRmTxt + ',', address1.addrFlrTxt, address1.addrBldngNmTxt, address1.addrBlckTxt, address1.addrStrtTxt, address1.addrCtyTxt, address1.addrDstrctTxt).join(" ");
  const businessAddress = concat(address2.addrRmTxt + ',', address2.addrFlrTxt, address2.addrBldngNmTxt, address2.addrBlckTxt, address2.addrStrtTxt, address2.addrCtyTxt, address2.addrDstrctTxt).join(" ");
  const correspondenceAddress = concat(address3.addrRmTxt + ',', address3.addrFlrTxt, address3.addrBldngNmTxt, address3.addrBlckTxt, address3.addrStrtTxt, address3.addrCtyTxt, address3.addrDstrctTxt).join(" ");

  const {
    cntctPrsnNm,
    firstName,
    ttlTypCd,
    telNo,
    emlAddrTxt,
  } = get(companyRegInfo, "[0].contacts[0") ?? {};
  const { phnNmbr } = get(companyRegInfo, "[0].clntPhones[0") ?? {};
  
  const { brnchNm, lnggTypId } = get(companyRegInfo, "[0].branches[0") ?? {};
  const { jbPstnTxt } = get(companyRegInfo, "[0].cmpnyRltdPrsns[0") ?? {};

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
  },[LdRegCmpnyInfoforAdmnPrtl, getAuthorizedPersonList]);

  return (
    <PageInner>
      {isLoading ? (
        <Box display="flex" justifyContent="center" mt={5}>
          {" "}
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {cmpnyNm && (
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
                          <Definition.Item item xs={3} sm={3} dt={t("form:label.companyNameEnglish")} dd={cmpnyNm} />
                          <Definition.Item item xs={3} dt={t("form:label.companyNameChinese")} dd={cmpnyChnsNm} />
                          <Definition.Item item xs={3} dt={t("form:label.typeOfCompany")} dd={cmpnyTypId} />
                          <Definition.Item item xs={3} dt={t("form:label.dateOfIncorporation")} dd={moment(incrprtnDt).format('YYYY MMM D').toUpperCase()} />
                          <Definition.Item item xs={3} dt={t("form:label.placeOfIncorporation")} dd={placeOfIncorporation} />
                          <Definition.Item item xs={3} dt={t("form:label.registrationType")} dd={registrationType} />
                          <Definition.Item item xs={3} dt={t("form:label.registrationNumber")} dd={registrationNumber} />
                          <Definition.Item item xs={3} dt={t("form:label.branchNumber")} dd={brnchNm} />
                          <Definition.Item item xs={3} dt={t("form:label.natureOfBusiness")} dd={natureOfBusiness} />
                          <Definition.Item item xs={3} dt={t("form:label.preferredCommunicationLanguage")} dd={getLanguage(lnggTypId)} />
                        </Definition.List>
                      </Definition>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            )}
          </Grid>

          <Grid item xs={12}>
            <Grid item xs={12}>
              <Grid container alignItems="center">
                <Grid item xs={6}>
                  <Typography className={classes.titleLabel}>
                    {t("typography:heading.address")}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
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
          </Grid>

          <Grid item xs={12}>
            {authPersonList && (
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
                      <TableCustomized rows={authPersonList} columns={columns} />
                      {/* <AuthorizedPerson authPerson={content} /> */}
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            )}
          </Grid>

          <Grid item xs={12}>
            {cntctPrsnNm && (
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
                          <Definition.Item dt={t("form:label.lastNameContactPerson")} dd={cntctPrsnNm} />
                          <Definition.Item dt={t("form:label.firstNameContactPerson")} dd={firstName} />
                          <Definition.Item dt={t("form:label.title")} dd={ttlTypCd} />
                          <Definition.Item dt={t("form:label.jobTitle")} dd={jbPstnTxt} />
                          <Definition.Item dt={t("form:label.telNo")} dd={telNo} />
                          <Definition.Item dt={t("form:label.mobileNo")} dd={phnNmbr} />
                          <Definition.Item dt={t("form:label.email")} dd={emlAddrTxt} />
                          <Definition.Item dt={t("form:label.preferredCommunicationLanguage")} dd={getLanguage(lnggTypId)} />
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
            <Button data-testid="back-btn" onClick={() => history.push("/")}>{t("button:back")}</Button>
          </Grid>
        </Grid>
      )}
    </PageInner >
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
  LdRegCmpnyInfoforAdmnPrtl: PropTypes.func.isRequired,
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
