import { useEffect, useMemo } from "react";
import { DataTable } from "@components/common";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CircularProgress,
  Box,
  Tooltip,
} from "@material-ui/core";
import { EnquiryChips } from "@containers";
import { PageInner } from "@components/layout";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import viewEnrollActive from "@assets/icons/enroll-active.PNG";
import viewEnrollInActive from "@assets/icons/enroll-inactive.PNG";
import viewRegistration from "@assets/icons/view_reg.PNG";

const SearchResult = ({
  employees,
  isLoading,
  getSpecificMember,
  saveEnquiry,
  enquiry,
  push,
}) => {
  const history = useHistory();
  const { t } = useTranslation(["typography", "form", "button", "table"]);

  const columns = useMemo(
    () => [
      { Header: t("table:thead.mpfId"), accessor: "pnsnIdTxt" },
      { Header: t("table:thead.displayName"), accessor: "fullname" },
      { Header: t("table:thead.idType"), accessor: "idTypeId" },
      { Header: t("table:thead.idNumber"), accessor: "idNoTxt" },
      {
        Header: t("table:thead.mobileNumber"),
        accessor: "clntPhones[0].phoneNumber",
      },
      { Header: t("table:thead.email"), accessor: "cntcts[0].emailAddrTxt" },
      { Header: t("table:thead.status"), accessor: "statusTypId" },
      {
        Header: t("table:thead.custom.action"),
        headerProps: {
          style: {
            textAlign: "center",
          },
        },
        sticky: "right",
        disableSortBy: true,
        Cell: ({ row }) => {
          const { pnsnIdTxt, vwEnrFlg } = row.original;
          return (
            <>
              <Tooltip title="View Registration">
                <img
                  src={viewRegistration}
                  alt="View Registration"
                  onClick={() => viewMembersDetails(pnsnIdTxt)}
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
                  src={vwEnrFlg ? viewEnrollActive : viewEnrollInActive}
                  alt="View Enrollment"
                  variant="contained"
                  style={{
                    margin: "0 5px",
                    background: "#EF841F",
                    color: "#fff",
                  }}
                />
              </Tooltip>
            </>
          );
        },
      },
    ],
    [t]
  );

  useEffect(() => {}, [employees]);

  const viewMembersDetails = (id) => {
    getSpecificMember(id);
  };

  const handleEditSearch = () => {
    push("/members/enquiry/search");
  };

  const handleNewSearch = () => {
    saveEnquiry({});
    push("/members/enquiry/search");
  };

  return (
    <>
      <PageInner>
        {isLoading ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress alignItems="center" />
          </Box>
        ) : (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Grid item xs={12}>
                    <Typography variant="h6" color="primary">
                      {t("typography:heading.memberEnquiry")}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={8}>
                        <EnquiryChips enquiry={enquiry} />
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
                      {employees.length > 0 ? (
                        <DataTable
                          title={t("typography:heading.enquiryResult")}
                          data={employees}
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
        )}
      </PageInner>
    </>
  );
};
export default SearchResult;
