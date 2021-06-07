import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { SignIn, Page404 } from "./pages";
import { Page } from "./containers";
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
        {process.env.NODE_ENV === "development" && (
          <Route path={process.env.REACT_APP_REDIRECT_URL} component={SignIn} />
        )}
        <Route path="" component={Page404} />
      </Switch>
    </Page>
  );
}
export default App;
