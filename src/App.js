import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  systemEnvSelector,
  cycleDateSelector,
} from "./redux/features/system/selectors";
import { userSelector } from "./redux/features/user/selectors";
import { logout } from "./redux/features/user/actions";
import { getSystemEnv, getCycleDate } from "./redux/features/system/actions";
import { Page } from "./components/layout";
import { SignIn, Page404 } from "./pages";
import Employees from "./pages/employees/EmployeesPage";
import Employee from "./components/employees/EmployeeItem";
import EmployeesList from "./components/employees/EmployeesList";
import Employer from "./pages/Employer";
import CompanyProfile from "./pages/Employer/CompanyProfile";

const App = ({
  systemEnv,
  cycleDate,
  user,
  getSystemEnv,
  getCycleDate,
  logout,
}) => {
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        getSystemEnv();
        getCycleDate();
      }, 1500);
    }
  }, [getCycleDate, getSystemEnv, user]);
  return (
    <Page
      systemEnv={systemEnv}
      cycleDate={cycleDate}
      user={user}
      onLogout={logout}
    >
      <Switch>
        <Route path="/employee-search" component={Employees} />
        <Route path="/employee-search-results" component={EmployeesList} />
        <Route path="/employee-view" component={Employee} />
        <Route path="/employer" render={(props) => <Employer {...props} />} />
        <Route path="/companies" component={CompanyProfile} />

        {process.env.NODE_ENV === "development" && (
          <Route path={process.env.REACT_APP_REDIRECT_URL} component={SignIn} />
        )}
        <Route path="" component={Page404} />
      </Switch>
    </Page>
  );
};

const mapStateToProps = (state) => ({
  systemEnv: systemEnvSelector(state),
  cycleDate: cycleDateSelector(state),
  user: userSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ getSystemEnv, getCycleDate, logout }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
