import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { Page, EnquiryChips } from "@containers";
import { employersRoutes } from "@routes";
import { PageHeader, PageInner } from "@components/layout";
import TableCustomized from "@components/common/TableCustomized";
import viewEnrollActive from "@assets/icons/enroll-active.PNG";
import viewEnrollInActive from "@assets/icons/enroll-inactive.PNG";
import viewRegistration from "@assets/icons/view_reg.PNG";

const SearchResult = ({ employers, enquiry, saveEnquiry }) => {
  console.log(employers);
  const history = useHistory();
  const { t } = useTranslation(["typography", "form", "button", "table"]);

  useEffect(() => {}, [employers, enquiry]);

  const columns = [
    { label: t("table:thead.mpfId"), name: "pnsnId" },
    {
      label: t("table:thead.employerAcctNo"),
      name: "branches[0].enrollments[0].employer.employerNo",
    },
    {
      label: t("table:thead.companyNameEnglish"),
      name: "companyName",
    },
    {
      label: t("table:thead.companyNameChinese"),
      name: "companyChineseName",
    },
    { label: t("table:thead.registrationType"), name: "idType" },
    { label: t("table:thead.registrationNumber"), name: "registrationNumber" },
    { label: t("table:thead.branchNumber"), name: "branches[0].branchNo" },
    { label: t("table:thead.typesOfCompany"), name: "companyType" },
    {
      label: t("table:thead.dateOfIncorporation"),
      name: "incorporationDate",
    },
    { label: t("table:thead.status"), name: "registrationStatus" },
  ];

  const handleNewSearch = () => {
    saveEnquiry({});
    history.push("/employers/enquiry/search");
  };

  const handleEditSearch = () => {
    history.push("/employers/enquiry/search");
  };

  const viewEmployerDetails = (id) => {
    console.log(id);
  };

  return (
    <Page>
      <PageHeader routes={employersRoutes} />
      <PageInner>
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
                <Grid
                  container
                  component="dl"
                  spacing={1}
                  alignItems="flex-start"
                >
                  <Grid item xs={12}>
                    <TableCustomized
                      title={t("typography:heading.enquiryResult")}
                      rows={employers}
                      columns={columns}
                      stickyLabel={t("table:thead.custom.view")}
                      renderStickyCell={(row) => {
                        return (
                          <>
                            <Tooltip title="View Registration">
                              <img
                                src={viewRegistration}
                                alt="View Registration"
                                onClick={() =>
                                  viewEmployerDetails(row.branches)
                                }
                                variant="contained"
                                style={{
                                  margin: "0 5px",
                                  background: "#EF841F",
                                  color: "#fff",
                                  cursor: "pointer",
                                }}
                              />
                            </Tooltip>
                            <Tooltip title="View Enrollment">
                              <img
                                src={
                                  row.branches[0]?.viewEnrollmentFlagEnabled
                                    ? viewEnrollActive
                                    : viewEnrollInActive
                                }
                                alt="View Enrollment"
                                variant="contained"
                                style={{
                                  margin: "0 5px",
                                  background: "#EF841F",
                                  color: "#fff",
                                  cursor: "pointer",
                                }}
                              />
                            </Tooltip>
                          </>
                        );
                      }}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </PageInner>
    </Page>
  );
};

export default SearchResult;
