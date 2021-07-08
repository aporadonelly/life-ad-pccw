import { useMemo, useCallback } from "react";
import { useTranslation } from "react-i18next";
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
import ViewBtn from "@assets/icons/view_btn.svg";
import { DataTable } from "@components/common";

const EnrollmentScheme = (props) => {
  const {
    schemes,
    setSelectedEmployerUUID,
    setSelectedSchemeUUID,
    push,
  } = props;
  const { t } = useTranslation(["typography", "form", "table", "button"]);

  const handleClick = useCallback(
    ({ employerUuid, schemeUuid }) => {
      setSelectedEmployerUUID({ employerUuid });
      setSelectedSchemeUUID({ schemeUuid });
    },
    [setSelectedEmployerUUID, setSelectedSchemeUUID]
  );

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
        Cell: ({ row }) => (
          <Tooltip title="Employer Enrollment Information" arrow>
            <img
              src={ViewBtn}
              alt=""
              onClick={() =>
                handleClick({
                  employerUuid: row.original.employer.od,
                  schemeUuid: row.original.id,
                })
              }
              style={{
                cursor: "pointer",
              }}
            />
          </Tooltip>
        ),
      },
    ],
    [handleClick, t]
  );

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
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
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} align="right">
        <Button
          data-testid="back-btn"
          onClick={() => push("/employers/enquiries/result")}
        >
          {t("button:back")}
        </Button>
      </Grid>
    </Grid>
  );
};

export default EnrollmentScheme;
