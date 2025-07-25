import { useEffect, useMemo } from "react";
import {
  Card,
  CardContent,
  Grid,
  Button,
  Divider,
  Tooltip,
  Box,
  CircularProgress,
} from "@material-ui/core";
import moment from "moment";
import DataTable from "@components/common/DataTable";
import viewEnrollActive from "@assets/icons/enroll-active.PNG";
import { makeStyles } from "@material-ui/core";
import { useTranslation } from "react-i18next";

const useStyle = makeStyles({
  viewEnrBtn: {
    margin: "0 5px",
    background: "#EF841F",
    color: "#fff",
    cursor: "pointer",
  },
  buttonSpacing: {
    marginRight: "10px",
  },
});

const AccountTypes = (props) => {
  const { employee, indAccntLst, isLoading, getIndAccntLst, push } = props;
  const { id, pnsnIdTxt, fullname } = employee;
  const { t } = useTranslation(["table", "button"]);
  const classes = useStyle();

  const columns = useMemo(
    () => [
      {
        Header: t("table:thead.accountNo"),
        accessor: "mbrCd",
      },
      {
        Header: t("table:thead.accountType"),
        accessor: "mbrTypDscrptn",
      },
      {
        Header: t("table:thead.nameOfBusiness"),
        accessor: "cmpnyNm",
      },
      {
        Header: t("table:thead.dateOfJoiningScheme"),
        accessor: "joinSchmDt",
        Cell: ({ row }) => {
          const { joinSchmDt } = row.values;
          return moment(joinSchmDt).format("DD/MM/YYYY");
        },
      },
      {
        Header: t("table:thead.schemeName"),
        accessor: "schmNm",
      },
      {
        Header: t("table:thead.status"),
        accessor: "sttsTypDscrptn",
      },
      {
        Header: t("table:thead.custom.action"),
        disableSortBy: true,
        sticky: "right",
        Cell: () => {
          return (
            <Tooltip title="View Enrollment">
              <img
                src={viewEnrollActive}
                alt="View Enrollment"
                variant="contained"
                className={classes.viewEnrBtn}
              />
            </Tooltip>
          );
        },
      },
    ],
    [t, classes]
  );

  const handleBackButtonClick = () => {
    push({ routeName: "Member Search Result" });
  };

  const handleNewSearchButtonClick = () => {
    push({ routeName: "Member Search Enquiry" });
  };

  useEffect(() => {
    getIndAccntLst({ indUuid: id });
  }, [getIndAccntLst, id]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} align="right">
                <Button
                  variant="outlined"
                  onClick={handleBackButtonClick}
                  className={classes.buttonSpacing}
                >
                  {t("button:back")}
                </Button>
                <Button onClick={handleNewSearchButtonClick}>
                  {t("button:newSearch")}
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                {!indAccntLst || isLoading ? (
                  <Box display="flex" justifyContent="center">
                    <CircularProgress />
                  </Box>
                ) : (
                  <DataTable
                    title={`${fullname} - (eMPF ID ${pnsnIdTxt})`}
                    data={indAccntLst}
                    columns={columns}
                    disableQuickSearch
                    disablePagination
                    disableShowEntries
                  />
                )}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

AccountTypes.defaultProps = {
  employee: {},
};

export default AccountTypes;
