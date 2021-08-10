import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { Button, Grid } from "@material-ui/core";
import EmployerEnrollmentInfo from "./EmployerEnrollmentInfo";
import AuthorizedPersonList from "./AuthorizedPersonList";
import BeneficicialOwnerList from "./BeneficialOwnerList";
import DirectorList from "./DirectorsList";
import PartnerList from "./PartnersList";
import Addresses from "./Addresses";
import PrimaryContactPerson from "./PrimaryContactPerson";
import SecondaryContactPerson from "./SecondaryContactPerson";
import PayrollGroupList from "./PayrollGroupList";
import SelfCertificationList from "./SelfCertificationList";

const EmployerEnrollmentInformation = (props) => {
  const {
    match,
    employer,
    scheme,
    ldEnrCmpnyInfo,
    ldCmpnyRltdPrsn,
    getPayrollGrpList,
    getCRSFormLst,
    push,
  } = props;
  const { companyId } = employer;
  const { companyName, schmUuid } = match.params;
  const { t } = useTranslation(["button"]);

  const handleBack = () => {
    push({ routeName: "Employer Schemes", params: { companyName } });
  };

  useEffect(() => {
    const loadData = async () => {
      await ldEnrCmpnyInfo({
        cmpnyUuid: companyId,
        schmUuid,
      });
      await ldCmpnyRltdPrsn({
        cmpnyUuid: companyId,
        cmpnyPrsnTypId: "CS_AP",
      });
      await ldCmpnyRltdPrsn({
        cmpnyUuid: companyId,
        cmpnyPrsnTypId: "CS_DT",
      });
      await ldCmpnyRltdPrsn({
        cmpnyUuid: companyId,
        cmpnyPrsnTypId: "CS_PN",
      });
      await ldCmpnyRltdPrsn({
        cmpnyUuid: companyId,
        cmpnyPrsnTypId: "CS_BO",
      });
      await getPayrollGrpList({
        empUuid: scheme?.employer?.id,
      });
      await getCRSFormLst({
        cmpnyUuid: companyId,
      });
    };

    loadData();
  }, [
    companyId,
    getCRSFormLst,
    getPayrollGrpList,
    ldCmpnyRltdPrsn,
    ldEnrCmpnyInfo,
    scheme?.employer?.id,
    schmUuid,
  ]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <EmployerEnrollmentInfo />
      </Grid>
      <Grid item xs={12}>
        <Addresses />
      </Grid>
      <Grid item xs={12}>
        <AuthorizedPersonList />
      </Grid>
      <Grid item xs={12}>
        <PrimaryContactPerson />
      </Grid>
      <Grid item xs={12}>
        <SecondaryContactPerson />
      </Grid>
      <Grid item xs={12}>
        <DirectorList />
      </Grid>
      <Grid item xs={12}>
        <BeneficicialOwnerList />
      </Grid>
      <Grid item xs={12}>
        <PartnerList />
      </Grid>
      <Grid item xs={12}>
        <PayrollGroupList push={push} />
      </Grid>
      <Grid item xs={12}>
        <SelfCertificationList push={push} />
      </Grid>
      <Grid item xs={12} align="right">
        <Button onClick={handleBack}>{t("button:back")}</Button>
      </Grid>
    </Grid>
  );
};

EmployerEnrollmentInformation.propTypes = {
  ldEnrCmpnyInfo: PropTypes.func.isRequired,
  ldCmpnyRltdPrsn: PropTypes.func.isRequired,
  getPayrollGrpList: PropTypes.func.isRequired,
  getCRSFormLst: PropTypes.func.isRequired,
};

EmployerEnrollmentInformation.defaultProps = {
  employer: {},
  ldEnrCmpnyInfo: () => {},
  ldCmpnyRltdPrsn: () => {},
  getPayrollGrpList: () => {},
  getCRSFormLst: () => {},
};

export default EmployerEnrollmentInformation;
