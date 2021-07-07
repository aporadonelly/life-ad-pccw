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

const SelfCertification = ({ authPersonList }) => {
  const { t } = useTranslation(["typography", "form", "table", "button"]);

  const data = [
    {
      typ: 1,
      engName: "Filename upload 00001.pdf",
    },
    {
      typ: 2,
      engName: "Filename upload 00002.png",
    },
    {
      typ: 3,
      engName: "Filename upload 00002.png",
    },
  ];

  const selfCertColumns = useMemo(
    () => [
      { Header: t("table:thead.type"), accessor: "typ" },
      { Header: t("table:thead.englishName"), accessor: "engName" },
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
                  background: "#2D9FC3 0% 0% no-repeat padding-box",
                  borderRadius: 19,
                  opacity: 1,
                }}
              >
                Detail
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
              data={data} //
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

          <Grid item xs={12}>
            <Button
              data-testid="add-btn"
              style={{
                width: 252,
                height: 38,
                background: "#2D9FC3 0% 0% no-repeat padding-box",
                borderRadius: 19,
                opacity: 1,
              }}
              // onClick={() =>
              //   history.push("/employers/company/enrollment-scheme")
              // }
            >
              {t("button:addControllingPerson")}
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SelfCertification;
