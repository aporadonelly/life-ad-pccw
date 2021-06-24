import React, { useMemo } from "react";
import { Page } from "@containers";
import { PageHeader, PageInner } from "@components/layout";
import { companyRoutes } from "@routes/employers";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";
import ViewBtn from "@assets/icons/view_btn.svg";
import { DataTable } from "@components/common";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Box,
  Button,
  Tooltip,
  Toolbar,
  Icon,
} from "@material-ui/core";

const EnrollmentScheme = () => {
  const classes = useStyles();
  const { t } = useTranslation(["typography", "form", "table", "button"]);
  const history = useHistory();

  const columns = useMemo(
    () => [
      { Header: t("typography:heading.trustee"), accessor: "companyName" },
      { Header: t("typography:heading.schemeName"), accessor: "schemeName" },
      { Header: t("typography:heading.status"), accessor: "status" },
      {
        Header: t("table:thead.chineseFirstName"),
        accessor: "chineseFirstName",
      },
      {
        Header: t("table:thead.custom.action"),
        sticky: "right",
        disableSortBy: true,
        Cell: ({ row }) => {
          return (
            <Box display="flex">
              <Icon>
                <img src={ViewBtn} width={100} height={100} />
              </Icon>
            </Box>
          );
        },
      },
    ],
    [t]
  );

  const rows = [
    {
      companyName: "AIA Company (Trustee) Limited",
      schemeName: "AIA MPF - Prime Value Choice",
      status: "Active",
    },
    {
      companyName: "Bank Consortium Trust Company Limited",
      schemeName: "Allianz Global",
      status: "Active",
    },
    {
      companyName: "Bank Consortium Trust Company Limited2",
      schemeName: "BCT (MPF) Induxtry Choice",
      status: "InActive",
    },
  ];

  return (
    <Page>
      <PageHeader routes={companyRoutes} />
      <PageInner>
        {/* {isLoading ? (
          <Box display="flex" justifyContent="center" mt={5}>
            {" "}
            <CircularProgress />
          </Box>
        ) : ( */}
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {/* {authPersonList && ( */}
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Grid container alignItems="center">
                      <Grid item xs={6}>
                        <Typography className={classes.titleLabel}>
                          {t("typography:heading.enrolmentScheme")}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <DataTable
                      // title={}
                      data={rows} //
                      columns={columns}
                      // stickyLabel={t("table:thead.custom.action")}
                      components={{
                        Toolbar: () => (
                          <Toolbar disableGutters>
                            <Typography variant="h6" color="primary">
                              {t(
                                "typography:heading.authorizedPersonOfEmployer"
                              )}
                            </Typography>
                          </Toolbar>
                        ),
                      }}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            {/* )} */}
          </Grid>

          <Grid item xs={12} align="right">
            <Button data-testid="back-btn" onClick={() => history.push("/")}>
              {t("button:back")}
            </Button>
          </Grid>
        </Grid>
        {/* )} */}
      </PageInner>
    </Page>
  );
};

export default EnrollmentScheme;
