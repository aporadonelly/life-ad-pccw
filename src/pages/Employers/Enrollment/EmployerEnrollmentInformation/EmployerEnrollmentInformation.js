import { useEffect } from "react";
import { Grid } from "@material-ui/core";
import EmployerEnrollmentInfoCard from "./EmployerEnrollmentInfoCard";
import AuthorizedPersonList from "./AuthorizedPersonList";
import BeneficicialOwnerList from "./BeneficialOwnerList";
import DirectorList from "./DirectorsList";
import PartnerList from "./PartnersList";
import AddressCard from "./AddressCard";

const EmployerEnrollmentInformation = ({ ldCmpnyRltdPrsn }) => {
  useEffect(() => {
    ldCmpnyRltdPrsn({ cmpnyPrsnTypId: "CS_AP" });
    ldCmpnyRltdPrsn({ cmpnyPrsnTypId: "CS_DT" });
    ldCmpnyRltdPrsn({ cmpnyPrsnTypId: "CS_PN" });
    ldCmpnyRltdPrsn({ cmpnyPrsnTypId: "CS_BO" });
  }, [ldCmpnyRltdPrsn]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <EmployerEnrollmentInfoCard />
      </Grid>
      <Grid item xs={12}>
        <AddressCard />
      </Grid>
      <Grid item xs={12}>
        <AuthorizedPersonList />
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
    </Grid>
  );
};

export default EmployerEnrollmentInformation;
