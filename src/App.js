import { Switch, Route } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { cycleDateSelector } from "./redux/features/system/selectors";
import { userSelector } from "./redux/features/user/selectors";
import { logout } from "./redux/features/user/actions";
import { Page } from "./components";
import { Page404, SignIn } from "./pages";
import Employees from "./pages/employees/EmployeesPage";
import Employee from "./components/employees/EmployeeItem";
import EmployeesList from "./components/employees/EmployeesList";
import createPrivateRoute from "./utils/createPrivateRoute";
import createPublicRoute from "./utils/createPublicRoute";

const App = ({ user, cycleDate, logout }) => (
  <Page user={user} cycleDate={cycleDate} onLogout={logout}>
    <Switch>
      <Route
        path="/employee-search"
        {...createPrivateRoute({
          component: Employees,
        })}
      />
      <Route
        path="/employee-search-results"
        {...createPrivateRoute({
          component: EmployeesList,
        })}
      />
      <Route
        path="/employee-view"
        {...createPrivateRoute({
          component: Employee,
        })}
      />
      <Route
        path="/signin"
        {...createPublicRoute({
          component: SignIn,
        })}
      />
      <Route
        path=""
        {...createPrivateRoute({
          component: Page404,
        })}
      />
    </Switch>
  </Page>
);

const mapStateToProps = (state) => ({
  cycleDate: cycleDateSelector(state),
  user: userSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ logout }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
