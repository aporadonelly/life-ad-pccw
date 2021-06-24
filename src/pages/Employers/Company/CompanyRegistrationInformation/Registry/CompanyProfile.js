import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Grid, CircularProgress, Box, Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { get } from "lodash";
import { useHistory } from "react-router-dom";
import { Page } from "@containers";
import { PageHeader, PageInner } from "@components/layout";
import { companyRoutes } from "@routes/employers";
import AuthorizedPersonList from "./AuthPersonList/AuthPersonList";
import CompanyRegInfoCard from "./CompanyRegInfoCard/CompanyRegInfoCard";
import AddressCard from "./AddressCard/AddressCard";
import PrimaryContactPerson from "./PrimaryContactPerson/PrimaryContactPerson";
import SecondaryContactPerson from "./SecondaryContactPerson/SecondaryContactPerson";
import SupportingDocsCard from "./SupportingDocsCard/SupportingDocsCard";

const CompanyProfile = ({
  LdRegCmpnyInfoforAdmnPrtl,
  getAuthorizedPersonList,
  companyRegInfo,
  isLoading,
}) => {
  const history = useHistory();
  const { t } = useTranslation(["typography", "form", "table", "button"]);

  useEffect(() => {
    LdRegCmpnyInfoforAdmnPrtl();
    getAuthorizedPersonList();
  }, [LdRegCmpnyInfoforAdmnPrtl, getAuthorizedPersonList]);

  const {
    ldRegCmpnyInfoforAdmnPrtlProjection,
    cmpnyRltdPrsns,
    contactDtos,
    countryTyp,
    customTypCmpnyTyp,
    customTypNt,
    customTypId,
  } = companyRegInfo ?? [];
  const { cmpnyNm } = ldRegCmpnyInfoforAdmnPrtlProjection ?? {};

  const { brnchNm, brnchNoTxt, lnggTypId } =
    get(ldRegCmpnyInfoforAdmnPrtlProjection, "branches[0]") ?? {};

  return (
    <Page>
      <PageHeader routes={companyRoutes}>
        <PageHeader.SubjectInfo
          subject={cmpnyNm}
          // info={{
          //   "Employer No.": 222223,
          // }}
        />
        <PageHeader.SubjectInfo subject={brnchNm ? brnchNm : ""} />
      </PageHeader>
      <PageInner>
        {isLoading ? (
          <Box display="flex" justifyContent="center" mt={5}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={3}>
            <Grid item xs={12}>
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
            </Grid>

            <Grid item xs={12}>
              <AddressCard
                ldRegCmpnyInfoforAdmnPrtlProjection={
                  ldRegCmpnyInfoforAdmnPrtlProjection
                }
              />
            </Grid>

            <Grid item xs={12}>
              <AuthorizedPersonList cmpnyRltdPrsns={cmpnyRltdPrsns} />
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
              <SupportingDocsCard />
            </Grid>

            <Grid item xs={12} align="right">
              <Button
                data-testid="back-btn"
                onClick={() => history.push("/employers/enquiry")}
              >
                {t("button:back")}
              </Button>
            </Grid>
          </Grid>
        )}
      </PageInner>
    </Page>
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
