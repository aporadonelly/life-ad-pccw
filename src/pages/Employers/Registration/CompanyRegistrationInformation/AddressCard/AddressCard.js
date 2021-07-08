import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { Definition } from "@components/misc";

const AddressCard = ({
  registeredAddress,
  businessAddress,
  correspondenceAddress,
}) => {
  const { t } = useTranslation(["typography", "form", "table", "button"]);

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container alignItems="center">
              <Grid item xs={6}>
                <Typography variant="h6" color="primary">
                  {t("typography:heading.address")}
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Definition spacing={2} xs={6}>
              <Definition.List>
                <Definition.Item
                  dt={t("form:label.registeredOfcAddress")}
                  dd={registeredAddress}
                />
                <Definition.Item
                  dt={t("form:label.businessAddress")}
                  dd={businessAddress}
                />
                <Definition.Item
                  dt={t("form:label.correspondenceAddress")}
                  dd={correspondenceAddress}
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
