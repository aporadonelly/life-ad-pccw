import React, { useCallback, useMemo } from "react";
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

const AuthorizedPersonList = ({
  cmpnyRltdPrsns,
  setSelectedClientUUID,
  push,
}) => {
  const { t } = useTranslation(["typography", "form", "table", "button"]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleViewMembersDetails = useCallback(
    ({ clntUuid }) => {
      setSelectedClientUUID({ clntUuid });
      push("/employers/registration/authorized-person");
    },
    [setSelectedClientUUID, push]
  );
  const columns = useMemo(
    () => [
      { Header: t("table:thead.lastName"), accessor: "lstName" },
      { Header: t("table:thead.firstName"), accessor: "frstName" },
      { Header: t("table:thead.chineseLastName"), accessor: "chnsLstName" },
      {
        Header: t("table:thead.chineseFirstName"),
        accessor: "chnsFrstName",
      },
      {
        Header: t("table:thead.custom.action"),
        sticky: "right",
        disableSortBy: true,
        Cell: ({ row }) => {
          const { clientUuid } = row.original;
          return (
            <Tooltip title="View Registration" placement="top" arrow>
              <img
                src={ViewIcon}
                width={40}
                height={40}
                alt="View Registration"
                onClick={() =>
                  handleViewMembersDetails({ clntUuid: clientUuid })
                }
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
    [t, handleViewMembersDetails]
  );

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <DataTable
              data={cmpnyRltdPrsns}
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

export default AuthorizedPersonList;
