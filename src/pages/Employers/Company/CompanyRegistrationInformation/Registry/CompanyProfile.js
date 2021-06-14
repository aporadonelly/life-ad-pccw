import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Divider,
  CircularProgress,
  Box,
  Button,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { Definition } from "@components/misc";
import CompanySupportingDocs from "./SupportingDocuments";
import { get, concat, compact, isEmpty } from "lodash";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";
import { TableCustomized } from "@components/common";
import moment from "moment";
import { Page } from "@containers";
import { PageHeader, PageInner } from "@components/layout";
import { companyRoutes } from "@routes/employers";

function getLanguage(lg) {
  switch (lg) {
    case "LG_EN":
      return "English";
    default:
      return "Chinese";
  }
}

const CompanyProfile = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { t } = useTranslation(["typography", "form", "table", "button"]);

  const {
    LdRegCmpnyInfoforAdmnPrtl,
    getAuthorizedPersonList,
    getContactPerson,
    companyRegInfo,
    contactPerson,
    authPersonList,
    isLoading,
  } = props;

  // console.log("comReg:", companyRegInfo)
  // console.log("auth:", authPersonList)
  // console.log("contacts:", contactPerson) //this is working and fetching

  // const { ldRegCntctPrsnProjection } = contactPerson;
  // const contactPrsn = ldRegCntctPrsnProjection ? ldRegCntctPrsnProjection.regCntcts : '';
  // const contactP = get(contactPrsn, "[0]") ?? {};
  // console.log("reg contact:", contactP)

  const columns = [
    { label: t("table:thead.lastName"), name: "lastName" },
    { label: t("table:thead.firstName"), name: "firstName" },
    { label: t("table:thead.chineseLastName"), name: "chineseLastName" },
    { label: t("table:thead.chineseFirstName"), name: "chineseFirstName" },
  ];

  const { ldRegCmpnyInfoforAdmnPrtlProjection, countryTyp } = companyRegInfo ?? {};
   console.log("projection:", ldRegCmpnyInfoforAdmnPrtlProjection)
  const { 
    cmpnyNm,
    cmpnyChnsNm,
    incrprtnDt,
    ntrTypId,
    placeOfIncorporation,
    registrationNumber,
    registrationType,
    cntryTypCd,
    cmpnyTypId,
   } = ldRegCmpnyInfoforAdmnPrtlProjection ?? {};
  
  const reOfficeAddress = get(ldRegCmpnyInfoforAdmnPrtlProjection, "addresses[0]") ?? {};
  const regBusinessAddress = get(ldRegCmpnyInfoforAdmnPrtlProjection, "addresses[1]") ?? {};
  const regCorresAddress = get(ldRegCmpnyInfoforAdmnPrtlProjection, "addresses[2]") ?? {};
  // const registeredOfficeAddress = compact([
  //   // reOfficeAddress.addrRmTxt,
  //   reOfficeAddress.addrFlrTxt,
  //   reOfficeAddress.addrBldngNmTxt,
  //   reOfficeAddress.addrBlckTxt,
  //   reOfficeAddress.addrStrtTxt,
  //   reOfficeAddress.addrCtyTxt,
  //   reOfficeAddress.addrDstrctTxt
  // ]).join(" ");
  // const businessAddress = compact([
  //   regBusinessAddress.addrRmTxt,
  //   regBusinessAddress.addrFlrTxt,
  //   regBusinessAddress.addrBldngNmTxt,
  //   regBusinessAddress.addrBlckTxt,
  //   regBusinessAddress.addrStrtTxt,
  //   regBusinessAddress.addrCtyTxt,
  //   regBusinessAddress.addrDstrctTxt
  // ]).join(" ");
  // const correspondenceAddress = compact([
  //   regCorresAddress.addrRmTxt,
  //   regCorresAddress.addrFlrTxt,
  //   regCorresAddress.addrBldngNmTxt,
  //   regCorresAddress.addrBlckTxt,
  //   regCorresAddress.addrStrtTxt,
  //   regCorresAddress.addrCtyTxt,
  //   regCorresAddress.addrDstrctTxt
  // ]).join(" ");

  const primaryContactPrsn = get(ldRegCmpnyInfoforAdmnPrtlProjection, "contacts[1]") ?? {};
  const secondaryContactPrsn = get(ldRegCmpnyInfoforAdmnPrtlProjection, "contacts[0]") ?? {};
  const { phnNmbr } = get(ldRegCmpnyInfoforAdmnPrtlProjection, "clntPhones[0]") ?? {};
  const { brnchNm, lnggTypId } = get(ldRegCmpnyInfoforAdmnPrtlProjection, "branches[0]") ?? {};
  const jobTitle1 = get(ldRegCmpnyInfoforAdmnPrtlProjection, "cmpnyRltdPrsns[0]") ?? {};
  const jobTitle2 = get(ldRegCmpnyInfoforAdmnPrtlProjection, "cmpnyRltdPrsns[1]") ?? {};

  const supportingDocuments = get(companyRegInfo, "[5].supportingDocuments") ?? [];

  useEffect(() => {
    LdRegCmpnyInfoforAdmnPrtl();
    getAuthorizedPersonList();
    // getContactPerson();
  }, [LdRegCmpnyInfoforAdmnPrtl, getAuthorizedPersonList]);

  return (
    <Page>
      <PageHeader routes={companyRoutes} />
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
                            <Definition.Item
                              item
                              xs={3}
                              sm={3}
                              dt={t("form:label.companyNameEnglish")}
                              dd={cmpnyNm}
                            />
                            <Definition.Item
                              item
                              xs={3}
                              dt={t("form:label.companyNameChinese")}
                              dd={cmpnyChnsNm}
                            />
                            <Definition.Item
                              item
                              xs={3}
                              dt={t("form:label.typeOfCompany")}
                              dd={cmpnyTypId}
                            />
                            <Definition.Item
                              item
                              xs={3}
                              dt={t("form:label.dateOfIncorporation")}
                              dd={moment(incrprtnDt)
                                .format("YYYY MMM D")
                                .toUpperCase()}
                            />
                            <Definition.Item
                              item
                              xs={3}
                              dt={t("form:label.placeOfIncorporation")}
                              dd={countryTyp.cntryTypNm}
                            />
                            <Definition.Item
                              item
                              xs={3}
                              dt={t("form:label.registrationType")}
                              dd={registrationType}
                            />
                            <Definition.Item
                              item
                              xs={3}
                              dt={t("form:label.registrationNumber")}
                              dd={registrationNumber}
                            />
                            <Definition.Item
                              item
                              xs={3}
                              dt={t("form:label.branchNumber")}
                              dd={brnchNm}
                            />
                            <Definition.Item
                              item
                              xs={3}
                              dt={t("form:label.natureOfBusiness")}
                              dd={ntrTypId}
                            />
                            <Definition.Item
                              item
                              xs={3}
                              dt={t(
                                "form:label.preferredCommunicationLanguage"
                              )}
                              dd={getLanguage(lnggTypId)}
                            />
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
                          <Definition.Item
                            dt={t("form:label.registeredOfcAddress")}
                            dd={reOfficeAddress.addrTypId === "AD_R" ?
                                `${reOfficeAddress.addrRmTxt}, 
                                 ${reOfficeAddress.addrFlrTxt}
                                 ${reOfficeAddress.addrBldngNmTxt},
                                 ${reOfficeAddress.addrBlckTxt}
                                 ${reOfficeAddress.addrStrtTxt},
                                 ${reOfficeAddress.addrCtyTxt},
                                 ${reOfficeAddress.addrDstrctTxt}` : null}
                          />
                          <Definition.Item
                            dt={t("form:label.businessAddress")}
                            dd={regBusinessAddress.addrTypId === "AD_B" ? 
                              `${regBusinessAddress.addrRmTxt}, 
                                ${regBusinessAddress.addrFlrTxt}
                                ${regBusinessAddress.addrBldngNmTxt},
                                ${regBusinessAddress.addrBlckTxt}
                                ${regBusinessAddress.addrStrtTxt},
                                ${regBusinessAddress.addrCtyTxt},
                                ${regBusinessAddress.addrDstrctTxt}`: null}
                          />
                          <Definition.Item
                            dt={t("form:label.correspondenceAddress")}
                            dd={regCorresAddress.addrTypId === "AD_C" ? 
                            `${regCorresAddress.addrRmTxt}, 
                              ${regCorresAddress.addrFlrTxt}
                              ${regCorresAddress.addrBldngNmTxt},
                              ${regCorresAddress.addrBlckTxt}
                              ${regCorresAddress.addrStrtTxt},
                              ${regCorresAddress.addrCtyTxt},
                              ${regCorresAddress.addrDstrctTxt}`: null}
                          />
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
                              {t(
                                "typography:heading.authorizedPersonOfEmployer"
                              )}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <TableCustomized
                          renderToolbar={(({ title, quickSearch, pagination }) => [])}
                          rows={authPersonList}
                          columns={columns}
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              )}
            </Grid>

            <Grid item xs={12}>
              {primaryContactPrsn.cntctPrsnTypId === "CT_PCP" && (
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
                            <Definition.Item
                              dt={t("form:label.lastNameContactPerson")}
                              dd={primaryContactPrsn.lName}
                            />
                            <Definition.Item
                              dt={t("form:label.firstNameContactPerson")}
                              dd={primaryContactPrsn.fName}
                            />
                            <Definition.Item
                              dt={t("form:label.title")}
                              dd={primaryContactPrsn.ttlTypCd}
                            />
                            <Definition.Item
                              dt={t("form:label.jobTitle")}
                              dd={jobTitle1.jbPstnTxt}
                            />
                            <Definition.Item
                              dt={t("form:label.telNo")}
                              dd={primaryContactPrsn.telNo}
                            />
                            <Definition.Item
                              dt={t("form:label.mobileNo")}
                              dd={phnNmbr}
                            />
                            <Definition.Item
                              dt={t("form:label.email")}
                              dd={primaryContactPrsn.emlAddrTxt}
                            />
                            <Definition.Item
                              dt={t(
                                "form:label.preferredCommunicationLanguage"
                              )}
                              dd={getLanguage(primaryContactPrsn.lnggTypId)}
                            />
                          </Definition.List>
                        </Definition>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              )} 
            </Grid>

            <Grid item xs={12}>
            {secondaryContactPrsn.cntctPrsnTypId === "CT_SCP" && (
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
                            <Definition.Item
                              dt={t("form:label.lastNameContactPerson")}
                              dd={secondaryContactPrsn.lName}
                            />
                            <Definition.Item
                              dt={t("form:label.firstNameContactPerson")}
                              dd={secondaryContactPrsn.fName}
                            />
                            <Definition.Item
                              dt={t("form:label.title")}
                              dd={secondaryContactPrsn.ttlTypCd}
                            />
                            <Definition.Item
                              dt={t("form:label.jobTitle")}
                              dd={jobTitle2.jbPstnTxt}
                            />
                            <Definition.Item
                              dt={t("form:label.telNo")}
                              // dd={secondaryContactPrsn.telNo2}
                            />
                            <Definition.Item
                              dt={t("form:label.mobileNo")}
                              // dd={secondaryContactPrsn.}
                            />
                            <Definition.Item
                              dt={t("form:label.email")}
                              dd={secondaryContactPrsn.emlAddrTxt}
                            />
                            <Definition.Item
                              dt={t(
                                "form:label.preferredCommunicationLanguage"
                              )}
                              dd={getLanguage(secondaryContactPrsn.lnggTypId)}
                            />
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
                        <Grid container justify="space-between">
                          <Grid className={classes.supportingDocsLabel}>
                            {t("form:label.fileName")}
                          </Grid>
                          {/* <Grid className={classes.supportingDocsLabel}>{t("form:label.viewAction")}</Grid> */}
                        </Grid>
                        <Grid item xs={12} style={{ paddingTop: 5 }}>
                          <Divider />
                          {supportingDocuments.map((item, index) => (
                            <CompanySupportingDocs
                              item={item}
                              key={index}
                              classes={classes}
                            />
                          ))}
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              )}
            </Grid>

            <Grid item xs={12} align="right">
              <Button data-testid="back-btn" onClick={() => history.push("/")}>
                {t("button:back")}
              </Button>
            </Grid>
          </Grid>
        )}
      </PageInner>
    </Page>
  );
};

CompanyProfile.propTypes = {
  companyRegInfo: PropTypes.arrayOf(
    PropTypes.shape({
      companyRegistrationInfo: PropTypes.object,
      address: PropTypes.object,
      authorizedPerson: PropTypes.arrayOf(PropTypes.object),
      primaryContactPerson: PropTypes.object,
      secondaryContactPerson: PropTypes.object,
      supportingDocuments: PropTypes.arrayOf(PropTypes.object),
    })
  ),
  LdRegCmpnyInfoforAdmnPrtl: PropTypes.func.isRequired,
};

CompanyProfile.defaultProps = {
  companyRegInfo: [{}],
  companyRegistrationInfo: {},
  address: {},
  authorizedPerson: [{}],
  primaryContactPerson: {},
  secondaryContactPerson: {},
  supportingDocuments: [{}],
  LdRegCmpnyInfoforAdmnPrtl: () => {},
};

export default CompanyProfile;
