import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { PersistGate } from "redux-persist/integration/react";
import theme from "./styles/theme";
import { Switch, Route } from "react-router-dom";
import { Page } from "./components";
import Dashboard from "./components/dashboard/dashboard";
import Employees from "./pages/employees/EmployeesPage";
import Employee from "./components/employees/EmployeeItem";
import EmployeesList from "./components/employees/EmployeesList";
import { Agent } from "./components/agent";

import { Provider } from "react-redux";
import { persistor, store } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Page
            user={{
              firstName: "Rosetta",
              lastName: "Chan",
              role: "Admin Operator",
            }}
            cycleDate="3 May 2021"
          >
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/agent" component={Agent} />
              <Route path="/employee-search" component={Employees} />
              <Route
                path="/employee-search-results"
                component={EmployeesList}
              />
              <Route path="/employee-view" component={Employee} />
            </Switch>
          </Page>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
