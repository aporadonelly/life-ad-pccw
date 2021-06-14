import { Page } from "@containers";
import { PageHeader, PageInner } from "@components/layout";
import { companyRoutes } from "@routes/employers";
import { TableCustomized } from "@components/common";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";
import ViewBtn from "@assets/icons/view_btn.svg";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Box,
  Button,
  Tooltip,
} from "@material-ui/core";

const EnrollmentScheme = () => {
  const classes = useStyles();
  const { t } = useTranslation(["typography", "form", "table", "button"]);
  const history = useHistory();

  const columns = [
    { label: t("typography:heading.trustee"), name: "companyName" },
    { label: t("typography:heading.schemeName"), name: "schemeName" },
    { label: t("typography:heading.status"), name: "status" },
    { label: t("table:thead.viewAction"), name: "view" },
  ];

  const rows = [
    { companyName: "AIA Company (Trustee) Limited", schemeName: "AIA MPF - Prime Value Choice", status: "Active" },
    { companyName: "Bank Consortium Trust Company Limited", schemeName: "Allianz Global", status: "Active" },
    { companyName: "Bank Consortium Trust Company Limited2", schemeName: "BCT (MPF) Induxtry Choice", status: "InActive" },
  ]

  return (
  <Page>
    <PageHeader routes={companyRoutes} />
    <PageInner>

    {/* {isLoading ? (
          <Box display="flex" justifyContent="center" mt={5}>
            {" "}
            <CircularProgress />
          </Box>
        ) : ( */}
          <Grid container spacing={3}>
 
 
            <Grid item xs={12}>
              {/* {authPersonList && ( */}
                <Card>
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Grid container alignItems="center">
                          <Grid item xs={6}>
                            <Typography className={classes.titleLabel}>
                              {t(
                                "typography:heading.enrolmentScheme"
                              )}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <TableCustomized
                          renderToolbar={(({ title, quickSearch, pagination }) => [])}
                          rows={rows} // {authPersonList}
                          columns={columns}
                          renderStickyCell={(row) => {
                            return (
                              <>
                                <Tooltip title="View" arrow>
                                  <img
                                    src={ViewBtn}
                                    alt="View"
                                    // onClick={() => 
                                    //   // viewMembersDetails(row.clntUuid)
                                    // }
                                    variant="contained"
                                    style={{
                                      color: "#fff",
                                      cursor: "pointer",
                                    }}
                                    width={32}
                                  />
                                </Tooltip>
                              </>
                            );
                          }}
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              {/* )} */}
            </Grid>

   
   

            <Grid item xs={12} align="right">
              <Button data-testid="back-btn" onClick={() => history.push("/")}>
                {t("button:back")}
              </Button>
            </Grid>
          </Grid>
        {/* )} */}


    </PageInner>
  </Page>
  );
}

export default EnrollmentScheme;
