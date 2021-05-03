import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
	appBar: {
		[theme.breakpoints.down('sm')]: {
			height: '3.5em',
		},
	},
	toolbarMargin: {
		...theme.mixins.toolbar,
		[theme.breakpoints.down('sm')]: {
			minHeight: '50px',
		},
	},
	logoAndHeaderContainer: {
		display: 'flex',
		alignItems: 'center',
	},
	eMPF: {
		fontFamily: 'Roboto',
		fontSize: '26px',
		fontWeight: 'Bold',
		paddingRight: '11px',
		marginLeft: '14px',
		[theme.breakpoints.down('md')]: {
			height: '1.5em',
		},
		[theme.breakpoints.down('sm')]: {
			height: '1.5em',
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '1.3em',
			height: '1.5em',
		},
	},
	logoHeading: {
		fontSize: '1.3rem',
		[theme.breakpoints.down('md')]: {
			fontSize: '1rem',
			height: '1.5em',
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: '0.9rem',
			height: '1.5em',
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '0.7rem',
			height: '2.5em',
		},
	},
	tabsContainer: {
		marginLeft: 'auto',
		width: '34%',
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		[theme.breakpoints.down('md')]: {
			fontSize: '0.9rem',
			width: '45%',
		},
		[theme.breakpoints.down('sm')]: {
			width: '80%',
		},
		[theme.breakpoints.down('xs')]: {
			display: 'flex',
			justifyContent: 'space-evenly',
			width: '80%',
		},
	},
	chatMessage: {
		fontSize: '2rem',
		marginRight: '1.5rem',
		[theme.breakpoints.down('xs')]: {
			fontSize: '1.2rem',
			marginRight: '0.6rem',
		},
	},
	profileImageAndNameContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: '0.5rem',
	},
	profileNameContainer: {
		display: 'flex',
		flexDirection: 'column',
		[theme.breakpoints.down('xs')]: {
			margin: 'auto',
		},
	},
	profileName: {
		margin: 'auto 5px',
		fontFamily: 'Roboto',
		fontSize: '1rem',
		paddingLeft: '0.2rem',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1rem',
			marginLeft: '0.2rem',
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '0.6rem',
			marginLeft: 'auto',
		},
	},
	profilePosition: {
		margin: '0px 0px 0px 8px',
		fontSize: '0.7rem',
		fontFamily: 'Roboto',
		[theme.breakpoints.down('md')]: {
			marginLeft: '0.6rem',
		},
		[theme.breakpoints.down('sm')]: {
			marginLeft: '0.6rem',
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '0.5rem',
			marginLeft: '5%',
		},
	},
	date: {
		fontFamily: 'Roboto',
		marginRight: '12px',
		[theme.breakpoints.down('xs')]: {
			fontSize: '0.6rem',
			marginRight: '0.2rem',
		},
	},
	avatar: {
		[theme.breakpoints.down('xs')]: {
			width: '32px',
			height: '32px',
		},
	},
	flipIcon: {
		fontSize: '1.5rem',
		marginRight: '10px',
		[theme.breakpoints.down('xs')]: {
			fontSize: '1.5rem',
		},
	},
	profileIconContainer: {
		backgroundSize: 'cover',
		alignSelf: 'center',
		width: '36px',
		height: '36px',
		[theme.breakpoints.down('xs')]: {
			width: '24px',
			height: '24px',
		},
	},
}))

export default useStyles
