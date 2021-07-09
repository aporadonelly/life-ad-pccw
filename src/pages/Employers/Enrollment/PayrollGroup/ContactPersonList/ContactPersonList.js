import React, { useMemo, useEffect } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Toolbar,
} from "@material-ui/core";
import { DataTable } from "@components/common";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import { useTranslation } from "react-i18next";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  button: {
    minWidth: 90,
    borderRadius: 19,
  },
  root: {
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

const ContactPersonList = ({ contactPersons, ldCntctPrsnInfo }) => {
  const { t } = useTranslation(["typography", "form", "table", "button"]);
  const classes = useStyles();

  useEffect(() => {
    ldCntctPrsnInfo({
      cmpnyUuid: "1f33f55f-c1a9-43c9-84d2-f84f5a7a0c29",
    });
  }, [ldCntctPrsnInfo]);
  console.log(contactPersons);

  const columns = useMemo(
    () => [
      { Header: t("table:thead.payrollTitle"), accessor: "ttlTypCd" },
      { Header: t("table:thead.payrollLastName"), accessor: "lstNm" },
      { Header: t("table:thead.payrollFirstName"), accessor: "frstNm" },
      {
        Header: t("table:thead.primaryContactPerson"),
        headerProps: {
          style: {
            width: 100,
            textAlign: "center",
          },
        },
        disableSortBy: true,
        Cell: ({ row }) => (
          <Checkbox
            color="primary"
            checked={row.original.cntctPrsnTypId === "CT_PCP"}
          />
        ),
        cellProps: {
          style: {
            textAlign: "center",
          },
        },
      },
      {
        Header: t("table:thead.secondaryContactPerson"),
        headerProps: {
          style: {
            width: 100,
            textAlign: "center",
          },
        },
        disableSortBy: true,
        Cell: ({ row }) => (
          <Checkbox
            color="primary"
            checked={row.original.cntctPrsnTypId === "CT_SCP"}
          />
        ),
        cellProps: {
          style: {
            textAlign: "center",
          },
        },
      },
      {
        Header: t("table:thead.custom.action"),
        headerProps: {
          style: {
            width: 100,
            textAlign: "center",
          },
        },
        accessor: "Action",
        sticky: "right",
        disableSortBy: true,
        Cell: ({ row }) => {
          return (
            <>
              <Box className={classes.root}>
                <Button
                  className={classes.button}
                  direction="row-reverse"
                  justify="center"
                  alignItems="center"
                  size="small"
                  color="primary"
                >
                  {t("button:detail")}
                </Button>
                {/* <Button
                  className={classes.button}
                  variant="contained"
                  size="small"
                  color="primary"
                >
                  {t("button:delete")}
                </Button> */}
              </Box>
            </>
          );
        },
      },
    ],
    [t]
  );

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <DataTable
              data={contactPersons}
              columns={columns}
              components={{
                Toolbar: () => (
                  <Toolbar disableGutters>
                    <Typography variant="h6" color="primary">
                      {t("typography:heading.payrollGroupContactPerson")}
                    </Typography>
                  </Toolbar>
                ),
              }}
            />
          </Grid>
        </Grid>
        <Button
          style={{ width: "auto", top: "10px", borderRadius: 19 }}
          variant="contained"
          color="primary"
        >
          <AddIcon fontSize="small" />
          {t("button:addPayrollGroupContactPerson")}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ContactPersonList;
