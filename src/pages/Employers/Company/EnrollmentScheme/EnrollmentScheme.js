import React, { useMemo } from "react";
import { Page } from "@containers";
import { PageHeader, PageInner } from "@components/layout";
import { companyRoutes } from "@routes/employers";
import { useTranslation } from "react-i18next";
import ViewBtn from "@assets/icons/view_btn.svg";
import { DataTable } from "@components/common";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Tooltip,
  Toolbar,
} from "@material-ui/core";

const EnrollmentScheme = ({ schemes, push }) => {
  console.log(schemes);
  const { t } = useTranslation(["typography", "form", "table", "button"]);

  const columns = useMemo(
    () => [
      {
        Header: t("typography:heading.trustee"),
        accessor: "trustee.trusteeName",
      },
      { Header: t("typography:heading.schemeName"), accessor: "schemeName" },
      { Header: t("typography:heading.status"), accessor: "status" },

      {
        Header: t("table:thead.custom.view"),
        sticky: "right",
        disableSortBy: true,
        Cell: ({ row }) => {
          return (
            <Tooltip title="View Scheme" arrow>
              <img src={ViewBtn} alt="" />
            </Tooltip>
          );
        },
      },
    ],
    [t]
  );

  return (
    <Page>
      <PageHeader routes={companyRoutes} />
      <PageInner>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <DataTable
                      data={schemes}
                      columns={columns}
                      components={{
                        Toolbar: () => (
                          <Toolbar disableGutters>
                            <Typography variant="h6" color="primary">
                              {t("typography:heading.enrollmentScheme")}
                            </Typography>
                          </Toolbar>
                        ),
                      }}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} align="right">
            <Button
              data-testid="back-btn"
              onClick={() => push("/employers/enquiry/result")}
            >
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
