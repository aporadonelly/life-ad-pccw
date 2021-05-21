import { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  isLoadingSelector,
  errorSelector,
  employersSelector,
  authPersonSelector,
} from "@redux/features/employers/selectors";
import {
  getEmployers,
  viewAuthPerson,
} from "@redux/features/employers/actions";

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
import { PageInner } from "@components/layout";
import { useTranslation } from "react-i18next";
import eSig from "../../../assets/icons/signature.svg";
import { useHistory } from "react-router-dom";
import { Definition } from "@components/misc";

const data = [
  { value: 1, label: "Primary Contact Person" },
  { value: 2, label: "Secondary Contact Person" },
  { value: 3, label: "With User Account", withUserAcct: true },
];

const ViewProfile = (props) => {
  const { viewAuthPerson, getEmployers, authPerson, employers } = props;

  const history = useHistory();
  const { t } = useTranslation(["typography", "form", "button"]);

  useEffect(() => {
    getEmployers();
    viewAuthPerson();
  }, []);

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
                    dd={authPerson.map((x) => x.id_type)}
                  />

                  <Definition.Item
                    item
                    xs={3}
                    dt={t("form:label.idNumber")}
                    dd={authPerson.map((x) => x.id_number)}
                  />

                  <Definition.Item
                    item
                    xs={3}
                    dt={t("form:label.birthdate")}
                    dd={authPerson.map((x) => x.date_of_birth)}
                  />

                  <Definition.Item
                    item
                    xs={3}
                    dt={t("form:label.nationality")}
                    dd={authPerson.map((x) => x.nationality)}
                  />

                  <Definition.Item
                    item
                    xs={3}
                    dt={t("form:label.chineseLastName")}
                    dd={authPerson.map((x) => x.last_name_chinese)}
                  />
                  <Definition.Item
                    item
                    xs={3}
                    dt={t("form:label.chineseFirstName")}
                    dd={authPerson.map((x) => x.first_name_chinese)}
                  />
                  <Definition.Item
                    item
                    xs={3}
                    dt={t("form:label.lastName")}
                    dd={authPerson.map((x) => x.last_name)}
                  />
                  <Definition.Item
                    item
                    xs={3}
                    dt={t("form:label.firstName")}
                    dd={authPerson.map((x) => x.first_name)}
                  />

                  <Definition.Item
                    item
                    xs={3}
                    dt={t("form:label.title")}
                    dd={authPerson.map((x) => x.title)}
                  />
                  <Definition.Item
                    item
                    xs={6}
                    dt={t("form:label.jobTitle")}
                    dd={authPerson.map((x) => x.job_title)}
                  />
                </Definition.List>
              </Definition>
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
                      dd={authPerson.map((x) => x.regOfcAdd)}
                    />
                    <Definition.Item
                      item
                      xs={6}
                      dt={t("form:label.businessAddress")}
                      dd={authPerson.map((x) => x.address)}
                    />
                    <Definition.Item
                      item
                      xs={6}
                      dt={t("form:label.correspondenceAddress")}
                      dd={authPerson.map((x) => x.correspondence_address)}
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

const mapStateToProps = (state) => ({
  isLoading: isLoadingSelector(state),
  error: errorSelector(state),
  employers: employersSelector(state),
  authPerson: authPersonSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ getEmployers, viewAuthPerson }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewProfile);
