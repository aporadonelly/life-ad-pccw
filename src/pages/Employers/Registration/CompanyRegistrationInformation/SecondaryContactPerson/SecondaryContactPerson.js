import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { Definition } from "@components/misc";
import { isEmpty } from "lodash";

const SecondaryContactPerson = (props) => {
  const { companyRegInfo, contact, telephone, mobile } = props;
  const { t } = useTranslation(["typography", "form", "table", "button"]);

  if (!isEmpty(contact)) {
    return (
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
                    dd={contact?.lstNm}
                  />
                  <Definition.Item
                    dt={t("form:label.firstNameContactPerson")}
                    dd={contact?.frstNm}
                  />
                  <Definition.Item
                    dt={t("form:label.title")}
                    dd={contact?.titleType}
                  />
                  <Definition.Item
                    dt={t("form:label.jobTitle")}
                    dd={contact?.jbPstnTxt}
                  />
                  <Definition.Item
                    dt={t("form:label.telNo")}
                    dd={`+${companyRegInfo?.countryTyp?.telCntryCdNmbr} ${telephone?.phnNmbr}`}
                  />
                  <Definition.Item
                    dt={t("form:label.mobileNo")}
                    dd={`+${companyRegInfo?.countryTyp?.telCntryCdNmbr} ${mobile?.phnNmbr}`}
                  />
                  <Definition.Item
                    dt={t("form:label.email")}
                    dd={contact?.emlAddrTxt}
                  />
                  <Definition.Item
                    dt={t("form:label.preferredCommunicationLanguage")}
                    dd={contact?.langType}
                  />
                </Definition.List>
              </Definition>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
  return null;
};

SecondaryContactPerson.defaultProps = {
  companyRegInfo: {},
  contact: {},
  telephone: {},
  mobile: {},
};

export default SecondaryContactPerson;
