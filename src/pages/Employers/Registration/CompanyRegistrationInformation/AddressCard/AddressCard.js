import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { sortBy, get, compact } from "lodash";
import { Definition } from "@components/misc";

const AddressCard = ({ ldRegCmpnyInfoforAdmnPrtlProjection }) => {
  const { t } = useTranslation(["typography", "form", "table", "button"]);

  const addresses =
    sortBy(
      get(ldRegCmpnyInfoforAdmnPrtlProjection, "addresses"),
      "addrTypId"
    ) ?? {};
  const regBusinessAddress = addresses[0]; // AD_B
  const regCorresAddress = addresses[1]; // AD_C
  const regOfficeAddress = addresses[2]; // AD_R

  const registeredOfficeAddress = compact([
    regOfficeAddress?.addrRmTxt,
    regOfficeAddress?.addrFlrTxt,
    regOfficeAddress?.addrBldngNmTxt,
    regOfficeAddress?.addrBlckTxt,
    regOfficeAddress?.addrStrtTxt,
    regOfficeAddress?.addrCtyTxt,
    regOfficeAddress?.addrDstrctTxt,
  ]).join(" ");
  const businessAddress = compact([
    regBusinessAddress?.addrRmTxt,
    regBusinessAddress?.addrFlrTxt,
    regBusinessAddress?.addrBldngNmTxt,
    regBusinessAddress?.addrBlckTxt,
    regBusinessAddress?.addrStrtTxt,
    regBusinessAddress?.addrCtyTxt,
    regBusinessAddress?.addrDstrctTxt,
  ]).join(" ");
  const correspondenceAddress = compact([
    regCorresAddress?.addrRmTxt,
    regCorresAddress?.addrFlrTxt,
    regCorresAddress?.addrBldngNmTxt,
    regCorresAddress?.addrBlckTxt,
    regCorresAddress?.addrStrtTxt,
    regCorresAddress?.addrCtyTxt,
    regCorresAddress?.addrDstrctTxt,
  ]).join(" ");

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
                  dd={registeredOfficeAddress}
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
