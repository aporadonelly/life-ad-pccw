import React, { useMemo, useEffect } from "react";
import PropTypes from "prop-types";
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
  root: {
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  btnAction: {
    minWidth: 90,
    borderRadius: 19,
  },
  btnGradeLst: {
    width: "auto",
    top: "10px",
    borderRadius: 19,
  },
}));

const GradeList = ({ gradeList, getGradeLst }) => {
  const { t } = useTranslation(["typography", "form", "table", "button"]);
  const classes = useStyles();
  const columns = useMemo(
    () => [
      {
        Header: t("table:thead.gradename"),
        accessor: "erGrdTxt",
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
                  className={classes.btnAction}
                  direction="row-reverse"
                  justify="center"
                  size="small"
                  color="primary"
                >
                  {t("button:detail")}
                </Button>
                {/* <Button
                  className={classes.btnAction}
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

  useEffect(() => {
    getGradeLst({ erUuid: "f4abdd73-2aa6-47da-aebd-640fcab8df82" });
  }, [getGradeLst]);

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <DataTable
              data={gradeList}
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
            className={classes.btnGradeLst}
            variant="contained"
            color="primary"
          >
            <AddIcon fontSize="small" />
            {t("button:addGrade")}
          </Button>
          <Button
            className={classes.btnGradeLst}
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

GradeList.propTypes = {
  gradeList: PropTypes.array,
  getGradeLst: PropTypes.func.isRequired,
};

GradeList.defaultProps = {
  GradeList: [],
  getGradeLst: () => {},
};

export default GradeList;
