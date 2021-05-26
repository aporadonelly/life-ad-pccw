import { Grid, Card, CardContent, Typography, Button } from "@material-ui/core";
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
                    Employer Registration or Enrollment Enquiries
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Button>Reg. Type: Registry of Trade Unions</Button>
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
                    Enquiries Result
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  Table goes here...
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
