/* eslint-disable default-case */
import { useEffect } from "react";
import TableCustomized from "@components/common/TableCustomized";
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
import { PageInner } from "@components/layout";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import viewEnrollActive from "../../../assets/icons/enroll-active.PNG";
import viewEnrollInActive from "../../../assets/icons/enroll-inactive.PNG";
import viewRegistration from "../../../assets/icons/view_reg.PNG";
import MembersEnquiry from "../Members/MembersEnquiry";

const Members = ({ employees, isLoading, getSpecificMember }) => {
  const history = useHistory();
  const { t } = useTranslation(["typography", "form", "button", "table"]);

  const columns = [
    { label: t("table:thead.mpfId"), name: "pnsnIdTxt" },
    { label: t("table:thead.displayName"), name: "fullname" },
    { label: t("table:thead.idType"), name: "idTypeId" },
    { label: t("table:thead.idNumber"), name: "idNoTxt" },
    { label: t("table:thead.mobileNumber"), name: "clntPhones[0].phoneNumber" },
    { label: t("table:thead.email"), name: "cntcts[0].emailAddrTxt" },
    { label: t("table:thead.status"), name: "statusTypId" },
  ];

  useEffect(() => {}, [employees]);

  const viewMembersDetails = (id) => {
    getSpecificMember(id);
  };

  const handleEditSearch = () => {
    history.push("/members/enquiry");
  };

  return (
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
                      <MembersEnquiry />
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
                        onClick={() => history.push("/members/enquiry")}
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
                      <TableCustomized
                        title={t("typography:heading.searchResult")}
                        rows={employees}
                        columns={columns}
                        stickyLabel={t("table:thead.custom.action")}
                        renderStickyCell={(row) => {
                          return (
                            <>
                              <Tooltip title="View Registration">
                                <img
                                  src={viewRegistration}
                                  alt="View Registration"
                                  onClick={() =>
                                    viewMembersDetails(row.pnsnIdTxt)
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
                                    row.vwEnrFlg
                                      ? viewEnrollActive
                                      : viewEnrollInActive
                                  }
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
                        }}
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
  );
};
export default Members;
