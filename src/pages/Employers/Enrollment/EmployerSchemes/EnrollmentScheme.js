import { useMemo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Grid, Card, CardContent, Button, Tooltip } from "@material-ui/core";
import { DataTable } from "@components/common";
import ViewBtn from "@assets/icons/view_btn.svg";

const EnrollmentScheme = (props) => {
  const { match, schemes, push } = props;
  const { companyName } = match.params;
  const { t } = useTranslation(["typography", "form", "table", "button"]);

  const handleClick = useCallback(
    ({ schmUuid }) => {
      push({
        routeName: "Employer Enrollment Information",
        params: {
          companyName,
          schmUuid,
        },
      });
    },
    [companyName, push]
  );

  const handleBack = () => {
    push({ routeName: "Employer Search Result" });
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
        Cell: ({ row }) => (
          <Tooltip title="Employer Enrollment Information" arrow>
            <img
              src={ViewBtn}
              alt=""
              onClick={() => handleClick({ schmUuid: row.original.id })}
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
            <DataTable
              data={schemes}
              columns={columns}
              title={t("typography:heading.enrollmentScheme")}
              disableQuickSearch
              disablePagination
              disableShowEntries
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} align="right">
        <Button onClick={handleBack}>{t("button:back")}</Button>
      </Grid>
    </Grid>
  );
};

export default EnrollmentScheme;
