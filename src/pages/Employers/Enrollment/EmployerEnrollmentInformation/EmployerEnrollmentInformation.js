import { useEffect } from "react";
import { Grid } from "@material-ui/core";
import EmployerEnrollmentInfoCard from "./EmployerEnrollmentInfoCard";
import AuthorizedPersonList from "./AuthorizedPersonList";
import BeneficicialOwnerList from "./BeneficialOwnerList";
import DirectorList from "./DirectorsList";
import PartnerList from "./PartnersList";
import AddressCard from "./AddressCard";
import PrimaryContactPerson from "./PrimaryContactPerson";
import SecondaryContactPerson from "./SecondaryContactPerson";
import PayrollGroup from "./PayrollGroup";
import SelfCertification from "./SelfCertification";

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
        <PayrollGroup />
      </Grid>
      <Grid item xs={12}>
        <SelfCertification />
      </Grid>
    </Grid>
  );
};

export default EmployerEnrollmentInformation;
