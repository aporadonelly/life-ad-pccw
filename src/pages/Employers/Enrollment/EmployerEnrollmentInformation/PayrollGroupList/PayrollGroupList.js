import React, { useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Toolbar,
  Tooltip,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { DataTable } from "@components/common";
import ViewIcon from "@assets/icons/view_btn.svg";

const PayrollGroupList = (props) => {
  const { match, payrollGroupList, push } = props;
  const { companyName, schmUuid } = match.params;
  const { t } = useTranslation(["typography", "table"]);

  const viewDetails = useCallback(
    ({ pyrollGrpUuid }) => {
      push({
        routeName: "Payroll Group",
        params: {
          companyName,
          schmUuid,
          payrollGroupId: pyrollGrpUuid,
        },
      });
    },
    [push]
  );

  const payrollColumns = useMemo(
    () => [
      { Header: t("table:thead.groupId"), accessor: "pyrollGrpName" },
      {
        Header: t("table:thead.contributionFrequency"),
        accessor: "cstmTypFrqncyTypTxt",
      },
      { Header: t("table:thead.paymentMethod"), accessor: "pymntMthdTyp" },
      {
        Header: t("table:thead.custom.action"),
        HeaderProps: {
          style: {
            width: 100,
            textAlign: "center",
            backgroundColor: "red",
          },
        },
        sticky: "right",
        disableSortBy: true,
        Cell: ({ row }) => {
          const { pyrollGrpUuid } = row?.original;
          return (
            <Tooltip title="View Details" placement="top" arrow>
              <img
                src={ViewIcon}
                width={40}
                height={40}
                alt="View Details"
                onClick={() => viewDetails({ pyrollGrpUuid })}
                variant="contained"
                style={{
                  cursor: "pointer",
                }}
              />
            </Tooltip>
          );
        },
      },
    ],
    [t, viewDetails]
  );
  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <DataTable
              data={payrollGroupList}
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
        </Grid>
      </CardContent>
    </Card>
  );
};

PayrollGroupList.propTypes = {
  payrollGroupList: PropTypes.array,
};

PayrollGroupList.defaultProps = {
  payrollGroupList: [],
};

export default PayrollGroupList;
