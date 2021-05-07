import React from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import moment from "moment";
import PropTypes from "prop-types";
import { Paper, Typography, makeStyles, Button, Grid } from "@material-ui/core";
import EmployeeStyles from "./styles/EmployeeStyles";
import { useHistory } from "react-router-dom";
import { get } from "lodash";

import * as intl from "../../common/labels";
import Controls from "../controls/Controls";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fdfdff",
  },
  pageHeader: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(3),
  },
  pageIcon: {
    display: "inline-block",
    padding: theme.spacing(1),
    color: "#3c44b1",
  },
  pageTitle: {
    paddingLeft: theme.spacing(0),
    "& .MuiTypography-subtitle2": {
      opacity: "0.6",
    },
    color: "#009CCD",
    fontSize: "#26px",
  },
  button: {
    background: "#6E55E2",
    color: "#fff",
    fontSize: "14px",
    opacity: 1,
    textTransform: "none",
    marginRight: "10px",
    marginRLeft: "4px",
    borderRadius: "16px",
    pointerEvents: "none",
  },
  label: {
    color: "#42526E",
    fontSize: "13px",
    fontWeight: "400",
  },
  labelValue: {
    color: "#42526E",
    fontSize: "16px",
    fontFamily: "Roboto",
    fontWeight: "500",
  },
}));

const EmployeeView = ({ employees: { employee, id } }) => {
  console.log(employee, "employee");
  const classes = { ...EmployeeStyles(), ...useStyles() };
  const history = useHistory();
  const { t } = useTranslation(["typography", "form", "button"]);

  const {
    pnsnIdTxt,
    ttlTypId,
    frstNm,
    lstNm,
    chnsFrstNm,
    chnsLstNm,
    gndrTypId,
    idTypId,
    idNoTxt,
    brthDt,
    ntnltyCntryTypCd,
    regClntPhones,
    phnNmbr,
    scndryCntctNo,
    regCntcts,
    regAddrs,
    correspondence_address,
    emlAddrTxt,
    preferred_communication_channel,
    preferred_communication_language,
    receive_paper_form_notifications_and_document,
    sttsTypId,
  } = employee;

  const goToSearch = () => {
    history.push("/employee-search-results");
  };

  return (
    <>
      <Paper className={classes.pageContent} style={{ fontFamily: "Roboto" }}>
        <Grid container>
          <Grid item xs={12}>
            <Grid
              className={classes.pageTitle}
              item
              xs={12}
              lg={12}
              sm={12}
              style={{ marginBottom: "10px" }}
            >
              <Typography
                variant="h6"
                component="div"
                style={{ fontSize: "26px" }}
              >
                {t("typography:heading.memberRegistrationView")}
              </Typography>

              <div className={classes.label} variant="contained">
                {t("form:label.mpfId")}
              </div>
              <div className={classes.labelValue}>{pnsnIdTxt}</div>
            </Grid>
            <div className={classes.subLabel} style={{ marginBottom: 40 }}>
              {t("typography:heading.personalInformation")}
            </div>
            <Grid
              container
              item
              xs={12}
              sm={6}
              lg={12}
              style={{ marginTop: "-20px", marginBottom: "10px" }}
            >
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    {t("form:label.title")}
                  </div>
                  <div className={classes.labelValue}>
                    {get(regCntcts, "[0].ttlTypId")}
                  </div>
                </div>
              </Grid>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    {t("form:label.firstName")}
                  </div>
                  <div className={classes.labelValue}> {frstNm}</div>
                </div>
              </Grid>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    {t("form:label.lastName")}
                  </div>
                  <div className={classes.labelValue}>{lstNm}</div>
                </div>
              </Grid>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    {t("form:label.chineseLastName")}
                  </div>
                  <div className={classes.labelValue}> {chnsLstNm}</div>
                </div>
              </Grid>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    {t("form:label.chineseFirstName")}
                  </div>
                  <div className={classes.labelValue}>{chnsFrstNm}</div>
                </div>
              </Grid>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    {t("form:label.gender")}
                  </div>
                  <div className={classes.labelValue}>
                    {gndrTypId === "GT_M" ? "Male" : "Female"}
                  </div>
                </div>
              </Grid>
            </Grid>
            <Grid container item xs={12} sm={6} lg={12}>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    {t("form:label.idType")}
                  </div>
                  <div className={classes.labelValue}>
                    {idTypId === "ID_HK" ? "HKID" : "Passport"}
                  </div>
                </div>
              </Grid>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    {t("form:label.idNumber")}
                  </div>
                  <div className={classes.labelValue}>{idNoTxt}</div>
                </div>
              </Grid>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    {t("form:label.birthdate")}
                  </div>
                  <div className={classes.labelValue}>
                    {moment(brthDt).format("DD MMMM YYYY")}
                  </div>
                </div>
              </Grid>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    {t("form:label.placeOfBirth")}
                  </div>
                  <div className={classes.labelValue}>{ntnltyCntryTypCd}</div>
                </div>
              </Grid>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    {t("form:label.mobileNumber")}
                  </div>
                  <div className={classes.labelValue}>
                    {Array.isArray(regClntPhones) &&
                      get(
                        regClntPhones.filter((v) => v.phnTypId === "TP_MB"),
                        "[0].phnNmbr"
                      )}
                  </div>
                </div>
              </Grid>
              <Grid item sm={2} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    {t("form:label.secondaryMobileNumber")}
                  </div>
                  <div className={classes.labelValue}>
                    {Array.isArray(regCntcts) &&
                      regCntcts.map((v) => v.scndryCntctNo)}
                  </div>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                sm={8}
                className={classes.fieldSpacing}
                style={{ marginTop: "10px", marginBottom: "10px" }}
              >
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    {t("form:label.residentialAddress")}
                  </div>
                  <div className={classes.labelValue}>
                    {Array.isArray(regAddrs) &&
                      regAddrs.map((v) =>
                        v.addrTypId === "AD_R"
                          ? v.addrRmTxt +
                            " " +
                            v.addrFlrTxt +
                            " " +
                            v.addrBldngNmTxt +
                            " " +
                            v.addrBlckTxt +
                            " " +
                            v.addrStrtTxt +
                            " " +
                            v.addrCtyTxt +
                            " " +
                            v.addrDstrctTxt +
                            " " +
                            v.cntryTypCd
                          : null
                      )}
                  </div>
                </div>
              </Grid>
              <Grid
                item
                sm={4}
                xs={12}
                className={classes.fieldSpacing}
                style={{ marginTop: "10px", marginBottom: "10px" }}
              >
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    {t("form:label.email")}
                  </div>
                  <div className={classes.labelValue}>
                    {get(regCntcts, "[0].emlAddrTxt")}
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label} variant="contained">
                    {t("form:label.correspondenceAddress")}
                  </div>
                  <div className={classes.labelValue}>
                    {Array.isArray(regAddrs) &&
                      regAddrs.map((v) =>
                        v.addrTypId === "AD_C"
                          ? v.addrRmTxt +
                            " " +
                            v.addrFlrTxt +
                            " " +
                            v.addrBldngNmTxt +
                            " " +
                            v.addrBlckTxt +
                            " " +
                            v.addrStrtTxt +
                            " " +
                            v.addrCtyTxt +
                            " " +
                            v.addrDstrctTxt +
                            " " +
                            v.cntryTypCd
                          : null
                      )}
                  </div>
                </div>
              </Grid>
            </Grid>
            <div className={classes.subLabel} style={{ marginBottom: 40 }}>
              {t("typography:heading.otherInformation")}
            </div>
            <Grid
              container
              item
              xs={12}
              sm={6}
              lg={12}
              style={{ marginTop: "-20px" }}
            >
              <Grid item sm={3} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label}>
                    {t("form:label.preferredCommunicationChannel")}
                  </div>
                  <div className={classes.labelValue}>{"SMS"}</div>
                </div>
              </Grid>
              <Grid item sm={3} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label}>
                    {t("form:label.preferredCommunicationLanguage")}
                  </div>
                  <div className={classes.labelValue}>
                    {get(regCntcts, "[0].lnggTypId") === "LG_EN" && "English"}
                  </div>
                </div>
              </Grid>
              <Grid item sm={3} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label}>
                    {t("form:label.receivedPaperFormNotificationAndDocument")}
                  </div>
                  <div className={classes.labelValue}>
                    {get(regCntcts, "[0].rcvPprFlg")}
                  </div>
                </div>
              </Grid>
              <Grid item sm={3} xs={12} className={classes.fieldSpacing}>
                <div className={classes.fieldContainer}>
                  <div className={classes.label}>{t("form:label.status")}</div>
                  <div className={classes.labelValue}>
                    {sttsTypId === "ST_NW" ? "New" : "Completed"}
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Grid
        container
        item
        xs={12}
        sm={12}
        justify="flex-end"
        className={classes.fieldSpacing}
      >
        <Button
          className={classes.cancelBtn}
          style={{
            float: "right",
            bottom: "35px",
            width: "163px",
            color: "#fff",
            top: "20px",
            left: "20px",
          }}
          onClick={() => goToSearch(id)}
          variant="contained"
        >
          {t("button:backToSearch")}
        </Button>
      </Grid>
    </>
  );
};

const mapStateToProps = (state) => ({
  employees: state.employees,
});

export default connect(mapStateToProps, {})(EmployeeView);
