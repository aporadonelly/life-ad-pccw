import React, { useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Tooltip,
  Toolbar,
} from "@material-ui/core";
import { DataTable } from "@components/common";
import ViewIcon from "@assets/icons/view_btn.svg";
import { useTranslation } from "react-i18next";

const AuthorizedPersonList = (props) => {
  const { match, authorizedPersons, push } = props;
  const { companyName } = match.params;
  const { t } = useTranslation(["typography", "table"]);

  const handleClick = useCallback(
    ({ clntUuid }) => {
      push({
        routeName: "Employer Enrollment Authorized Person",
        params: {
          companyName,
          clntUuid,
        },
      });
    },
    [companyName, push]
  );

  const columns = useMemo(
    () => [
      { Header: t("table:thead.lastName"), accessor: "lastName" },
      { Header: t("table:thead.firstName"), accessor: "firstName" },
      { Header: t("table:thead.chineseLastName"), accessor: "chineseLastName" },
      {
        Header: t("table:thead.chineseFirstName"),
        accessor: "chineseFirstName",
      },
      {
        Header: t("table:thead.custom.action"),
        sticky: "right",
        disableSortBy: true,
        Cell: ({ row }) => {
          const { clntUuid } = row.original;
          return (
            <Tooltip title="View Details" placement="top" arrow>
              <img
                src={ViewIcon}
                width={40}
                height={40}
                alt="View Details"
                onClick={() => handleClick({ clntUuid })}
                variant="contained"
                style={{ cursor: "pointer" }}
              />
            </Tooltip>
          );
        },
      },
    ],
    [handleClick, t]
  );

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <DataTable
              data={authorizedPersons}
              columns={columns}
              components={{
                Toolbar: () => (
                  <Toolbar disableGutters>
                    <Typography variant="h6" color="primary">
                      {t("typography:heading.authorizedPersonOfEmployer")}
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

AuthorizedPersonList.propTypes = {
  authorizedPersons: PropTypes.array,
};

AuthorizedPersonList.defaultProps = {
  authorizedPersons: [],
};

export default AuthorizedPersonList;
