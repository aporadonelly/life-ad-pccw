import React, { useEffect, useMemo } from "react";
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
    console.log(id);
  };

  const columns = useMemo(
    () => [
      { label: t("table:thead.lastName"), name: "lstName" },
      { label: t("table:thead.firstName"), name: "frstName" },
      { label: t("table:thead.chineseLastName"), name: "chnsLstName" },
      { label: t("table:thead.chineseFirstName"), name: "chnsFrstName" },
    ],
    [t]
  );

  const supportingDocuments = useMemo(
    () => [
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
    ],
    []
  );

  const {
    ldRegCmpnyInfoforAdmnPrtlProjection,
    cmpnyRltdPrsns,
    contactDtos,
    countryTyp,
    customTypCmpnyTyp,
    customTypNt,
    customTypId,
  } = companyRegInfo ?? [];
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
  ]).join(" ");
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

  const contactsDto = sortBy(contactDtos, "cntctPrsnTypId") ?? {};
  const priContact = contactsDto[0]; // CT_PCP
  const secContact = contactsDto[1]; // CT_SCP

  const { clntPhones } = priContact ?? {};
  const clPhone = sortBy(clntPhones, "phnTypId");
  const mobilePhone = clPhone[0]; // TP_MB
  const telePhone = clPhone[1]; // TP_TP

  const clPhone2 = sortBy(secContact?.clntPhones, "phnTypId");
  const mobilePhone2 = clPhone2[0]; // TP_MB
  const telePhone2 = clPhone2[1]; // TP_TP

  const { brnchNm, brnchNoTxt, lnggTypId } =
    get(ldRegCmpnyInfoforAdmnPrtlProjection, "branches[0]") ?? {};

  // const jobTitle1 =
  //   get(ldRegCmpnyInfoforAdmnPrtlProjection, "cmpnyRltdPrsns[0]") ?? {};
  // const jobTitle2 =
  //   get(ldRegCmpnyInfoforAdmnPrtlProjection, "cmpnyRltdPrsns[1]") ?? {};
  // console.log("data:", companyRegInfo)
  // return null;
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
                      <Typography variant="h5" color="primary">
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
                            dd={customTypCmpnyTyp?.cstmTypDtlTxt}
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
                            dd={countryTyp?.cntryTypNm}
                          />
                          <Definition.Item
                            item
                            xs={3}
                            dt={t("form:label.registrationType")}
                            dd={customTypId?.cstmTypDtlTxt}
                          />
                          <Definition.Item
                            item
                            xs={3}
                            dt={t("form:label.registrationNumber")}
                            dd={`${identification.idNoTxt}(${identification.idChkDgtTxt})`}
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
                            dd={customTypNt.cstmTypDtlTxt}
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
                        rows={cmpnyRltdPrsns}
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

            <Grid item xs={12}>
              {priContact?.cntctPrsnTypId === "CT_PCP" && (
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
                              // dd={primaryContactPrsn.lName}
                            />
                            <Definition.Item
                              dt={t("form:label.firstNameContactPerson")}
                              // dd={primaryContactPrsn.fName}
                            />
                            <Definition.Item
                              dt={t("form:label.title")}
                              dd={priContact?.titleType}
                            />
                            <Definition.Item
                              dt={t("form:label.jobTitle")}
                              // dd={jobTitle1.jbPstnTxt}
                            />
                            <Definition.Item
                              dt={t("form:label.telNo")}
                              dd={
                                countryTyp?.cntryTypCd === "PH"
                                  ? `(${countryTyp?.telCntryCdNmbr}) ${telePhone?.phnNmbr}`
                                  : telePhone?.phnNmbr
                              }
                            />
                            <Definition.Item
                              dt={t("form:label.mobileNo")}
                              dd={
                                countryTyp?.cntryTypCd === "PH"
                                  ? `(${countryTyp?.telCntryCdNmbr}) ${mobilePhone.phnNmbr}`
                                  : mobilePhone.phnNmbr
                              }
                            />
                            <Definition.Item
                              dt={t("form:label.email")}
                              dd={priContact?.emlAddrTxt}
                            />
                            <Definition.Item
                              dt={t(
                                "form:label.preferredCommunicationLanguage"
                              )}
                              dd={getLanguage(priContact?.lnggTypId)}
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
              {secContact?.cntctPrsnTypId === "CT_SCP" && (
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
                              // dd={secondaryContactPrsn.lName}
                            />
                            <Definition.Item
                              dt={t("form:label.firstNameContactPerson")}
                              // dd={secondaryContactPrsn.fName}
                            />
                            <Definition.Item
                              dt={t("form:label.title")}
                              dd={secContact?.titleType}
                            />
                            <Definition.Item
                              dt={t("form:label.jobTitle")}
                              // dd={secContact?.jobTitle}
                            />
                            <Definition.Item
                              dt={t("form:label.telNo")}
                              dd={
                                countryTyp?.cntryTypCd === "PH"
                                  ? `(${countryTyp?.telCntryCdNmbr}) ${telePhone2?.phnNmbr}`
                                  : telePhone2?.phnNmbr
                              }
                            />
                            <Definition.Item
                              dt={t("form:label.mobileNo")}
                              dd={
                                countryTyp?.cntryTypCd === "PH"
                                  ? `(${countryTyp?.telCntryCdNmbr}) ${mobilePhone2?.phnNmbr}`
                                  : mobilePhone?.phnNmbr
                              }
                            />
                            <Definition.Item
                              dt={t("form:label.email")}
                              dd={secContact?.emlAddrTxt}
                            />
                            <Definition.Item
                              dt={t(
                                "form:label.preferredCommunicationLanguage"
                              )}
                              dd={getLanguage(secContact?.lnggTypId)}
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
      cmpnyRltdPrsns: PropTypes.array.isRequired,
      ldRegCmpnyInfoforAdmnPrtlProjection: PropTypes.object,
      authorizedPerson: PropTypes.arrayOf(PropTypes.object),
      contactDtos: PropTypes.arrayOf(PropTypes.object),
      supportingDocuments: PropTypes.arrayOf(PropTypes.object),
    })
  ),
  LdRegCmpnyInfoforAdmnPrtl: PropTypes.func.isRequired,
};

CompanyProfile.defaultProps = {
  companyRegInfo: {},
  companyRegistrationInfo: {},
  address: {},
  cmpnyRltdPrsns: [],
  contactDtos: [{}],
  authorizedPerson: {},
  supportingDocuments: [{}],
  LdRegCmpnyInfoforAdmnPrtl: () => {},
};

export default CompanyProfile;
