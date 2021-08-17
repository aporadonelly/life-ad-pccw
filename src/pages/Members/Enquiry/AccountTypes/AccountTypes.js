import { useEffect, useMemo } from "react";
import { PageInner } from "@components/layout";
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
  const { indAccntLst, isLoading, getIndAccntLst, history, push } = props;

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

  const sampleData = {
    empfID: "3746474",
    fNm: "Chui Yee",
    lNm: "Lo",
  };

  const createTitle = () => {
    const { empfID, fNm, lNm } = sampleData;

    return `${lNm} ${fNm} - (eMPF ID ${empfID})`;
  };

  const handleBackButtonClick = () => {
    history.goBack();
  };

  const handleNewSearchButtonClick = (e) => {
    push("/members/enquiry/search");
  };

  useEffect(() => {
    getIndAccntLst({ indUuid: "611684C3-972A-450A-9E79-0C03CBDE3917" });
  }, [getIndAccntLst]);

  return (
    <>
      <PageInner>
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
                        title={createTitle()}
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
      </PageInner>
    </>
  );
};

export default AccountTypes;
