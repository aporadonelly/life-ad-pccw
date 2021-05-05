import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { userSelector } from "./redux/features/user/selectors";
import { Page } from "./components";
import { Page404, SignIn } from "./pages";
import Employees from "./pages/employees/EmployeesPage";
import Employee from "./components/employees/EmployeeItem";
import EmployeesList from "./components/employees/EmployeesList";
import createPrivateRoute from "./utils/createPrivateRoute";
import createPublicRoute from "./utils/createPublicRoute";

const App = ({ user }) => {
  return (
    <Page user={user} cycleDate="3 May 2021">
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
};

const mapStateToProps = (state) => ({
  user: userSelector(state),
});

export default connect(mapStateToProps, null)(App);
