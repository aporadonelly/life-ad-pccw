import { useEffect } from "react";
import { get } from "lodash";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
  Box,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import eSig from "@assets/icons/signature.svg";
import { useHistory } from "react-router-dom";
import { Definition } from "@components/misc";
import { Page } from "@containers";
import { PageHeader, PageInner } from "@components/layout";
import { companyRoutes } from "@routes/employers";

const data = [
  { value: 1, label: "Primary Contact Person" },
  { value: 2, label: "Secondary Contact Person" },
  { value: 3, label: "With User Account", withUserAcct: true },
];

const ViewProfile = (props) => {
  const { viewAuthPerson, authPerson, getEmployers } = props;

  const {
    id_type,
    id_number,
    date_of_birth,
    nationality,
    last_name_chinese,
    first_name_chinese,
    last_name,
    first_name,
    title,
    job_title,
    regOfcAdd,
    address,
    correspondence_address,
  } = get(authPerson, "[0]") ?? {};
  const history = useHistory();
  const { t } = useTranslation(["typography", "form", "button"]);

  useEffect(() => {
    getEmployers();
    viewAuthPerson();
  }, []);

  return (
    <Page>
      <PageHeader routes={companyRoutes} />

      <PageInner>
        <Grid container spacing={3}>
          {/* Authorized Person */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="h6" color="primary">
                      {t("typography:heading.authorizedPerson")}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Definition spacing={2} xs={3}>
                      <Definition.List>
                        <Definition.Item
                          dt={t("form:label.idType")}
                          dd={id_type}
                        />

                        <Definition.Item
                          dt={t("form:label.idNumber")}
                          dd={id_number}
                        />

                        <Definition.Item
                          dt={t("form:label.birthdate")}
                          dd={date_of_birth}
                        />

                        <Definition.Item
                          dt={t("form:label.nationality")}
                          dd={nationality}
                        />

                        <Definition.Item
                          dt={t("form:label.chineseLastName")}
                          dd={last_name_chinese}
                        />
                        <Definition.Item
                          dt={t("form:label.chineseFirstName")}
                          dd={first_name_chinese}
                        />
                        <Definition.Item
                          dt={t("form:label.lastName")}
                          dd={last_name}
                        />
                        <Definition.Item
                          dt={t("form:label.firstName")}
                          dd={first_name}
                        />

                        <Definition.Item
                          dt={t("form:label.title")}
                          dd={title}
                        />
                        <Definition.Item
                          dt={t("form:label.jobTitle")}
                          dd={job_title}
                        />
                      </Definition.List>
                    </Definition>
                  </Grid>
                  <Grid item xs={12}>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      width="80%"
                    >
                      {data.map(({ value, label, withUserAcct }, index) => {
                        return (
                          <>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={withUserAcct}
                                  key={index}
                                  name={label}
                                  value={value}
                                />
                              }
                              label={label}
                            />
                          </>
                        );
                      })}
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Address  */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Grid
                  container
                  component="dl"
                  spacing={2}
                  alignItems="flex-start"
                >
                  <Grid item xs={12}>
                    <Typography variant="h6" color="primary">
                      {t("form:label.address")}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Definition spacing={2} xs={6}>
                      <Definition.List>
                        <Definition.Item
                          dt={t("form:label.registeredOfcAddress")}
                          dd={regOfcAdd}
                        />
                        <Definition.Item
                          dt={t("form:label.businessAddress")}
                          dd={address}
                        />
                        <Definition.Item
                          dt={t("form:label.correspondenceAddress")}
                          dd={correspondence_address}
                        />
                      </Definition.List>
                    </Definition>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Signature */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Grid
                  container
                  component="dl"
                  spacing={2}
                  alignItems="flex-start"
                >
                  <Grid item xs={12}>
                    <Typography variant="h6" color="primary">
                      {t("form:label.eSignature")}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Definition spacing={2} xs={6}>
                      <Definition.List>
                        <img
                          src={eSig}
                          style={{
                            width: "20em",
                          }}
                          alt="caret left icon"
                        />
                      </Definition.List>
                    </Definition>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Back Button */}
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
    </Page>
  );
};

export default ViewProfile;
