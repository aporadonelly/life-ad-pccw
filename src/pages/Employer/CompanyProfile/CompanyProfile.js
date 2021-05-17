import { Grid, Card, CardContent, Typography } from "@material-ui/core";

const CompanyProfile = () => {
  return (
    
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
  );
};

export default CompanyProfile;
