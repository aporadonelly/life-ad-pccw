import React, { useMemo } from "react";
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

const EnrollmentScheme = ({
  employer,
  schemes,
  push,
  setSelectedCompanyUUID,
  setSelectedSchemeUUID,
}) => {
  const { t } = useTranslation(["typography", "form", "table", "button"]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleViewEmployerInfo = ({ companyUuid, schemeUuid }) => {
    // eslint-disable-next-line no-unused-expressions
    setSelectedCompanyUUID({ companyUuid });
    setSelectedSchemeUUID({ schemeUuid });
  };

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
          return (
            <Tooltip title="Employer Enrollment Information" arrow>
              <img
                src={ViewBtn}
                alt=""
                onClick={() =>
                  handleViewEmployerInfo({
                    companyUuid: employer.companyId,
                    schemeUuid: row.original.id,
                  })
                }
                style={{
                  cursor: "pointer",
                }}
              />
            </Tooltip>
          );
        },
      },
    ],
    // eslint-disable-next-line no-use-before-define
    [employer.companyId, handleViewEmployerInfo, t]
  );

  return (
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
  );
};

export default EnrollmentScheme;
