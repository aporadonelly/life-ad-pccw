import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import {
  Button,
  Grid,
  makeStyles,
  Box,
  CircularProgress,
} from "@material-ui/core";
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
const useStyles = makeStyles((theme) => ({
  backButton: {
    backgroundColor: "white",
    color: "#EF841F",
    border: "2px solid #EF841F",
    opacity: 1,
    "&:hover": {
      border: "2px solid #FFFFFF",
      color: "#FFFFFF",
    },
  },
}));

const EmployerEnrollmentInformation = ({
  isLoading,
  draftEnquiry,
  ldEnrCmpnyInfo,
  ldCmpnyRltdPrsn,
  getPayrollGrpList,
  getCRSFormLst,
  push,
}) => {
  const classes = useStyles();
  const { t } = useTranslation(["typography", "form", "table", "button"]);
  useEffect(() => {
    ldCmpnyRltdPrsn({ cmpnyPrsnTypId: "CS_AP" });
    ldCmpnyRltdPrsn({ cmpnyPrsnTypId: "CS_DT" });
    ldCmpnyRltdPrsn({ cmpnyPrsnTypId: "CS_PN" });
    ldCmpnyRltdPrsn({ cmpnyPrsnTypId: "CS_BO" });
    ldEnrCmpnyInfo();
    getPayrollGrpList({
      empUuid: "618AFFB6-2561-4996-B79F-9DD034F16ED1",
    });
    getCRSFormLst({
      cmpnyUuid: "5E3AA11D-17C7-413E-B6CB-DDCE67154B3D",
    });
  }, [ldEnrCmpnyInfo, ldCmpnyRltdPrsn, getPayrollGrpList, getCRSFormLst]);

  const handleNewSeacrh = () => {
    draftEnquiry({});
    push("/employers/enquiries/search");
  };

  return isLoading ? (
    <Box display="flex" justifyContent="center" mt={5}>
      <CircularProgress />
    </Box>
  ) : (
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
        <Button
          className={classes.backButton}
          data-testid="back-btn"
          onClick={() => push("schemes")}
        >
          {t("button:back")}
        </Button>
        &nbsp;&nbsp;
        <Button data-testid="back-btn" onClick={handleNewSeacrh}>
          {t("button:newSearch")}
        </Button>
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
  ldEnrCmpnyInfo: () => {},
  ldCmpnyRltdPrsn: () => {},
  getPayrollGrpList: () => {},
  getCRSFormLst: () => {},
};

export default EmployerEnrollmentInformation;
