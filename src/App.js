import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './ui/theme';
import { Switch, Route } from 'react-router-dom';
import Layout from './ui/layout';
import Dashboard from './components/dashboard/dashboard';
import Employees from './pages/Employee/components/EmployeeSearch/Employees';
import { Agent } from './components/agent';

function App() {
  return (
    <ThemeProvider theme={theme}>
       <Layout>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/agent" component={Agent}/>
            <Route path="/employee" component={Employees} />
          </Switch>
       </Layout>
    </ThemeProvider>
  );
}

export default App;
