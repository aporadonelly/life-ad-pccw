import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { PersistGate } from 'redux-persist/integration/react'
import theme from './ui/theme'
import { Switch, Route } from 'react-router-dom'
import Layout from './ui/layout'
import Dashboard from './components/dashboard/dashboard'
import Employees from './pages/employees/EmployeesPage'
import Employee from './components/employees/EmployeeItem'
import EmployeesList from './components/employees/EmployeesList'
import { Agent } from './components/agent'

import { Provider } from 'react-redux'
import { persistor, store } from './store'

const App = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ThemeProvider theme={theme}>
					<Layout>
						<Switch>
							<Route exact path='/' component={Dashboard} />
							<Route path='/agent' component={Agent} />
							<Route path='/employee-search' component={Employees} />
							<Route
								path='/employee-search-results'
								component={EmployeesList}
							/>
							<Route path='/employee-view' component={Employee} />
						</Switch>
					</Layout>
				</ThemeProvider>
			</PersistGate>
		</Provider>
	)
}

export default App
