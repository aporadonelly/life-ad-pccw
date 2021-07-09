import { useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
  CircularProgress,
  Box,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import eSig from "@assets/icons/signature.svg";
import { useHistory } from "react-router-dom";
import { Definition } from "@components/misc";

const data = [
  { value: "CT_PCP", label: "Primary Contact Person" },
  { value: "CT_SCP", label: "Secondary Contact Person" },
];

const AuthorizedPerson = ({
  ldCmpnyRltdPrsn,
  authorizedPerson,
  residentialAddress,
  businessAddress,
  correspondenceAddress,
  isLoading,
}) => {
  const {
    idTypNm,
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

  const history = useHistory();
  const { t } = useTranslation(["typography", "form", "button", "table"]);

  useEffect(() => {
    ldCmpnyRltdPrsn({ cmpnyPrsnTypId: "CS_AP" });
  }, [ldCmpnyRltdPrsn]);

  if (Object.keys(authorizedPerson).length === 0) {
    return (
      <Box display="flex">
        <Grid item xs={12} align="center">
          <Typography variant="h6" color="primary">
            {t("table:tbody.custom.noDataFound")}
          </Typography>
        </Grid>
      </Box>
    );
  }

  return isLoading ? (
    <Box display="flex" justifyContent="center" mt={5}>
      <CircularProgress />
    </Box>
  ) : (
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
                    <Definition.Item dt={t("form:label.idType")} dd={idTypNm} />

                    <Definition.Item
                      dt={t("form:label.idNumber")}
                      dd={idNoTxt}
                    />

                    <Definition.Item
                      dt={t("form:label.dateOfBirth")}
                      dd={brthDt}
                    />

                    <Definition.Item
                      dt={t("form:label.nationality")}
                      dd={cntryTypNm}
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
                      dt={t("form:label.lastName")}
                      dd={lastName}
                    />
                    <Definition.Item
                      dt={t("form:label.firstName")}
                      dd={firstName}
                    />

                    <Definition.Item dt={t("form:label.title")} dd={ttlTypNm} />
                    <Definition.Item
                      dt={t("form:label.jobTitle")}
                      dd={jbPstnTxt}
                    />
                  </Definition.List>
                </Definition>
              </Grid>
              <Grid item xs={12}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  width="80%"
                >
                  {data.map(({ value, label }, index) => {
                    return (
                      <>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={
                                authPrsnContactList?.[0]?.cntctPrsnTypId ===
                                value
                              }
                              key={index}
                              name={label}
                              value={value}
                            />
                          }
                          label={label}
                        />
                      </>
                    );
                  })}
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      {/* Address  */}
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid container component="dl" spacing={2} alignItems="flex-start">
              <Grid item xs={12}>
                <Typography variant="h6" color="primary">
                  {t("form:label.address")}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Definition spacing={2} xs={6}>
                  <Definition.List>
                    <Definition.Item
                      dt={t("form:label.registeredOfcAddress")}
                      dd={residentialAddress}
                    />
                    <Definition.Item
                      dt={t("form:label.businessAddress")}
                      dd={businessAddress}
                    />
                    <Definition.Item
                      dt={t("form:label.correspondenceAddress")}
                      dd={correspondenceAddress}
                    />
                  </Definition.List>
                </Definition>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      {/* Signature */}
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid container component="dl" spacing={2} alignItems="flex-start">
              <Grid item xs={12}>
                <Typography variant="h6" color="primary">
                  {t("form:label.eSignature")}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Definition spacing={2} xs={6}>
                  <Definition.List>
                    <img
                      src={eSig}
                      style={{
                        width: "20em",
                      }}
                      alt="caret left icon"
                    />
                  </Definition.List>
                </Definition>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      {/* Back Button */}
      <Grid item xs={12}>
        <Grid container component="dl" spacing={1} justify="flex-end">
          <Button
            data-testid="back-btn"
            onClick={() => history.push("/employers/registration/information")}
          >
            {t("button:backToCompanyProfile")}
          </Button>
        </Grid>
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
