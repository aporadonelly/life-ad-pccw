import React from "react";
import { useTranslation } from "react-i18next";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import { Definition } from "@components/misc";
import { get, sortBy } from "lodash";

const SecondaryContactPerson = ({ enrCompanyInfo }) => {
  const { t } = useTranslation(["typography", "form", "table", "button"]);
  const { secondaryContactPerson, companyPhoneList } = enrCompanyInfo ?? {};

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} style={{ marginTop: 13 }}>
            <Typography variant="h6" color="primary">
              {t("typography:heading.secondaryContactPerson")}
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
                  dd={secondaryContactPerson?.title}
                />
                <Definition.Item
                  xs={3}
                  dt={t("form:label.lastNameContactPerson")}
                  dd={secondaryContactPerson?.lstNm}
                />
                <Definition.Item
                  xs={3}
                  dt={t("form:label.firstNameContactPerson")}
                  dd={secondaryContactPerson?.frstNm}
                />

                <Definition.Item
                  xs={3}
                  dt={t("form:label.jobTitle")}
                  dd={secondaryContactPerson?.jbPstnTxt}
                />
                <Definition.Item
                  dt={t("form:label.telNo")}
                  // dd={`${telePhone?.telCntryCdNmbr} ${telePhone?.phnNmbr}`}
                />
                <Definition.Item
                  dt={t("form:label.mobileNo")}
                  // dd={`${mobilePhone?.telCntryCdNmbr} ${mobilePhone?.phnNmbr}`}
                />
                <Definition.Item
                  dt={t("form:label.email")}
                  dd={secondaryContactPerson?.emlAddrTxt}
                />
                <Definition.Item
                  dt={t("form:label.preferredCommunicationLanguage")}
                  dd={
                    secondaryContactPerson?.lnggTypId === "LG_EN"
                      ? "English"
                      : "Chinese"
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

export default SecondaryContactPerson;
