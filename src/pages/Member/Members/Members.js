import { useEffect } from "react";
import TableCustomized from "../../../components/common/TableCustomized";
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
import viewReg from "../../../assets/icons/view_reg.PNG";

const Members = ({
  employees,
  isLoading,
  getAllMembers,
  getSpecificMember,
}) => {
  const history = useHistory();
  const { t } = useTranslation(["typography", "form", "button", "table"]);

  useEffect(() => {
    getAllMembers();
  }, [getAllMembers]);

  const columns = [
    { label: t("table:thead.mpfId"), name: "pnsnIdTxt" },
    { label: t("table:thead.displayName"), name: "fullname" },
    { label: t("table:thead.idType"), name: "idTypeId" },
    { label: t("table:thead.idNumber"), name: "idNoTxt" },
    { label: t("table:thead.mobileNumber"), name: "clntPhones[0].phoneNumber" },
    { label: t("table:thead.email"), name: "cntcts[0].emailAddrTxt" },
    { label: t("table:thead.status"), name: "statusTypId" },
  ];

  const viewMembersDetails = (id) => {
    getSpecificMember(id);
  };
  return (
    <PageInner>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid item xs={12}>
                <Typography variant="h6" color="primary">
                  {t("typography:heading.memberEnquiry")}
                </Typography>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {isLoading ? (
          <Box display="flex" justifyContent="center" mt={5}>
            {" "}
            <CircularProgress />
          </Box>
        ) : (
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
                      title={t("typography:heading.searchResult")}
                      rows={employees}
                      columns={columns}
                      stickyLabel={t("table:thead.custom.action")}
                      renderStickyCell={(row) => {
                        return (
                          <>
                            <Tooltip title="View Registration">
                              <img
                                src={viewReg}
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
                                src={viewEnrollActive}
                                // src={
                                //   emp.vwEnrFlg
                                //     ? viewEnrollActive
                                //     : viewEnrollInActive
                                // }
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
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        )}

        <Grid item xs={12}>
          <Grid container component="dl" spacing={1} justify="flex-end">
            <Button
              data-testid="back-btn"
              onClick={() => history.push("/members/enquiry")}
            >
              {t("button:backToCompanyProfile")}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </PageInner>
  );
};
export default Members;
