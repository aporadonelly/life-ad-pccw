import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import {
	Box,
	makeStyles,
	TableRow,
	Grid,
	TableBody,
	TableCell,
	Typography,
} from '@material-ui/core'
import useTable from '../useTable'
import { viewMember, saveQuery } from '../../actions/employeesActions'
import EmployeeItem from './EmployeeItem'
import reactStringReplace from '@utils/reactStringReplace'
import AnimatedSearchBar from '@components/AnimatedSearchBar'
import viewEnrollActive from '../../assets/icons/enroll-active.PNG'
import viewEnrollInActive from '../../assets/icons/enroll-inactive.PNG'
import EmployeeStyles from './styles/EmployeeStyles'
import viewReg from '../../assets/icons/view_reg.PNG'
import * as intl from '../../common/labels'

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: '#fdfdff',
		display: 'flex',
		justifyContent: 'start',
		flexWrap: 'wrap',
		listStyle: 'none',
	},
	pageTitle: {
		paddingLeft: theme.spacing(1),
		'& .MuiTypography-subtitle2': {
			opacity: '0.6',
			fontSize: '26px',
		},
		color: '#009CCD',
		fontSize: '26px',
		fontFamily: 'Roboto',
	},
	disabled: {
		pointerEvents: 'none',
		cursor: 'not-allowed',
		opacity: 0.65,
		filter: 'alpha(opacity=65)',
		boxShadow: 'none',
	},
}))

const headCells = [
	{ id: 'mpf_id', label: 'MPF ID' },
	{ id: 'first_name', label: 'Member Name' },
	{ id: 'id_type', label: 'ID Type' },
	{ id: 'id_number', label: 'ID Number' },
	{ id: 'mobile_number', label: 'Mobile Number' },
	{ id: 'email', label: 'Email' },
	{ id: 'status', label: 'Status' },
	{ id: 'action', label: 'Action', disableSorting: true },
]

const EmployeesTable = ({ employees: { employees, employee }, viewMember }) => {
	const history = useHistory()
	const classes = { ...useStyles(), ...EmployeeStyles() }

	const [viewMemberState, setViewMemberState] = useState(false)
	const [tableView, setTableView] = useState(true)

	const [filterFn, setfilterFn] = useState({
		fn: (items) => {
			return items
		},
	})
	const [search, setSearch] = useState()

	const {
		TblContainer,
		TblHead,
		TblPagination,
		employeesAfterPagingAndSorting,
	} = useTable(employees, headCells, filterFn)

	const handleSearch = (e) => {
		setSearch(e.target.value)
	}

	const handleClear = (e) => {
		setSearch('')
	}

	const employeeView = (id) => {
		viewMember(id)
		setViewMemberState(true)
		setTableView(false)
		saveQuery()
		history.push('/employee-view')
	}

	const highligtedText = (source, match) =>
		reactStringReplace(source, match, (match, i) => (
			<Box display='inline' bgcolor='common.highlighted'>
				{match}
			</Box>
		))

	return (
		<>
			<Grid container alignItems='center' style={{ marginBottom: '-10px' }}>
				<Grid className={classes.pageTitle} item lg={3} sm={3} xs={12}>
					<Typography variant='h6' component='div'>
						{intl.labels.searchResult}
					</Typography>
				</Grid>
				<Grid className={classes.pageTitle} item lg={6} sm={6} xs={12}>
					<Box display='flex' justifyContent='flex-end'>
						<AnimatedSearchBar
							placeholder='Quick Search'
							value={search}
							onChange={handleSearch}
							onClear={handleClear}
						/>
					</Box>
				</Grid>
				<Grid className={classes.pageTitle} item lg={3} sm={3} xs={12}>
					<TblPagination />
				</Grid>
			</Grid>
			<TblContainer>
				<TblHead />
				<TableBody>
					{employeesAfterPagingAndSorting().map((emp) => (
						<TableRow key={emp.id}>
							<TableCell style={{ color: '#2D9FC3' }}>
								{highligtedText(emp.mpf_id, search)}
							</TableCell>
							<TableCell>
								{highligtedText(`${emp.first_name} ${emp.last_name}`, search)}
							</TableCell>
							<TableCell>{highligtedText(emp.id_type, search)}</TableCell>
							<TableCell>{highligtedText(emp.id_number, search)}</TableCell>
							<TableCell>{highligtedText(emp.mobile_number, search)}</TableCell>
							<TableCell>{highligtedText(emp.email, search)}</TableCell>
							<TableCell
								style={{
									textTransform: 'capitalize',
								}}
							>
								{highligtedText(emp.status, search)}
							</TableCell>
							<TableCell style={{ padding: '0 1px' }}>
								<img
									src={viewReg}
									alt='View Registration'
									onClick={() => employeeView(emp.id)}
									variant='contained'
									style={{
										margin: '0 5px',
										background: '#EF841F',
										color: '#fff',
									}}
									// className={emp.status === 'inactive' && classes.disabled}
								/>
								<img
									src={viewEnrollActive}
									alt='View Enrollment'
									variant='contained'
									style={{
										margin: '0 5px',
										background: '#EF841F',
										color: '#fff',
									}}
									// className={classes.disabled}
								/>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</TblContainer>
			<TblPagination />
			{viewMemberState && <EmployeeItem employee={employee} />}
		</>
	)
}

EmployeesTable.propTypes = {
	employees: PropTypes.object.isRequired,
	viewMember: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
	employees: state.employees,
})

export default connect(mapStateToProps, { viewMember, saveQuery })(
	EmployeesTable
)
