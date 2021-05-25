import { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getAllMembers } from "@redux/features/members/actions";
import { employeesSelector } from "@redux/features/members/selectors";
// import { get } from "lodash";
import { Grid, Card, CardContent, Typography, Button } from "@material-ui/core";
import { PageInner } from "@components/layout";
import { useTranslation } from "react-i18next";
import eSig from "../../../assets/icons/signature.svg";
import { useHistory } from "react-router-dom";

const Members = (props) => {
  // const person = get(authPerson, "0.employees") ?? [];
  const { getAllMembers, employees } = props;
  console.log(employees, "employees");
  const history = useHistory();
  const { t } = useTranslation(["typography", "form", "button"]);

  useEffect(() => {
    getAllMembers();
  }, []);

  return (
    <PageInner>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid item xs={12}>
                <Typography variant="h6" color="primary">
                  Search Enquiry
                </Typography>
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
                  Table
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
  employees: employeesSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      getAllMembers,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Members);
