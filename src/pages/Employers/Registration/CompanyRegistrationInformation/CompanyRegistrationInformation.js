import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Grid,
  Typography,
  CircularProgress,
  Box,
  Button,
} from "@material-ui/core";
import AuthorizedPersonList from "./AuthPersonList";
import CompanyRegInfoCard from "./CompanyRegInfoCard/CompanyRegInfoCard";
import AddressCard from "./AddressCard";
import PrimaryContactPerson from "./PrimaryContactPerson";
import SecondaryContactPerson from "./SecondaryContactPerson";
import SupportingDocsCard from "./SupportingDocsCard/SupportingDocsCard";
import PropTypes from "prop-types";
import { get, isEmpty } from "lodash";

const CompanyRegistrationInformation = (props) => {
  const {
    employer,
    companyRegInfo,
    isLoading,
    ldRegCmpnyInfoforAdmnPrtl,
    push,
  } = props;
  const { companyId } = employer;
  const {
    ldRegCmpnyInfoforAdmnPrtlProjection,
    cmpnyRltdPrsns,
    countryTyp,
    customTypCmpnyTyp,
    customTypNt,
    customTypId,
  } = companyRegInfo ?? [];

  const { brnchNoTxt, lnggTypId } =
    get(ldRegCmpnyInfoforAdmnPrtlProjection, "branches[0]") ?? {};
  const { t } = useTranslation(["typography", "form", "table", "button"]);

  useEffect(() => {
    ldRegCmpnyInfoforAdmnPrtl({ cmpnyUuid: companyId });
  }, [companyId, ldRegCmpnyInfoforAdmnPrtl]);

  const handleBack = () => {
    push({ routeName: "Employer Search Result" });
  };

  return isLoading ? (
    <Box display="flex" justifyContent="center" mt={5}>
      <CircularProgress />
    </Box>
  ) : (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        {ldRegCmpnyInfoforAdmnPrtlProjection && (
          <CompanyRegInfoCard
            ldRegCmpnyInfoforAdmnPrtlProjection={
              ldRegCmpnyInfoforAdmnPrtlProjection
            }
            customTypCmpnyTyp={customTypCmpnyTyp}
            countryTyp={countryTyp}
            customTypNt={customTypNt}
            customTypId={customTypId}
            brnchNoTxt={brnchNoTxt}
            lnggTypId={lnggTypId}
          />
        )}
      </Grid>

      <Grid item xs={12}>
        {ldRegCmpnyInfoforAdmnPrtlProjection && <AddressCard />}
      </Grid>

      {!isEmpty(cmpnyRltdPrsns) && (
        <Grid item xs={12}>
          <AuthorizedPersonList cmpnyRltdPrsns={cmpnyRltdPrsns} push={push} />
        </Grid>
      )}

      <PrimaryContactPerson />
      <SecondaryContactPerson />

      <Grid item xs={12}>
        {cmpnyRltdPrsns && <SupportingDocsCard />}
      </Grid>

      <Grid item xs={12} align="right">
        {isEmpty(companyRegInfo) ? (
          <Grid container justify="center">
            <Typography variant="h6" color="primary">
              {t("typography:emptyPage.noDataFound")}
            </Typography>
          </Grid>
        ) : (
          <Button data-testid="back-btn" onClick={handleBack}>
            {t("button:back")}
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

CompanyRegistrationInformation.propTypes = {
  companyRegInfo: PropTypes.shape({
    ldRegCmpnyInfoforAdmnPrtlProjection: PropTypes.object,
    cmpnyRltdPrsns: PropTypes.arrayOf(PropTypes.object),
    supportingDocuments: PropTypes.arrayOf(PropTypes.object),
  }),
  LdRegCmpnyInfoforAdmnPrtl: PropTypes.func.isRequired,
};

CompanyRegistrationInformation.defaultProps = {
  employer: {},
  companyRegInfo: {
    ldRegCmpnyInfoforAdmnPrtlProjection: {},
    cmpnyRltdPrsns: [{}],
    supportingDocuments: [{}],
  },
  LdRegCmpnyInfoforAdmnPrtl: () => {},
};

export default CompanyRegistrationInformation;
