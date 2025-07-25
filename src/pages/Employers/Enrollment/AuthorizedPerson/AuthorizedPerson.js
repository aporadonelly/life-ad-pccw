import { useEffect } from "react";
import { Grid, Card, CardContent, Typography, Button } from "@material-ui/core";
import { Definition } from "@components/misc";
import { useTranslation } from "react-i18next";

const AuthorizedPerson = (props) => {
  const {
    match,
    authorizedPerson,
    residentialAddress,
    telephone,
    mobile,
    customTypes,
    ldCmpnyRltdPrsn,
    push,
  } = props;
  const { companyName, schmUuid, clntUuid } = match.params;
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

  const { t } = useTranslation(["typography", "form", "button", "table"]);

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
  //     cmpnyPrsnTypId: "CS_AP",
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
                  {t("typography:heading.authorizedPerson")}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Definition spacing={2} xs={3}>
                  <Definition.List>
                    <Definition.Item
                      dt={t("form:label.idType")}
                      dd={customTypes[idTypId]?.cstmTypDtlTxt}
                    />
                    <Definition.Item
                      dt={t("form:label.idNumber")}
                      dd={idNoTxt}
                    />
                    <Definition.Item
                      dt={t("form:label.dateOfBirth")}
                      dd={brthDt}
                    />
                    <Definition.Item dt={t("form:label.title")} dd={ttlTypNm} />
                    <Definition.Item
                      dt={t("form:label.lastName")}
                      dd={lastName}
                    />
                    <Definition.Item
                      dt={t("form:label.firstName")}
                      dd={firstName}
                    />
                    <Definition.Item
                      dt={t("form:label.chineseLastName")}
                      dd={chineseLastName}
                    />
                    <Definition.Item
                      dt={t("form:label.chineseFirstName")}
                      dd={chineseFirstName}
                    />
                    <Definition.Item
                      dt={t("form:label.jobTitle")}
                      dd={jbPstnTxt}
                    />
                    <Definition.Item
                      dt={t("form:label.residentialAddress")}
                      dd={residentialAddress}
                    />
                    <Definition.Item
                      dt={t("form:label.nationality")}
                      dd={cntryTypNm}
                    />
                    <Definition.Item
                      dt="Telephone Number (Country Code)"
                      dd={telephone.telCntryCdNmbr}
                    />
                    <Definition.Item
                      dt={t("form:label.telNo")}
                      dd={telephone.phnNmbr}
                    />
                    <Definition.Item
                      dt="Mobile Number (Country Code)"
                      dd={mobile.telCntryCdNmbr}
                    />
                    <Definition.Item
                      dt={t("form:label.mobileNumber")}
                      dd={mobile.phnNmbr}
                    />
                    <Definition.Item
                      dt={t("form:label.preferredCommunicationLanguage")}
                      dd={authPrsnContactList?.[0]?.lnggTypNm}
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

AuthorizedPerson.defaultProps = {
  authorizedPerson: {},
  telephone: {},
  mobile: {},
};

export default AuthorizedPerson;
