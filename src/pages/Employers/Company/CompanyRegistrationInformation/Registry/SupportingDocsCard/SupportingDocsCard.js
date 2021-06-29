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

  const supportingDocuments = useMemo(
    () => [
      {
        id: 1,
        fileName: "Filename upload 00001.pdf",
      },
      {
        id: 2,
        fileName: "Filename upload 00002.png",
      },
      {
        id: 3,
        fileName: "Filename upload 00003.jpg",
      },
    ],
    []
  );

  return (
    <>
      {supportingDocuments.length > 0 && (
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6" color="primary">
                  {t("typography:heading.supportingDocs")}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid container justify="space-between">
                  <Grid className={classes.supportingDocsLabel}>
                    {t("form:label.fileName")}
                  </Grid>
                  {/* <Grid className={classes.supportingDocsLabel}>{t("form:label.viewAction")}</Grid> */}
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
            </Grid>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default SupportingDocsCard;
