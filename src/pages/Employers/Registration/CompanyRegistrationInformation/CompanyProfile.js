import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Typography,
  CircularProgress,
  Box,
  Button,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { get, isEmpty } from "lodash";
import { useHistory } from "react-router-dom";
import AuthorizedPersonList from "./AuthPersonList/AuthPersonList";
import CompanyRegInfoCard from "./CompanyRegInfoCard/CompanyRegInfoCard";
import AddressCard from "./AddressCard/AddressCard";
import PrimaryContactPerson from "./PrimaryContactPerson/PrimaryContactPerson";
import SecondaryContactPerson from "./SecondaryContactPerson/SecondaryContactPerson";
import SupportingDocsCard from "./SupportingDocsCard/SupportingDocsCard";

const CompanyProfile = ({
  ldRegCmpnyInfoforAdmnPrtl,
  companyRegInfo,
  isLoading,
  setSelectedClientUUID,
  push,
}) => {
  const history = useHistory();
  const { t } = useTranslation(["typography", "form", "table", "button"]);

  useEffect(() => {
    ldRegCmpnyInfoforAdmnPrtl();
  }, [ldRegCmpnyInfoforAdmnPrtl]);

  const {
    ldRegCmpnyInfoforAdmnPrtlProjection,
    cmpnyRltdPrsns,
    contactDtos,
    countryTyp,
    customTypCmpnyTyp,
    customTypNt,
    customTypId,
  } = companyRegInfo ?? [];

  const { cmpnyNm, id } = ldRegCmpnyInfoforAdmnPrtlProjection ?? {};
  const { brnchNm, brnchNoTxt, lnggTypId } =
    get(ldRegCmpnyInfoforAdmnPrtlProjection, "branches[0]") ?? {};
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
        {ldRegCmpnyInfoforAdmnPrtlProjection && (
          <AddressCard
            ldRegCmpnyInfoforAdmnPrtlProjection={
              ldRegCmpnyInfoforAdmnPrtlProjection
            }
          />
        )}
      </Grid>
      <Grid item xs={12}>
        {cmpnyRltdPrsns && (
          <AuthorizedPersonList
            cmpnyRltdPrsns={cmpnyRltdPrsns}
            companyId={id}
            setSelectedClientUUID={setSelectedClientUUID}
            push={push}
          />
        )}
      </Grid>

      <Grid item xs={12}>
        <PrimaryContactPerson
          contactDtos={contactDtos}
          countryTyp={countryTyp}
        />
      </Grid>

      <Grid item xs={12}>
        <SecondaryContactPerson
          contactDtos={contactDtos}
          countryTyp={countryTyp}
        />
      </Grid>

      <Grid item xs={12}>
        {cmpnyRltdPrsns && <SupportingDocsCard />}
      </Grid>

      <Grid item xs={12} align="right">
        {isEmpty(companyRegInfo) ? (
          <Grid container justify="center">
            <Typography variant="h6" color="primary">
              No Data Found.
            </Typography>
          </Grid>
        ) : (
          <Button
            data-testid="back-btn"
            onClick={() => history.push("/employers/enquiry/result")}
          >
            {t("button:back")}
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

CompanyProfile.propTypes = {
  companyRegInfo: PropTypes.shape({
    ldRegCmpnyInfoforAdmnPrtlProjection: PropTypes.object,
    cmpnyRltdPrsns: PropTypes.arrayOf(PropTypes.object),
    contactDtos: PropTypes.arrayOf(PropTypes.object),
    supportingDocuments: PropTypes.arrayOf(PropTypes.object),
  }),
  LdRegCmpnyInfoforAdmnPrtl: PropTypes.func.isRequired,
};

CompanyProfile.defaultProps = {
  companyRegInfo: {
    ldRegCmpnyInfoforAdmnPrtlProjection: {},
    cmpnyRltdPrsns: [{}],
    contactDtos: [{}],
    supportingDocuments: [{}],
  },
  LdRegCmpnyInfoforAdmnPrtl: () => {},
};

export default CompanyProfile;
