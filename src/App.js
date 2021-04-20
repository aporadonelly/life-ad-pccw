import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './ui/theme';
import { Switch, Route } from 'react-router-dom';
import Layout from './ui/layout';
import Dashboard from './components/dashboard/dashboard';
import Employees from './pages/employees/EmployeesPage';
import Employee from './components/employees/EmployeeView';
import EmployeesTable from './components/employees/EmployeesTable';

import { Agent } from './components/agent';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/agent" component={Agent} />
          <Route path="/employee-search" component={Employees} />
          <Route path="/ employee-search-results" component={EmployeesTable} />
          <Route path="/employee-view" component={Employee} />
        </Switch>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
