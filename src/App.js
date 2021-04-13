import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './ui/theme';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './ui/layout';
import Dashboard from './components/dashboard/dashboard';
import Employees from './pages/Employee/components/EmployeeSearch/Employees';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          {/* <Dashboard /> */}
          <Employees />
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
