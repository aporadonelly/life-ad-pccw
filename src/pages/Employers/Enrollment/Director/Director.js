import { useEffect } from "react";
import { Grid, Card, CardContent, Typography, Button } from "@material-ui/core";
import { Definition } from "@components/misc";

const Director = (props) => {
  const {
    match,
    director,
    residentialAddress,
    customTypes,
    ldCmpnyRltdPrsn,
    push,
  } = props;
  const { companyName, schmUuid, clntUuid } = match.params;
  const {
    idTypId,
    idNoTxt,
    brthDt,
    lastName,
    firstName,
    chineseLastName,
    chineseFirstName,
    cntryTypNm,
  } = director;

  const handleBack = () => {
    push({
      routeName: "Employer Enrollment Information",
      params: {
        companyName,
        schmUuid,
      },
    });
  };

  // useEffect(() => {
  //   ldCmpnyRltdPrsn({
  //     cmpnyPrsnTypId: "CS_DN",
  //     cmpnyUuid,
  //     clntUuid,
  //   });
  // }, [clntUuid, cmpnyUuid, ldCmpnyRltdPrsn]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6" color="primary">
                  Particulars of Company Director
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Definition spacing={2} xs={3}>
                  <Definition.List>
                    <Definition.Item
                      dt="ID Type"
                      dd={customTypes[idTypId]?.cstmTypDtlTxt}
                    />
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
                      xs={12}
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
      <Grid item xs={12} align="right">
        <Button onClick={handleBack}>Back</Button>
      </Grid>
    </Grid>
  );
};

Director.defaultProps = {
  director: {},
};

export default Director;
