import { Grid, Card, CardContent, Typography } from "@material-ui/core";

const Grade = () => (
  <Grid container spacing={3}>
    <Grid item xs={12}>
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6" color="primary">
                Grade
              </Typography>
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}>
              <Typography variant="h6" color="primary">
                Contribution Type
              </Typography>
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
                Grade
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
);

export default Grade;
