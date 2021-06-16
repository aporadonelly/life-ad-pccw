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
  Tooltip,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { Definition } from "@components/misc";
import CompanySupportingDocs from "./SupportingDocuments";
import { get, compact, sortBy } from "lodash";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";
import { TableCustomized } from "@components/common";
import moment from "moment";
import { Page } from "@containers";
import { PageHeader, PageInner } from "@components/layout";
import { companyRoutes } from "@routes/employers";
import ViewIcon from "@assets/icons/view_btn.svg";

function getLanguage(lg) {
  switch (lg) {
    case "LG_EN":
      return "English";
    default:
      return "Chinese";
  }
}

const CompanyProfile = ({
  LdRegCmpnyInfoforAdmnPrtl,
  getAuthorizedPersonList,
  companyRegInfo,
  authPersonList,
  isLoading,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const { t } = useTranslation(["typography", "form", "table", "button"]);

  useEffect(() => {
    LdRegCmpnyInfoforAdmnPrtl();
    getAuthorizedPersonList();
  }, [LdRegCmpnyInfoforAdmnPrtl, getAuthorizedPersonList]);

  const viewMembersDetails = (id) => {
    console.log(id)
  }

  const columns = [
    { label: t("table:thead.lastName"), name: "lastName" },
    { label: t("table:thead.firstName"), name: "firstName" },
    { label: t("table:thead.chineseLastName"), name: "chineseLastName" },
    { label: t("table:thead.chineseFirstName"), name: "chineseFirstName" },
  ];

  const supportingDocuments = [
    {
      id: 1,
      fileName: "Filename upload 00001.pdf",
    },
    {
      id: 2,
      fileName: "Filename upload 00002.png",
    },
    {
      id: 3,
      fileName: "Filename upload 00003.jpg",
    },
  ];

  const {
    ldRegCmpnyInfoforAdmnPrtlProjection,
    countryTyp,
    customTypCmpnyTyp,
    customTypNt,
    customTypId,
  } = companyRegInfo ?? {};
  const { cmpnyNm, cmpnyChnsNm, incrprtnDt, identification } =
    ldRegCmpnyInfoforAdmnPrtlProjection ?? {};

  const addresses =
    sortBy(
      get(ldRegCmpnyInfoforAdmnPrtlProjection, "addresses"),
      "addrTypId"
    ) ?? {};
  const regBusinessAddress = addresses[0]; // AD_B
  const regCorresAddress = addresses[1]; // AD_C
  const regOfficeAddress = addresses[2]; // AD_R

  const registeredOfficeAddress = compact([
    regOfficeAddress?.addrRmTxt,
    regOfficeAddress?.addrFlrTxt,
    regOfficeAddress?.addrBldngNmTxt,
    regOfficeAddress?.addrBlckTxt,
    regOfficeAddress?.addrStrtTxt,
    regOfficeAddress?.addrCtyTxt,
    regOfficeAddress?.addrDstrctTxt,
  ]).join(", ");
  const businessAddress = compact([
    regBusinessAddress?.addrRmTxt,
    regBusinessAddress?.addrFlrTxt,
    regBusinessAddress?.addrBldngNmTxt,
    regBusinessAddress?.addrBlckTxt,
    regBusinessAddress?.addrStrtTxt,
    regBusinessAddress?.addrCtyTxt,
    regBusinessAddress?.addrDstrctTxt,
  ]).join(" ");
  const correspondenceAddress = compact([
    regCorresAddress?.addrRmTxt,
    regCorresAddress?.addrFlrTxt,
    regCorresAddress?.addrBldngNmTxt,
    regCorresAddress?.addrBlckTxt,
    regCorresAddress?.addrStrtTxt,
    regCorresAddress?.addrCtyTxt,
    regCorresAddress?.addrDstrctTxt,
  ]).join(" ");

  const contacts =
    sortBy(
      get(ldRegCmpnyInfoforAdmnPrtlProjection, "contacts"),
      "cntctPrsnTypId"
    ) ?? {};
  const primaryContactPrsn = contacts[0];
  const customTyp1 = get(primaryContactPrsn, "customTyp") ?? {};
  const clientPhone =
    sortBy(get(primaryContactPrsn, "clntPhones"), "phnTypId") ?? {};
  const phoneNumber1 = clientPhone[0] ?? {}; // TP_MB
  const telNumber1 = clientPhone[1] ?? {}; // TP_TP

  const secondaryContactPrsn = contacts[1];
  const customTyp2 = get(secondaryContactPrsn, "customTyp") ?? {};
  const clientPhone2 =
    sortBy(get(secondaryContactPrsn, "clntPhones"), "phnTypId") ?? {};
  const phoneNumber2 = clientPhone2[0] ?? {}; // TP_MB
  const telNumber2 = clientPhone2[1] ?? {}; // TP_TP

  const { brnchNm, brnchNoTxt, lnggTypId } =
    get(ldRegCmpnyInfoforAdmnPrtlProjection, "branches[0]") ?? {};
  const jobTitle1 =
    get(ldRegCmpnyInfoforAdmnPrtlProjection, "cmpnyRltdPrsns[0]") ?? {};
  const jobTitle2 =
    get(ldRegCmpnyInfoforAdmnPrtlProjection, "cmpnyRltdPrsns[1]") ?? {};

  return (
    <Page>
      <PageHeader routes={companyRoutes}>
        <PageHeader.SubjectInfo
          subject={cmpnyNm}
          info={{
            "Employer No.": 222223,
          }}
        />
        <PageHeader.SubjectInfo subject={brnchNm ? brnchNm : ""} />
      </PageHeader>
      <PageInner>
        {isLoading ? (
          <Box display="flex" justifyContent="center" mt={5}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              {/* {cmpnyNm && ( */}
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
                            // dd={customTypCmpnyTyp.cstmTypDtlTxt}
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
                            // dd={countryTyp.cntryTypNm}
                          />
                          <Definition.Item
                            item
                            xs={3}
                            dt={t("form:label.registrationType")}
                            // dd={customTypId.cstmTypDtlTxt}
                          />
                          <Definition.Item
                            item
                            xs={3}
                            dt={t("form:label.registrationNumber")}
                            // dd={
                            //   identification.idNoTxt +
                            //   `(${identification.idChkDgtTxt})`
                            // }
                          />
                          <Definition.Item
                            item
                            xs={3}
                            dt={t("form:label.branchNumber")}
                            dd={brnchNoTxt}
                          />
                          <Definition.Item
                            item
                            xs={3}
                            dt={t("form:label.natureOfBusiness")}
                            // dd={customTypNt.cstmTypDtlTxt}
                          />
                          <Definition.Item
                            item
                            xs={3}
                            dt={t("form:label.preferredCommunicationLanguage")}
                            dd={getLanguage(lnggTypId)}
                          />
                        </Definition.List>
                      </Definition>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
              {/* )} */}
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
                      </Grid>
                    </Grid>

                    <Grid item xs={12}>
                      <Definition spacing={2} xs={6}>
                        <Definition.List>
                          <Definition.Item
                            dt={t("form:label.registeredOfcAddress")}
                            dd={registeredOfficeAddress}
                          />
                          <Definition.Item
                            dt={t("form:label.businessAddress")}
                            dd={businessAddress}
                          />
                          <Definition.Item
                            dt={t("form:label.correspondenceAddress")}
                            dd={correspondenceAddress}
                          />
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
                      <TableCustomized
                        title={t(
                          "typography:heading.authorizedPersonOfEmployer"
                        )}
                        rows={authPersonList}
                        columns={columns}
                        stickyLabel={t("table:thead.custom.view")}
                        renderToolbar={({ title }) => title}
                        renderStickyCell={(row) => {
                          return (
                            <>
                              <Tooltip title="View Registration">
                                <img
                                  src={ViewIcon}
                                  alt="View Registration"
                                  onClick={() =>
                                    viewMembersDetails(row.clntUuid)
                                  }
                                  variant="contained"
                                  style={{
                                    cursor: "pointer",
                                  }}
                                />
                              </Tooltip>
                            </>
                          );
                        }}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            {/* <Grid item xs={12}>
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
                          renderToolbar={({ title }) => title}
                          rows={authPersonList}
                          columns={columns}
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              )}
            </Grid> */}

            <Grid item xs={12}>
              {primaryContactPrsn?.cntctPrsnTypId === "CT_PCP" && (
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
                              dd={customTyp1.cstmTypDtlTxt}
                            />
                            <Definition.Item
                              dt={t("form:label.jobTitle")}
                              dd={jobTitle1.jbPstnTxt}
                            />
                            <Definition.Item
                              dt={t("form:label.telNo")}
                              dd={
                                telNumber1.phnTypId === "TP_TP"
                                  ? telNumber1.phnNmbr
                                  : ""
                              }
                            />
                            <Definition.Item
                              dt={t("form:label.mobileNo")}
                              dd={
                                phoneNumber1.phnTypId === "TP_MB"
                                  ? phoneNumber1.phnNmbr
                                  : ""
                              }
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
              {secondaryContactPrsn?.cntctPrsnTypId === "CT_SCP" && (
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
                              dd={customTyp2.cstmTypDtlTxt}
                            />
                            <Definition.Item
                              dt={t("form:label.jobTitle")}
                              dd={jobTitle2.jbPstnTxt}
                            />
                            <Definition.Item
                              dt={t("form:label.telNo")}
                              dd={
                                telNumber2.phnTypId === "TP_TP"
                                  ? telNumber2.phnNmbr
                                  : ""
                              }
                            />
                            <Definition.Item
                              dt={t("form:label.mobileNo")}
                              dd={
                                phoneNumber2.phnTypId === "TP_MB"
                                  ? phoneNumber2.phnNmbr
                                  : ""
                              }
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
              <Button
                data-testid="back-btn"
                onClick={() => history.push("/employers/enquiry")}
              >
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
  companyRegInfo: PropTypes.objectOf(
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
  companyRegInfo: {},
  companyRegistrationInfo: {},
  address: {},
  authorizedPerson: {},
  primaryContactPerson: {},
  secondaryContactPerson: {},
  supportingDocuments: [{}],
  LdRegCmpnyInfoforAdmnPrtl: () => {},
};

export default CompanyProfile;
