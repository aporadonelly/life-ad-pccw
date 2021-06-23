import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import { Definition } from "@components/misc";

const BeneficialOwner = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6" color="primary">
                  Beneficial Owner
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Definition spacing={2} xs={3}>
                  <Definition.List>
                    <Definition.Item dt="ID Type" dd="" />
                    <Definition.Item dt="ID Number" dd="" />
                    <Definition.Item dt="Date of Birth" dd="" />
                    <Definition.Item dt="Last Name in English" dd="" />
                    <Definition.Item dt="First Name in English" dd="" />
                    <Definition.Item dt="Last Name in Chinese" dd="" />
                    <Definition.Item dt="First Name in Chinese" dd="" />
                    <Definition.Item dt="Nationality" dd="" />
                    <Definition.Item dt="Residential Address" dd="" />
                  </Definition.List>
                </Definition>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default BeneficialOwner;
