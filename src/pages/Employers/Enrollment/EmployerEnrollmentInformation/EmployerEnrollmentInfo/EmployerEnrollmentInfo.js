import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import moment from "moment";
import { get, isEmpty } from "lodash";
import { Definition } from "@components/misc";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";

const EmployerEnrollmentInfo = ({ enrCompanyInfo, customTypes }) => {
  const { t } = useTranslation(["typography", "form", "table", "button"]);
  const {
    cmpnyBrnchInfo,
    cntryTypNm,
    customTypNatureTyp,
    customTypCompnyTyp,
    idNo,
    employerInfo,
    contactInfo,
    entityAgent,
  } = enrCompanyInfo ?? {};
  const { company, lnggTypId } = get(cmpnyBrnchInfo, "[0]") ?? [];
  const { agent } = get(entityAgent, "[0]") ?? [];

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6" color="primary">
              {t("typography:heading.employerEnrollmentInfo")}
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Definition spacing={2} xs={3}>
              <Definition.List>
                <Definition.Item
                  xs={6}
                  sm={6}
                  dt={t("form:label.empfID")}
                  dd={company?.pnsnIdTxt}
                />
              </Definition.List>
            </Definition>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Definition spacing={2} xs={3}>
              <Definition.List>
                <Definition.Item
                  xs={6}
                  sm={6}
                  dt={t("form:label.companyNameEnglish")}
                  dd={company?.cmpnyNm}
                />
                <Definition.Item
                  xs={6}
                  dt={t("form:label.companyNameChinese")}
                  dd={company?.cmpnyChnsNm}
                />
                <Definition.Item
                  xs={3}
                  dt={t("form:label.typeOfCompany")}
                  dd={customTypCompnyTyp?.cstmTypDtlTxt}
                />
                <Definition.Item
                  xs={3}
                  dt={t("form:label.dateOfIncorporation")}
                  dd={
                    company &&
                    moment(company?.incrprtnDt)
                      .format("YYYY/MM/D")
                      .toUpperCase()
                  }
                />
                <Definition.Item
                  xs={6}
                  dt={t("form:label.placeOfIncorporation")}
                  dd={cntryTypNm?.cntryTypNm}
                />
                <Definition.Item
                  xs={3}
                  dt={t("form:label.registrationType")}
                  dd={customTypes?.[idNo?.idTypId]?.cstmTypDtlTxt}
                />
                <Definition.Item
                  xs={3}
                  dt={t("form:label.registrationNo")}
                  dd={idNo?.idNoTxt}
                />

                <Definition.Item
                  xs={3}
                  dt={t("form:label.natureOfBusiness")}
                  dd={customTypNatureTyp?.cstmTypDtlTxt}
                />

                <Definition.Item
                  xs={3}
                  dt={t("form:label.preferredCommunicationLanguage")}
                  dd={
                    lnggTypId && (lnggTypId === "LG_EN" ? "English" : "Chinese")
                  }
                />
              </Definition.List>
            </Definition>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Definition spacing={2} xs={3}>
              <Definition.List>
                <Definition.Item
                  xs={3}
                  dt={t("form:label.directMarketing")}
                  dd={
                    contactInfo &&
                    (contactInfo?.[0]?.drctMrktFlg ? "Yes" : "No")
                  }
                />

                <Definition.Item
                  xs={3}
                  dt={t("form:label.noOfEmployeeJoinTheScheme")}
                  dd={employerInfo?.mbrCnt}
                />

                <Definition.Item
                  xs={3}
                  dt={t("form:label.referenceNoOfMpfOrServiceAgent")}
                  dd={
                    employerInfo &&
                    `${employerInfo?.mpfaRefNoTxt} / ${agent?.agntNm}`
                  }
                />
              </Definition.List>
            </Definition>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

EmployerEnrollmentInfo.propTypes = {
  enrCompanyInfo: PropTypes.shape({
    cmpnyBrnchInfo: PropTypes.array,
    cntryTypNm: PropTypes.object,
    customTypNatureTyp: PropTypes.object,
    customTypCompnyTyp: PropTypes.object,
    idNo: PropTypes.object,
    employerInfo: PropTypes.object,
    entityAgent: PropTypes.array,
  }),
};

EmployerEnrollmentInfo.defaultProps = {
  enrCompanyInfo: {},
};

export default EmployerEnrollmentInfo;
