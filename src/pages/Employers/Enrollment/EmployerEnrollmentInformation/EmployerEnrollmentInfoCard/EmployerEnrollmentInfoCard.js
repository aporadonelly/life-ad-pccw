import React from "react";
import { useTranslation } from "react-i18next";
import moment from "moment";
import { get } from "lodash";
import { Definition } from "@components/misc";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";

const EmployerEnrollmentInfoCard = ({ enrCompanyInfo, customTypes }) => {
  const { t } = useTranslation(["typography", "form", "table", "button"]);
  const {
    cmpnyBrnchInfo,
    cntryTypNm,
    customTypNatureTyp,
    customTypCompnyTyp,
    idNo,
    employerInfo,
    entityAgent,
  } = enrCompanyInfo ?? {};
  const { company, lnggTypId } = get(cmpnyBrnchInfo, "[0]") ?? {};
  const { agent } = get(entityAgent, "[0]") ?? {};
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} style={{ marginTop: 13 }}>
            <Typography variant="h6" color="primary">
              {t("typography:heading.employerEnrollmentInfo")}
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} style={{ marginLeft: 10 }}>
            <Definition spacing={2} xs={3}>
              <Definition.List>
                <Definition.Item
                  xs={6}
                  sm={6}
                  dt={t("form:label.empfID")}
                  // dd={"45-2485"}
                />
              </Definition.List>
            </Definition>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} style={{ marginLeft: 10 }}>
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
                  dd={moment(company?.incrprtnDt)
                    .format("YYYY MMM D")
                    .toUpperCase()}
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
                  dd={lnggTypId === "LG_EN" ? "English" : "Chinese"}
                />
              </Definition.List>
            </Definition>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} style={{ marginLeft: 10, marginTop: 20 }}>
            <Definition spacing={2} xs={3}>
              <Definition.List>
                <Definition.Item
                  xs={3}
                  dt={t("form:label.directMarketing")}
                  // dd={natureOfBusiness}correspondenceAddress
                />

                <Definition.Item
                  xs={3}
                  dt={t("form:label.noOfEmployeeJoinTheScheme")}
                  dd={employerInfo?.mbrCnt}
                />

                <Definition.Item
                  xs={3}
                  dt={t("form:label.referenceNoOfMpfOrServiceAgent")}
                  dd={`${employerInfo?.mpfaRefNoTxt} / ${agent?.agntNm}`}
                />
              </Definition.List>
            </Definition>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default EmployerEnrollmentInfoCard;
