import React, { useMemo } from "react";
import {
  Grid,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import useStyles from "./styles";
import CompanySupportingDocs from "./SupportingDocuments";

const SupportingDocsCard = ({ contactDtos, countryTyp }) => {
  const { t } = useTranslation(["typography", "form", "table", "button"]);
  const classes = useStyles();

  const supportingDocuments = useMemo(() => [], []);

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6" color="primary">
              {t("typography:heading.supportingDocs")}
            </Typography>
          </Grid>
          {supportingDocuments.length > 0 ? (
            <Grid item xs={12}>
              <Grid container justify="space-between">
                <Grid className={classes.supportingDocsLabel}>
                  {t("form:label.fileName")}
                </Grid>
              </Grid>
              <Grid item xs={12} style={{ paddingTop: 5 }}>
                <Divider />
                {supportingDocuments.map((item, index) => (
                  <CompanySupportingDocs
                    item={item}
                    key={index}
                    classes={classes}
                  />
                ))}
              </Grid>
            </Grid>
          ) : (
            <Grid container justify="center" style={{ marginTop: 20 }}>
              <Typography variant="h6" color="primary">
                No data Found
              </Typography>
            </Grid>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SupportingDocsCard;
