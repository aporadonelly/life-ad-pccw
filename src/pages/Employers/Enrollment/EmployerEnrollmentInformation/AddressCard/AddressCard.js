import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { Definition } from "@components/misc";

const AddressCard = ({
  enrCompanyInfo,
  regOfficeAddress,
  businessAddress,
  corrAddress,
}) => {
  const { t } = useTranslation(["typography", "form", "table", "button"]);

  console.log("enrCompanyInfo:", enrCompanyInfo);

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} style={{ marginTop: 13 }}>
            <Typography variant="h6" color="primary">
              {t("typography:heading.address")}
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Definition spacing={2} xs={3}>
              <Definition.List>
                <Definition.Item
                  xs={6}
                  dt={t("form:label.registeredOfcAddress")}
                  dd={regOfficeAddress}
                />
                <Definition.Item
                  xs={6}
                  dt={t("form:label.businessAddress")}
                  dd={businessAddress}
                />
                <Definition.Item
                  xs={6}
                  dt={t("form:label.correspondenceAddress")}
                  dd={corrAddress}
                />
              </Definition.List>
            </Definition>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default AddressCard;
