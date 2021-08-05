import { useEffect } from "react";
import { Grid, Button } from "@material-ui/core";
import Information from "./Information";
import ContactPersonList from "./ContactPersonList";
import GradeList from "./GradeList";
import { useTranslation } from "react-i18next";

const PayrollGroup = (props) => {
  const {
    match,
    employer,
    scheme,
    ldPayrollGrpInfo,
    ldCntctPrsnInfo,
    getGradeLst,
    push,
  } = props;
  const { companyId } = employer;
  const { payrollGroupId } = match.params;
  const { t } = useTranslation(["button"]);

  useEffect(() => {
    ldPayrollGrpInfo({
      payrollGroupId: payrollGroupId,
    });
  }, [ldPayrollGrpInfo, payrollGroupId]);

  useEffect(() => {
    ldCntctPrsnInfo({
      cmpnyUuid: companyId,
    });
  }, [companyId, ldCntctPrsnInfo]);

  useEffect(() => {
    getGradeLst({ erUuid: scheme?.employer?.id });
  }, [getGradeLst, scheme?.employer?.id]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Information />
      </Grid>
      <Grid item xs={12}>
        <ContactPersonList />
      </Grid>
      <Grid item xs={12}>
        <GradeList />
      </Grid>
      <Grid item xs={12} align="right">
        <Button
          data-testid="back-btn"
          onClick={() => push("/employers/enrollment/information")}
        >
          {t("button:back")}
        </Button>
      </Grid>
    </Grid>
  );
};

PayrollGroup.defaultProps = {
  employer: {},
  scheme: {},
};

export default PayrollGroup;
