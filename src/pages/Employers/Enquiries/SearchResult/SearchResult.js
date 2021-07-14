import { useTranslation } from "react-i18next";
import moment from "moment";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { EnquiryChips } from "@containers";
import { DataTable } from "@components/common";
import viewEnrollActive from "@assets/icons/enroll-active.PNG";
import viewEnrollInActive from "@assets/icons/enroll-inactive.PNG";
import viewRegistration from "@assets/icons/view_reg.PNG";

const SearchResult = ({
  employers,
  enquiry,
  draftEnquiry,
  setSelectedPnsnId,
  push,
  setSelectedCompanyUUID,
}) => {
  const { t } = useTranslation(["typography", "form", "button", "table"]);

  const columns = [
    { Header: t("table:thead.mpfId"), accessor: "pnsnId" },
    {
      Header: t("table:thead.employerAcctNo"),
      accessor: "branches[0].enrollments[0].employer.employerNo",
    },
    {
      Header: t("table:thead.companyNameEnglish"),
      accessor: "companyName",
    },
    {
      Header: t("table:thead.companyNameChinese"),
      accessor: "companyChineseName",
    },
    { Header: t("table:thead.registrationType"), accessor: "idType" },
    {
      Header: t("table:thead.registrationNumber"),
      accessor: "registrationNumber",
    },
    { Header: t("table:thead.branchNumber"), accessor: "branches[0].branchNo" },
    { Header: t("table:thead.typesOfCompany"), accessor: "companyType" },
    {
      Header: t("table:thead.dateOfIncorporation"),
      accessor: (row) => moment(row.incorporationDate).format("DD MMMM YYYY"),
    },
    { Header: t("table:thead.status"), accessor: "registrationStatus" },
    {
      Header: t("table:thead.custom.view"),
      headerProps: {
        style: {
          textAlign: "center",
        },
      },
      sticky: "right",
      disableSortBy: true,
      Cell: ({ row }) => {
        const { companyName, companyId, branches } = row.original;
        let enrEnabled = branches[0]?.viewEnrollmentFlagEnabled;
        return (
          <>
            <Tooltip title="View Registration" arrow>
              <img
                onClick={() =>
                  handleViewRegistration({
                    cmpnyUuid: companyId,
                    pnsnId: companyName,
                  })
                }
                src={viewRegistration}
                alt="View Registration"
                variant="contained"
                style={{
                  margin: "0 5px",
                  background: "#EF841F",
                  color: "#fff",
                  cursor: "pointer",
                }}
              />
            </Tooltip>
            <Tooltip title="View Enrollment" arrow>
              <img
                onClick={() => handleViewScheme({ pnsnId: companyName })}
                src={enrEnabled ? viewEnrollActive : viewEnrollInActive}
                alt="View Enrollment"
                variant="contained"
                style={{
                  margin: "0 5px",
                  background: "#EF841F",
                  color: "#fff",
                  cursor: enrEnabled ? "pointer" : "not-allowed",
                  pointerEvents: enrEnabled ? "all" : "none",
                }}
              />
            </Tooltip>
          </>
        );
      },
    },
  ];

  const handleViewRegistration = ({ cmpnyUuid, pnsnId }) => {
    setSelectedCompanyUUID({ cmpnyUuid });
    setSelectedPnsnId({ pnsnId });
    push("/employers/registration/information");
  };

  const handleNewSearch = () => {
    draftEnquiry({});
    push("/employers/enquiries/search");
  };

  const handleEditSearch = () => {
    push("/employers/enquiries/search");
  };

  const handleViewScheme = ({ pnsnId }) => {
    setSelectedPnsnId({ pnsnId });
    push("/employers/enrollment/schemes");
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid item xs={12}>
              <Typography variant="h6" color="primary">
                {t("typography:heading.employerRegOrEnrEnq")}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={8}>
                  <Typography variant="h6" color="primary">
                    <EnquiryChips enquiry={enquiry} />
                  </Typography>
                </Grid>
                <Grid item xs={4} align="right" display="flex">
                  <Button
                    data-testid="back-btn"
                    variant="outlined"
                    onClick={handleEditSearch}
                  >
                    {t("button:editSearch")}
                  </Button>
                  &emsp;
                  <Button
                    style={{ width: "auto" }}
                    data-testid="back-btn"
                    onClick={handleNewSearch}
                  >
                    {t("button:newSearch")}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      {/* Table */}
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid container component="dl" spacing={1} alignItems="flex-start">
              <Grid item xs={12}>
                {employers.length > 0 ? (
                  <DataTable
                    title={t("typography:heading.enquiryResult")}
                    data={employers}
                    columns={columns}
                  />
                ) : (
                  <Box display="flex">
                    <Grid item xs={12} align="center">
                      <Typography variant="h6" color="primary">
                        {t("table:tbody.custom.noDataFound")}
                      </Typography>
                    </Grid>
                  </Box>
                )}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default SearchResult;
