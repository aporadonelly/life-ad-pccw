import { useCallback, useMemo } from "react";
import PropTypes from "prop-types";
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
  root: {
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  btnAction: {
    minWidth: 90,
    borderRadius: 19,
  },
  btnGrpCntctPrsn: {
    width: "auto",
    top: "10px",
    borderRadius: 19,
  },
}));

const ContactPersonList = (props) => {
  const { match, contactPersons, push } = props;
  const { companyName, payrollGroupId } = match.params;
  const { t } = useTranslation(["typography", "form", "table", "button"]);
  const classes = useStyles();

  const handleClick = useCallback(
    ({ cntctPrsnUuid }) => {
      push({
        routeName: "Payroll Group Contact Person",
        params: {
          companyName,
          payrollGroupId,
          cntctPrsnUuid,
        },
      });
    },
    [companyName, payrollGroupId, push]
  );

  const columns = useMemo(
    () => [
      { Header: t("table:thead.payrollTitle"), accessor: "ttlTypNm" },
      { Header: t("table:thead.payrollLastName"), accessor: "lstNm" },
      { Header: t("table:thead.payrollFirstName"), accessor: "frstNm" },
      {
        Header: t("table:thead.primaryContactPerson"),
        headerProps: {
          style: {
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
                  className={classes.btnAction}
                  direction="row-reverse"
                  justify="center"
                  size="small"
                  color="primary"
                  onClick={() =>
                    handleClick({ cntctPrsnUuid: row.original.id })
                  }
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
    [classes.btnAction, classes.root, handleClick, t]
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
                      {t("typography:heading.payrollGroupContctPerson")}
                    </Typography>
                  </Toolbar>
                ),
              }}
            />
          </Grid>
        </Grid>
        {/* <Button className={classes.btnGrpCntctPrsn} variant="contained" color="primary">
          <AddIcon fontSize="small" />
          {t("button:addPayrollGroupContactPerson")}
        </Button> */}
      </CardContent>
    </Card>
  );
};

ContactPersonList.defaultProps = {
  employer: {},
  contactPersons: [],
};

ContactPersonList.propTypes = {
  contactPersons: PropTypes.array,
};

export default ContactPersonList;
