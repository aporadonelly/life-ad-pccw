import { useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  CircularProgress,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { Definition } from "@components/misc";

const PayrollGroupContactPerson = (props) => {
  const {
    ldCntctPrsnInfo,
    contactPerson,
    mobile,
    telephone,
    push,
    isLoading,
  } = props;
  const {
    frstNm,
    lstNm,
    emlAddrTxt,
    jbPstnTxt,
    ttlTypCd,
    lnggTypId,
  } = contactPerson;

  const { t } = useTranslation(["typography", "form", "button", "table"]);

  // useEffect(() => {
  //   ldCntctPrsnInfo({
  //     cmpnyUuid: "7732b905-e9c1-4895-959e-fdce74c856b3",
  //   });
  // }, [ldCntctPrsnInfo]);

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
                  {t("typography:heading.payrollGroupContctPerson")}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Definition spacing={2} xs={3}>
                  <Definition.List>
                    <Definition.Item
                      dt="Title"
                      dd={ttlTypCd === "TT_MS" ? "Miss" : "Mr."}
                    />
                    <Definition.Item dt={t("form:label.lastName")} dd={lstNm} />
                    <Definition.Item
                      dt={t("form:label.firstName")}
                      dd={frstNm}
                    />{" "}
                    <Definition.Item
                      dt={t("form:label.jobTitle")}
                      dd={jbPstnTxt}
                    />
                    <Definition.Item
                      dt={t("form:label.email")}
                      dd={emlAddrTxt}
                    />{" "}
                    <Definition.Item
                      dt={t("form:label.preferredCommunicationLanguage")}
                      dd={lnggTypId === "LG_EN" ? "English" : "Chinese"}
                    />
                    <Definition.Item
                      dt={t("form:label.telNo")}
                      dd={` ${telephone?.telCntryCdNmbr} ${telephone?.phnNmbr}`}
                    />
                    <Definition.Item
                      dt={t("form:label.mobileNumber")}
                      dd={` ${mobile?.telCntryCdNmbr} ${mobile?.phnNmbr}`}
                    />
                  </Definition.List>
                </Definition>
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
                  {t("form:label.address")}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Definition spacing={2} xs={3}>
                  <Definition.List>
                    <Definition.Item
                      dt={t("form:label.correspondenceAddress")}
                      // dd={ttlTypCd === "TT_MS" ? "Miss" : "Mr."}
                    />
                  </Definition.List>
                </Definition>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Grid container component="dl" spacing={1} justify="flex-end">
          <Button
            data-testid="back-btn"
            onClick={() => push("/employers/enrollment/payroll-group")}
          >
            {t("button:backToCompanyProfile")}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

PayrollGroupContactPerson.defaultProps = {
  contactPerson: {},
  mobile: {},
  telephone: {},
};

export default PayrollGroupContactPerson;
