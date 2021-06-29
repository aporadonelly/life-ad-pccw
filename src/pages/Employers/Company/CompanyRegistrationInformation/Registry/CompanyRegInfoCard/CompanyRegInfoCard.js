import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { Definition } from "@components/misc";
import moment from "moment";

function getLanguage(lg) {
  switch (lg) {
    case "LG_EN":
      return "English";
    default:
      return "Chinese";
  }
}

const CompanyRegInfoCard = ({
  ldRegCmpnyInfoforAdmnPrtlProjection,
  countryTyp,
  customTypCmpnyTyp,
  customTypNt,
  customTypId,
  brnchNoTxt,
  lnggTypId,
}) => {
  const { t } = useTranslation(["typography", "form", "table", "button"]);

  const { cmpnyNm, cmpnyChnsNm, incrprtnDt, identification } =
    ldRegCmpnyInfoforAdmnPrtlProjection ?? {};

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} style={{ marginTop: 13 }}>
            <Typography variant="h6" color="primary">
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
                  dd={moment(incrprtnDt).format("YYYY MMM D").toUpperCase()}
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
                  dd={`${identification?.idNoTxt}(${identification?.idChkDgtTxt})`}
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
                  dd={customTypNt?.cstmTypDtlTxt}
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
  );
};

export default CompanyRegInfoCard;
