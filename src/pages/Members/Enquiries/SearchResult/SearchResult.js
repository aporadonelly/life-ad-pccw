import { useMemo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Tooltip,
} from "@material-ui/core";
import { EnquiryChips } from "@containers";
import { DataTable } from "@components/common";
import viewEnrollActive from "@assets/icons/enroll-active.PNG";
import viewEnrollInActive from "@assets/icons/enroll-inactive.PNG";
import viewRegistration from "@assets/icons/view_reg.PNG";
import useStyles from "./styles";

const SearchResult = (props) => {
  const { employees, enquiry, draftEnquiry, push } = props;
  const { t } = useTranslation(["typography", "form", "button", "table"]);
  const classes = useStyles();

  // const viewMembersDetails = useCallback(
  //   (id) => {
  //     getSpecificMember(id);
  //   },
  //   [getSpecificMember]
  // );

  const viewMembersDetails = () => {};

  const handleEditSearch = () => {
    push({ routeName: "Member Search Enquiry" });
  };

  const handleNewSearch = () => {
    draftEnquiry({});
    push({ routeName: "Member Search Enquiry" });
  };

  const handleViewRegistration = useCallback(
    ({ pnsnIdTxt }) => {
      push({
        routeName: "Member Registration Information",
        params: {
          pnsnIdTxt,
        },
      });
    },
    [push]
  );

  const handleViewAccountTypes = ({ pnsnIdTxt }) => {
    push({
      routeName: "Member Account Types",
      params: {
        pnsnIdTxt,
      },
    });
  };

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
                  onClick={() => handleViewRegistration({ pnsnIdTxt })}
                  variant="contained"
                  className={classes.viewRegBtn}
                />
              </Tooltip>
              <Tooltip title="View Enrollment">
                <img
                  src={vwEnrFlg ? viewEnrollActive : viewEnrollInActive}
                  alt="View Enrollment"
                  variant="contained"
                  className={classes.viewEnrBtn}
                  onClick={() => handleViewAccountTypes({ pnsnIdTxt })}
                />
              </Tooltip>
            </>
          );
        },
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t, viewMembersDetails]
  );

  return (
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
            <Grid container component="dl" spacing={1} alignItems="flex-start">
              <Grid item xs={12}>
                <DataTable
                  title={t("typography:heading.enquiryResult")}
                  data={employees}
                  columns={columns}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
export default SearchResult;
