import React, { useMemo } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Toolbar,
  Box,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { DataTable } from "@components/common";

const PayrollGroups = ({ authPersonList }) => {
  const { t } = useTranslation(["typography", "form", "table", "button"]);

  const payrollColumns = useMemo(
    () => [
      { Header: t("table:thead.groupId"), accessor: "groupID" },
      {
        Header: t("table:thead.contributionFrequency"),
        accessor: "ContributionFrequency",
      },
      { Header: t("table:thead.paymentMethod"), accessor: "paymentMethod" },
      {
        Header: t("table:thead.custom.action"),
        sticky: "right",
        disableSortBy: true,
        Cell: ({ row }) => {
          return (
            <Box display="flex">
              <Button
                data-testid="detail-btn"
                style={{
                  width: 90,
                  height: 32,
                  backgroundColor: "#2D9FC3",
                  borderRadius: 19,
                  opacity: 1,
                }}
              >
                Detail
              </Button>
              &nbsp;
              <Button
                data-testid="delete-btn"
                style={{
                  width: 90,
                  height: 32,
                  backgroundColor: "#2D9FC3",
                  borderRadius: 19,
                  opacity: 1,
                }}
              >
                Delete
              </Button>
            </Box>
          );
        },
      },
    ],
    [t]
  );

  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <DataTable
              data={authPersonList} //
              columns={payrollColumns}
              components={{
                Toolbar: () => (
                  <Toolbar disableGutters>
                    <Typography variant="h6" color="primary">
                      {t("typography:heading.payrollGroup")}
                    </Typography>
                  </Toolbar>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              data-testid="add-btn"
              style={{
                width: 207,
                height: 38,
                background: "#2D9FC3 0% 0% no-repeat padding-box",
                borderRadius: 19,
                opacity: 1,
              }}
              // onClick={() =>
              //   history.push("/employers/company/enrollment-scheme")
              // }
            >
              {t("button:addPayrollGroup")}
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PayrollGroups;
