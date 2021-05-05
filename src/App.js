import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./styles/theme";
import { Switch, Route } from "react-router-dom";
import { Page } from "./components";
import Dashboard from "./components/dashboard/dashboard";
import Employees from "./pages/employees/EmployeesPage";
import Employee from "./components/employees/EmployeeItem";
import EmployeesList from "./components/employees/EmployeesList";
import { Agent } from "./components/agent";
import Login from "./pages/Login/Login";
import { useSelector } from "react-redux";
import createPrivateRoute from "./utils/createPrivateRoute";
import createPublicRoute from "./utils/createPublicRoute";

const App = () => {
  const user = useSelector((state) => state.userAccounts);
  return (
    <ThemeProvider theme={theme}>
      <Page user={user.userAuthDetails} cycleDate="3 May 2021">
        <Switch>
          <Route
            exact
            path="/"
            {...createPrivateRoute({
              component: null,
            })}
          />
          <Route
            path="/agent"
            {...createPrivateRoute({
              component: null,
            })}
          />
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
              component: Login,
            })}
          />
        </Switch>
      </Page>
    </ThemeProvider>
  );
};

export default App;
