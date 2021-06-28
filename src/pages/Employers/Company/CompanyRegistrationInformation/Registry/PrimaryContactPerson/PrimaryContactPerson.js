import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { sortBy } from "lodash";
import { Definition } from "@components/misc";

const PrimaryContactPerson = ({ contactDtos, countryTyp }) => {
  const { t } = useTranslation(["typography", "form", "table", "button"]);

  const contactsDto = sortBy(contactDtos, "cntctPrsnTypId") ?? {};
  const priContact = contactsDto[0]; // CT_PCP
  const { clntPhones } = priContact ?? {};
  const clPhone = sortBy(clntPhones, "phnTypId");
  const mobilePhone = clPhone[0]; // TP_MB
  const telePhone = clPhone[1]; // TP_TP

  return (
    <>
      {priContact?.cntctPrsnTypId === "CT_PCP" && (
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Grid container alignItems="center">
                  <Grid item xs={6}>
                    <Typography variant="h6" color="primary">
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
                      dd={priContact?.lstNm}
                    />
                    <Definition.Item
                      dt={t("form:label.firstNameContactPerson")}
                      dd={priContact?.frstNm}
                    />
                    <Definition.Item
                      dt={t("form:label.title")}
                      dd={priContact?.titleType}
                    />
                    <Definition.Item
                      dt={t("form:label.jobTitle")}
                      dd={priContact?.jbPstnTxt}
                    />
                    <Definition.Item
                      dt={t("form:label.telNo")}
                      dd={`+${countryTyp?.telCntryCdNmbr} ${telePhone?.phnNmbr}`}
                    />
                    <Definition.Item
                      dt={t("form:label.mobileNo")}
                      dd={`+${countryTyp?.telCntryCdNmbr} ${mobilePhone.phnNmbr}`}
                    />
                    <Definition.Item
                      dt={t("form:label.email")}
                      dd={priContact?.emlAddrTxt}
                    />
                    <Definition.Item
                      dt={t("form:label.preferredCommunicationLanguage")}
                      dd={priContact?.langType}
                    />
                  </Definition.List>
                </Definition>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default PrimaryContactPerson;
