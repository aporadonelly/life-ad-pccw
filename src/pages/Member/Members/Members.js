import { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getAllMembers } from "@redux/features/members/actions";
import TableCustomized from "../../../components/common/TableCustomized";
import { employeesSelector } from "@redux/features/members/selectors";
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
import viewReg from "../../../assets/icons/view_reg.PNG";

const Members = ({ employees, isLoading, getAllMembers }) => {
  const history = useHistory();
  const { t } = useTranslation(["typography", "form", "button", "table"]);

  useEffect(() => {
    getAllMembers();
  }, [getAllMembers]);

  employees.map((employee) => console.log(employee, "employee"));
  // const rows = employees.map((index, employee) => ({
  //   id: index,
  //   key: employee.name.pnsnIdTxt,
  //   mpfId: employee.name.pnsnIdTxt,
  //   displayName: employee.name.pnsnIdTxt,
  //   // lastName: faker.name.lastName(),
  //   // email: faker.internet.email(),
  //   // mobileNumber: faker.phone.phoneNumber("916#######"),
  //   // address:
  //   //   faker.fake(
  //   //     "{{address.streetAddress}}, {{address.city}} {{address.state}} {{address.zipCode}}"
  //   //   ) +
  //   //   faker.fake(
  //   //     "{{address.streetAddress}}, {{address.city}} {{address.state}} {{address.zipCode}}"
  //   //   ) +
  //   //   faker.fake(
  //   //     "{{address.streetAddress}}, {{address.city}} {{address.state}} {{address.zipCode}}"
  //   //   ),
  // }));

  const columns = [
    { id: "pnsnIdTxt", label: t("table:thead.mpfId") },
    { id: "fullname", label: t("table:thead.displayName") },
    { id: "idTypeId", label: t("table:thead.idType") },
    { id: "idNoTxt", label: t("table:thead.idNumber") },
    { id: "phoneNumber", label: t("table:thead.mobileNumber") },
    { id: "emailAddrTxt", label: t("table:thead.email") },
    { id: "statusTypId", label: t("table:thead.status") },
    {
      id: "action",
      label: t("table:thead.custom.action"),
      disableSorting: true,
    },
  ];
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
                                // onClick={() => employeeView(emp.pnsnIdTxt)}
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

const mapStateToProps = (state) => ({
  employees: employeesSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      getAllMembers,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Members);
