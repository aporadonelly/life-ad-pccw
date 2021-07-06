import React from "react";
import { useTranslation } from "react-i18next";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import { Definition } from "@components/misc";
import { get, sortBy } from "lodash";

const PrimaryContactPerson = ({ contactPersons }) => {
  const { t } = useTranslation(["typography", "form", "table", "button"]);

  const { companyContactList, companyPhoneList } =
    get(contactPersons, "[0]") ?? [];
  const primaryContact = sortBy(companyContactList, "cntctPrsnTypNm") ?? [];
  const { ttlTypNm, cntctPrsnNm, lnggTypNm, emlAddrTxt } =
    get(primaryContact, "[0]") ?? [];

  const phoneList = sortBy(companyPhoneList, "phnTypId") ?? [];
  const mobilePhone = get(phoneList, "[0]") ?? {};
  const telePhone = get(phoneList, "[2]") ?? {};

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} style={{ marginTop: 13 }}>
            <Typography variant="h6" color="primary">
              {t("typography:heading.primaryContactPerson")}
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Definition spacing={2} xs={3}>
              <Definition.List>
                <Definition.Item
                  xs={3}
                  dt={t("form:label.title")}
                  dd={ttlTypNm}
                />
                <Definition.Item
                  xs={3}
                  dt={t("form:label.lastNameContactPerson")}
                  dd={cntctPrsnNm}
                />
                <Definition.Item
                  xs={3}
                  dt={t("form:label.firstNameContactPerson")}
                  // dd={natureOfBusiness}
                />

                <Definition.Item
                  xs={3}
                  dt={t("form:label.jobTitle")}
                  // dd={natureOfBusiness}
                />
                <Definition.Item
                  dt={t("form:label.telNo")}
                  dd={`${telePhone?.telCntryCdNmbr} ${telePhone?.phnNmbr}`}
                />
                <Definition.Item
                  dt={t("form:label.mobileNo")}
                  dd={`${mobilePhone?.telCntryCdNmbr} ${mobilePhone?.phnNmbr}`}
                />
                <Definition.Item dt={t("form:label.email")} dd={emlAddrTxt} />
                <Definition.Item
                  dt={t("form:label.preferredCommunicationLanguage")}
                  dd={lnggTypNm}
                />
              </Definition.List>
            </Definition>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PrimaryContactPerson;
