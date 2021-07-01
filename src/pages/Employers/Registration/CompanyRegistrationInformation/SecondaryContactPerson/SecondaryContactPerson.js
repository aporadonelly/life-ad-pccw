import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { sortBy } from "lodash";
import { Definition } from "@components/misc";

const SecondaryContactPerson = ({ contactDtos, countryTyp }) => {
  const { t } = useTranslation(["typography", "form", "table", "button"]);

  const contactsDto = sortBy(contactDtos, "cntctPrsnTypId") ?? {};
  const secContact = contactsDto[1]; // CT_SCP
  const clPhone2 = sortBy(secContact?.clntPhones, "phnTypId");
  const mobilePhone2 = clPhone2[0]; // TP_MB
  const telePhone2 = clPhone2[1]; // TP_TP

  return (
    <>
      {secContact?.cntctPrsnTypId === "CT_SCP" && (
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Grid container alignItems="center">
                  <Grid item xs={6}>
                    <Typography variant="h6" color="primary">
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
                      dd={secContact?.lstNm}
                    />
                    <Definition.Item
                      dt={t("form:label.firstNameContactPerson")}
                      dd={secContact?.frstNm}
                    />
                    <Definition.Item
                      dt={t("form:label.title")}
                      dd={secContact?.titleType}
                    />
                    <Definition.Item
                      dt={t("form:label.jobTitle")}
                      dd={secContact?.jbPstnTxt}
                    />
                    <Definition.Item
                      dt={t("form:label.telNo")}
                      dd={`+${countryTyp?.telCntryCdNmbr} ${telePhone2?.phnNmbr}`}
                    />
                    <Definition.Item
                      dt={t("form:label.mobileNo")}
                      dd={`+${countryTyp?.telCntryCdNmbr} ${mobilePhone2?.phnNmbr}`}
                    />
                    <Definition.Item
                      dt={t("form:label.email")}
                      dd={secContact?.emlAddrTxt}
                    />
                    <Definition.Item
                      dt={t("form:label.preferredCommunicationLanguage")}
                      dd={secContact?.langType}
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

export default SecondaryContactPerson;
