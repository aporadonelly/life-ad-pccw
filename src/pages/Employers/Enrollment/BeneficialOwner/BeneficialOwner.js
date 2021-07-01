import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import { Definition } from "@components/misc";

const BeneficialOwner = (props) => {
  const { beneficialOwner, residentialAddress } = props;
  const {
    idTypId,
    idNoTxt,
    brthDt,
    lastName,
    firstName,
    chineseLastName,
    chineseFirstName,
    cntryTypNm,
  } = beneficialOwner;

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
                    <Definition.Item dt="ID Type" dd={idTypId} />
                    <Definition.Item dt="ID Number" dd={idNoTxt} />
                    <Definition.Item dt="Date of Birth" dd={brthDt} />
                    <Definition.Item dt="Last Name in English" dd={lastName} />
                    <Definition.Item
                      dt="First Name in English"
                      dd={firstName}
                    />
                    <Definition.Item
                      dt="Last Name in Chinese"
                      dd={chineseLastName}
                    />
                    <Definition.Item
                      dt="First Name in Chinese"
                      dd={chineseFirstName}
                    />
                    <Definition.Item dt="Nationality" dd={cntryTypNm} />
                    <Definition.Item
                      dt="Residential Address"
                      dd={residentialAddress}
                    />
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

BeneficialOwner.defaultProps = {
  beneficialOwner: {},
};

export default BeneficialOwner;
