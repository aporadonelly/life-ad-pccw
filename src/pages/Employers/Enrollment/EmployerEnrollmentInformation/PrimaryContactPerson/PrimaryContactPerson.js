import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import { Definition } from "@components/misc";
import { isEmpty } from "lodash";

const PrimaryContactPerson = (props) => {
  const { contactPerson, telephoneNo, mobileNo } = props;
  const { t } = useTranslation(["typography", "form", "table", "button"]);

  if (isEmpty(contactPerson)) {
    return null;
  }

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
                  dd={contactPerson?.ttlTypNm}
                />
                <Definition.Item
                  xs={3}
                  dt={t("form:label.lastNameContactPerson")}
                  dd={contactPerson?.lstNm}
                />
                <Definition.Item
                  xs={3}
                  dt={t("form:label.firstNameContactPerson")}
                  dd={contactPerson?.frstNm}
                />

                <Definition.Item
                  xs={3}
                  dt={t("form:label.jobTitle")}
                  dd={contactPerson?.jbPstnTxt}
                />
                <Definition.Item
                  dt={t("form:label.telNo")}
                  dd={
                    !isEmpty(telephoneNo) &&
                    `+${telephoneNo?.telCntryCdNmbr} ${telephoneNo?.phnNmbr}`
                  }
                />
                <Definition.Item
                  dt={t("form:label.mobileNo")}
                  dd={
                    !isEmpty(mobileNo) &&
                    `+${mobileNo?.telCntryCdNmbr} ${mobileNo?.phnNmbr}`
                  }
                />
                <Definition.Item
                  dt={t("form:label.email")}
                  dd={contactPerson?.emlAddrTxt}
                />
                <Definition.Item
                  dt={t("form:label.preferredCommunicationLanguage")}
                  dd={
                    !isEmpty(contactPerson) &&
                    (contactPerson?.lnggTypId === "LG_EN"
                      ? "English"
                      : "Chinese")
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

PrimaryContactPerson.propTypes = {
  contactPerson: PropTypes.object,
  telephoneNo: PropTypes.object,
  mobileNo: PropTypes.object,
};

PrimaryContactPerson.defaultProps = {
  contactPerson: {},
  telephoneNo: {},
  mobileNo: {},
};

export default PrimaryContactPerson;
