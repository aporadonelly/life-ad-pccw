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
import { compact } from "lodash";

const SelfCertificationList = ({ cmpnyUuid, crsList, push }) => {
  const { t } = useTranslation(["typography", "table"]);

  const viewDetails = useCallback(
    ({ cmpnyUuid }) => {
      push("/employers/enrollment/self-certification");
    },
    [push]
  );

  const selfCertColumns = useMemo(
    () => [
      { Header: t("table:thead.type"), accessor: "formTyp" },
      { Header: t("table:thead.englishName"), accessor: "companyName" },
      {
        Header: t("table:thead.custom.action"),
        HeaderProps: {
          style: {
            width: 100,
            textAlign: "center",
          },
        },
        sticky: "right",
        disableSortBy: true,
        Cell: ({ row }) => {
          return (
            <Tooltip title="View Details" placement="top" arrow>
              <img
                src={ViewIcon}
                width={40}
                height={40}
                alt="View Details"
                onClick={() => viewDetails({ cmpnyUuid })}
                variant="contained"
                style={{ cursor: "pointer" }}
              />
            </Tooltip>
          );
        },
      },
    ],
    [t, viewDetails, cmpnyUuid]
  );
  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <DataTable
              data={compact(crsList)}
              columns={selfCertColumns}
              components={{
                Toolbar: () => (
                  <Toolbar disableGutters>
                    <Typography variant="h6" color="primary">
                      {t("typography:heading.selfCertification")}
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

SelfCertificationList.propTypes = {
  crsList: PropTypes.array,
};

SelfCertificationList.defaultProps = {
  crsList: [],
};

export default SelfCertificationList;
