import React, { useMemo } from "react";
import {
  Grid,
  Box,
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

const GradeList = ({ authorizedPersons }) => {
  const { t } = useTranslation(["typography", "form", "table", "button"]);
  const classes = useStyles();

  const row = [
    {
      id: 1,
      gradename: "General Staff",
    },
    {
      id: 2,
      gradename: "Manager",
    },
  ];

  const columns = useMemo(
    () => [
      {
        Header: t("table:thead.gradename"),
        accessor: "gradename",
      },
      {
        Header: t("table:thead.custom.action"),
        headerProps: {
          style: {
            width: 100,
            textAlign: "center",
          },
        },
        sticky: "right",
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
              data={row}
              columns={columns}
              components={{
                Toolbar: () => (
                  <Toolbar disableGutters>
                    <Typography variant="h6" color="primary">
                      {t("typography:heading.gradePayroll")}
                    </Typography>
                  </Toolbar>
                ),
              }}
            />
          </Grid>
        </Grid>

        <Grid className={classes.root}>
          {/* <Button
            style={{
              width: "auto",
              top: "10px",
              borderRadius: 19,
              mr: "10px",
            }}
            variant="contained"
            color="primary"
          >
            <AddIcon fontSize="small" />
            {t("button:addGrade")}
          </Button>
          <Button
            style={{ width: "auto", top: "10px", borderRadius: 19 }}
            variant="contained"
            color="primary"
          >
            {t("button:copyFromOtherPayrollGroup")}
          </Button> */}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default GradeList;
