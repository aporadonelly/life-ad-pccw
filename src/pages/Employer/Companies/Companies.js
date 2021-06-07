import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button, Card, CardContent, Grid, Typography } from "@material-ui/core";
import { PageInner } from "@components/layout";

const Companies = ({ employers }) => {
  const { t } = useTranslation(["typography", "form", "button", "table"]);
  useEffect(() => {}, [employers]);
  return (
    <PageInner>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid item xs={12}>
                <Typography variant="h6" color="primary">
                  Employer Registration or Enrollment Enquiries
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={8}>
                    <Typography variant="h6" color="primary">
                      <Button> This is where all params go!</Button>
                    </Typography>
                  </Grid>
                  <Grid item xs={4} align="right" display="flex">
                    <Button data-testid="back-btn" variant="outlined">
                      {t("button:editSearch")}
                    </Button>
                    &emsp;
                    <Button style={{ width: "auto" }} data-testid="back-btn">
                      {t("button:newSearch")}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Table */}
        <Grid item xs={12}>
          <Card>
            <CardContent></CardContent>
          </Card>
        </Grid>
      </Grid>
    </PageInner>
  );
};

export default Companies;
