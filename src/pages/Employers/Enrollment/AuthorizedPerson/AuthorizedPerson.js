import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import { Definition } from "@components/misc";

const AuthorizedPerson = (props) => {
  const { authorizedPerson, residentialAddress, telephone, mobile } = props;
  const {
    idTypId,
    idNoTxt,
    brthDt,
    ttlTypNm,
    lastName,
    firstName,
    chineseLastName,
    chineseFirstName,
    jbPstnTxt,
    cntryTypNm,
    authPrsnContactList,
  } = authorizedPerson;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6" color="primary">
                  Authorized Person
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Definition spacing={2} xs={3}>
                  <Definition.List>
                    <Definition.Item dt="ID Type" dd={idTypId} />
                    <Definition.Item dt="ID Number" dd={idNoTxt} />
                    <Definition.Item dt="Date of Birth" dd={brthDt} />
                    <Definition.Item dt="Title" dd={ttlTypNm} />
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
                    <Definition.Item dt="Job Title" dd={jbPstnTxt} />
                    <Definition.Item
                      dt="Residential Address"
                      dd={residentialAddress}
                    />
                    <Definition.Item dt="Nationality" dd={cntryTypNm} />
                    <Definition.Item
                      dt="Telephone Number (Country Code)"
                      dd={telephone.telCntryCdNmbr}
                    />
                    <Definition.Item
                      dt="Telephone Number (phone number)"
                      dd={telephone.phnNmbr}
                    />
                    <Definition.Item
                      dt="Mobile Number (Country Code)"
                      dd={mobile.telCntryCdNmbr}
                    />
                    <Definition.Item
                      dt="Mobile Number (phone number)"
                      dd={mobile.phnNmbr}
                    />
                    <Definition.Item
                      dt="Preferred Communication Language"
                      dd={authPrsnContactList?.[0]?.lnggTypNm}
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

AuthorizedPerson.defaultProps = {
  authorizedPerson: {},
  telephone: {},
  mobile: {},
};

export default AuthorizedPerson;
