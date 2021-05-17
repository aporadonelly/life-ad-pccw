import { Grid, Card, CardContent, Typography, Button } from "@material-ui/core";
import { PageInner } from "@components/layout";
import { useTranslation } from "react-i18next";
import eSig from "../../../assets/icons/signature.svg";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  dd: {
    fontSize: "16px",
    marginBottom: "10px",
  },
  label: {
    fontSize: "13px",
  },
  backBtn: {
    backgroundColor: "#EF841F",
    color: "#fff",
  },
}));

const ViewProfile = () => {
  const classes = useStyles();
  const history = useHistory();
  const { t } = useTranslation(["typography", "form", "button"]);
  return (
    <PageInner>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid
                container
                component="dl"
                spacing={1}
                alignItems="flex-start"
              >
                <Grid item xs={12}>
                  <Typography variant="h6" color="primary">
                    {t("typography:heading.authorizedPerson")}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    component="dt"
                    variant="body1"
                    color="textSecondary"
                    className={classes.label}
                  >
                    {t("form:label.idType")}
                  </Typography>
                  <Typography
                    component="dd"
                    variant="h6"
                    className={classes.dd}
                  >
                    HKID
                  </Typography>
                </Grid>

                <Grid item xs={3}>
                  <Typography
                    component="dt"
                    variant="body1"
                    className={classes.label}
                    color="textSecondary"
                  >
                    {t("form:label.idNumber")}
                  </Typography>
                  <Typography
                    component="dd"
                    variant="h6"
                    className={classes.dd}
                  >
                    Y371385(4)
                  </Typography>
                </Grid>

                <Grid item xs={3}>
                  <Typography
                    component="dt"
                    variant="body1"
                    className={classes.label}
                    color="textSecondary"
                  >
                    {t("form:label.birthdate")}
                  </Typography>
                  <Typography
                    component="dd"
                    variant="h6"
                    className={classes.dd}
                  >
                    1970/04/21
                  </Typography>
                </Grid>

                <Grid item xs={3}>
                  <Typography
                    component="dt"
                    variant="body1"
                    className={classes.label}
                    color="textSecondary"
                  >
                    {t("form:label.nationality")}
                  </Typography>
                  <Typography
                    component="dd"
                    variant="h6"
                    className={classes.dd}
                  >
                    Hong Kong
                  </Typography>
                </Grid>

                {/* Second line */}

                <Grid item xs={3}>
                  <Typography
                    component="dt"
                    variant="body1"
                    className={classes.label}
                    color="textSecondary"
                  >
                    {t("form:label.chineseLastName")}
                  </Typography>
                  <Typography
                    component="dd"
                    variant="h6"
                    className={classes.dd}
                  >
                    听
                  </Typography>
                </Grid>

                <Grid item xs={3}>
                  <Typography
                    component="dt"
                    variant="body1"
                    className={classes.label}
                    color="textSecondary"
                  >
                    {t("form:label.chineseFirstName")}
                  </Typography>
                  <Typography
                    component="dd"
                    variant="h6"
                    className={classes.dd}
                  >
                    耐莉
                  </Typography>
                </Grid>

                <Grid item xs={3}>
                  <Typography
                    component="dt"
                    variant="body1"
                    className={classes.label}
                    color="textSecondary"
                  >
                    {t("form:label.lastName")}
                  </Typography>
                  <Typography
                    component="dd"
                    variant="h6"
                    className={classes.dd}
                  >
                    Aporado
                  </Typography>
                </Grid>

                <Grid item xs={3}>
                  <Typography
                    component="dt"
                    variant="body1"
                    className={classes.label}
                    color="textSecondary"
                  >
                    {t("form:label.firstName")}
                  </Typography>
                  <Typography
                    component="dd"
                    variant="h6"
                    className={classes.dd}
                  >
                    Nelly
                  </Typography>
                </Grid>

                {/* Third line */}
                <Grid item xs={3}>
                  <Typography
                    component="dt"
                    variant="body1"
                    className={classes.label}
                    color="textSecondary"
                  >
                    {t("form:label.title")}
                  </Typography>
                  <Typography
                    component="dd"
                    variant="h6"
                    className={classes.dd}
                  >
                    Ms.
                  </Typography>
                </Grid>

                <Grid item xs={3}>
                  <Typography
                    component="dt"
                    variant="body1"
                    className={classes.label}
                    color="textSecondary"
                  >
                    {t("form:label.jobTitle")}
                  </Typography>
                  <Typography
                    component="dd"
                    variant="h6"
                    className={classes.dd}
                  >
                    Accountant
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid
                container
                component="dl"
                spacing={1}
                alignItems="flex-start"
              >
                <Grid item xs={12}>
                  <Typography variant="h6" color="primary">
                    {t("form:label.address")}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    component="dt"
                    variant="body1"
                    className={classes.label}
                    color="textSecondary"
                  >
                    {t("form:label.registeredOfcAddress")}
                  </Typography>
                  <Typography
                    component="dd"
                    variant="h6"
                    className={classes.dd}
                  >
                    Rm 307, Man Tai Building, 31 Lok Man Street, Tai Po, NT.
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    component="dt"
                    variant="body1"
                    className={classes.label}
                    color="textSecondary"
                  >
                    {t("form:label.businessAddress")}
                  </Typography>
                  <Typography
                    component="dd"
                    variant="h6"
                    className={classes.dd}
                  >
                    Same as Correspondence Address
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    component="dt"
                    variant="body1"
                    className={classes.label}
                    color="textSecondary"
                  >
                    {t("form:label.correspondenceAddress")}
                  </Typography>
                  <Typography
                    component="dd"
                    variant="h6"
                    className={classes.dd}
                  >
                    Same as Correspondence Address
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid
                container
                component="dl"
                spacing={1}
                alignItems="flex-start"
              >
                <Grid item xs={12}>
                  <Typography variant="h6" color="primary">
                    {t("form:label.eSignature")}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <img
                    src={eSig}
                    style={{ width: "20em" }}
                    alt="caret left icon"
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Grid container component="dl" spacing={1} justify="flex-end">
            <Button
              data-testid="back-btn"
              onClick={() => history.push("/employer")}
              className={classes.backBtn}
            >
              {t("button:backToCompanyProfile")}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </PageInner>
  );
};

export default ViewProfile;
