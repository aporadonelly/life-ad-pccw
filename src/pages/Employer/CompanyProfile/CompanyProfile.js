import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import { PageInner } from "@components/layout";

const CompanyProfile = () => {
  return (
    <PageInner>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h6" color="primary">
                    Employer Joebert
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  Content
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h6" color="primary">
                    Search Result
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  Content
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PageInner>
  );
};

export default CompanyProfile;
