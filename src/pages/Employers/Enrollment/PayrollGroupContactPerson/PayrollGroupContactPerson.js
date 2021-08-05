import { useEffect } from "react";
import { compact, values, pick } from "lodash";
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

const PayrollGroupContactPerson = ({
  ldCntctPrsnInfo,
  setSelectedContactPersonUUID,
  contactPerson,
  mobile,
  telephone,
  push,
  isLoading,
}) => {
  const {
    frstNm,
    lstNm,
    emlAddrTxt,
    jbPstnTxt,
    ttlTypCd,
    lnggTypId,
    crrspndnceAddr,
  } = contactPerson ?? [];

  const { t } = useTranslation(["typography", "form", "button", "table"]);

  useEffect(() => {
    ldCntctPrsnInfo({
      cmpnyUuid: "022c6b33-cd86-4ceb-af61-cb02372fbcaa",
    });
    setSelectedContactPersonUUID({
      cntctPrsnUuid: "bdf483f1-b938-4067-a27c-9ef9db14a9f1",
    });
  }, [ldCntctPrsnInfo, setSelectedContactPersonUUID]);

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
                <Definition spacing={2} xs={6}>
                  <Definition.List>
                    <Definition.Item
                      dt={t("form:label.correspondenceAddress")}
                      dd={compact(
                        values(
                          pick(crrspndnceAddr, [
                            "addrRmTxt",
                            "addrFlrTxt",
                            "addrBldngNmTxt",
                            "addrBlckTxt",
                            "addrStrtTxt",
                            "addrCtyTxt",
                            "addrDstrctTxt",
                          ])
                        )
                      ).join(" ")}
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
