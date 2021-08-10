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
  const { companyName, schmUuid, payrollGroupId } = match.params;
  const { t } = useTranslation(["button"]);

  const handleBack = () => {
    push({
      routeName: "Employer Enrollment Information",
      params: {
        companyName,
        schmUuid,
      },
    });
  };
  useEffect(() => {
    const loadData = async () => {
      await ldPayrollGrpInfo({
        payrollGroupId: payrollGroupId,
      });
      await ldCntctPrsnInfo({
        cmpnyUuid: companyId,
      });
      await getGradeLst({
        erUuid: scheme?.employer?.id,
      });
    };

    loadData();
  }, [ldPayrollGrpInfo, ldCntctPrsnInfo, getGradeLst, scheme?.employer?.id]);

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
        <Button data-testid="back-btn" onClick={handleBack}>
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
