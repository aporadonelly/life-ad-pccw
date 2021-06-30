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
  Box,
} from "@material-ui/core";

const EnrollmentScheme = ({ employer, schemes, push }) => {
  console.log(employer);
  console.log(schemes);
  const { t } = useTranslation(["typography", "form", "table", "button"]);

  const columns = useMemo(
    () => [
      {
        Header: t("typography:heading.trustee"),
        accessor: "trustee.trusteeName",
      },
      { Header: t("typography:heading.schemeName"), accessor: "schemeName" },
      { Header: t("typography:heading.status"), accessor: "employer.status" },

      {
        Header: t("table:thead.custom.view"),
        sticky: "right",
        disableSortBy: true,
        Cell: ({ row }) => {
          console.log(row);
          return (
            <Tooltip title="Employer Enrollment Information" arrow>
              <img
                src={ViewBtn}
                alt=""
                onClick={() => console.log("hey")}
                style={{
                  cursor: "pointer",
                }}
              />
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
                    {schemes.length > 0 ? (
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
