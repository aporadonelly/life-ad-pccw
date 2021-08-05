import React from "react";
import PropTypes from "prop-types";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { Definition } from "@components/misc";

const Addresses = ({ enrCompanyInfo }) => {
  const { t } = useTranslation(["typography", "form", "table", "button"]);
  const { regFullAddrList, bsnnsFullAddrList, corrFullAddrList } =
    enrCompanyInfo ?? [];
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
                  dd={regFullAddrList}
                />
                <Definition.Item
                  xs={6}
                  dt={t("form:label.businessAddress")}
                  dd={bsnnsFullAddrList}
                />
                <Definition.Item
                  xs={6}
                  dt={t("form:label.correspondenceAddress")}
                  dd={corrFullAddrList}
                />
              </Definition.List>
            </Definition>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

Addresses.propTypes = {
  enrCompanyInfo: PropTypes.shape({
    regFullAddrList: PropTypes.array,
    bsnnsFullAddrList: PropTypes.array,
    corrFullAddrList: PropTypes.array,
  }),
};

Addresses.defaultProps = {
  enrCompanyInfo: {},
};

export default Addresses;
