import { Grid, Card, CardContent, Typography, Button } from "@material-ui/core";
import { PageInner } from "@components/layout";
import { useTranslation } from "react-i18next";
import eSig from "../../../assets/icons/signature.svg";
import { useHistory } from "react-router-dom";
import { Definition } from "@components/misc";

const ViewProfile = () => {
  const history = useHistory();
  const { t } = useTranslation(["typography", "form", "button"]);
  return (
    <PageInner>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid item xs={12}>
                <Typography variant="h6" color="primary">
                  {t("typography:heading.authorizedPerson")}
                </Typography>
              </Grid>
              <Definition spacing={2} xs={3}>
                <Definition.List>
                  <Definition.Item
                    item
                    xs={3}
                    dt={t("form:label.idType")}
                    dd="HKID"
                  />

                  <Definition.Item
                    item
                    xs={3}
                    dt={t("form:label.idNumber")}
                    dd="Y371385(4)"
                  />

                  <Definition.Item
                    item
                    xs={3}
                    dt={t("form:label.birthdate")}
                    dd=" 1970/04/21"
                  />

                  <Definition.Item
                    item
                    xs={3}
                    dt={t("form:label.nationality")}
                    dd=" Hong Kong"
                  />

                  <Definition.Item
                    item
                    xs={3}
                    dt={t("form:label.chineseLastName")}
                    dd=" 听"
                  />
                  <Definition.Item
                    item
                    xs={3}
                    dt={t("form:label.chineseFirstName")}
                    dd="  耐莉"
                  />
                  <Definition.Item
                    item
                    xs={3}
                    dt={t("form:label.lastName")}
                    dd="Aporado"
                  />
                  <Definition.Item
                    item
                    xs={3}
                    dt={t("form:label.firstName")}
                    dd="  Nelly"
                  />

                  <Definition.Item
                    item
                    xs={3}
                    dt={t("form:label.title")}
                    dd="Ms."
                  />
                  <Definition.Item
                    item
                    xs={3}
                    dt={t("form:label.jobTitle")}
                    dd="Accountant"
                  />
                </Definition.List>
              </Definition>
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
                <Definition spacing={2} xs={6}>
                  <Definition.List>
                    <Definition.Item
                      item
                      xs={6}
                      dt={t("form:label.registeredOfcAddress")}
                      dd=" Rm 307, Man Tai Building, 31 Lok Man Street, Tai Po, NT."
                    />
                    <Definition.Item
                      item
                      xs={6}
                      dt={t("form:label.businessAddress")}
                      dd=" Same as Correspondence Address"
                    />
                    <Definition.Item
                      item
                      xs={6}
                      dt={t("form:label.correspondenceAddress")}
                      dd=" Same as Correspondence Address"
                    />
                  </Definition.List>
                </Definition>
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
                    style={{
                      width: "20em",
                    }}
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
