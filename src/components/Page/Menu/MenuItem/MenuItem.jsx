import { makeStyles } from '@material-ui/core'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
	root: {
		borderRadius: theme.shape.borderRadius,
		'& + &': {
			marginTop: theme.spacing(2),
		},
		'& > :first-child': {
			minWidth: 35,
			color: theme.palette.secondary.main,
		},
		'&:not(&$selected):hover': {
			backgroundColor: theme.palette.common.orange,
			'& > *': {
				color: theme.palette.common.white,
			},
		},
		'&$selected': {
			backgroundColor: 'transparent',
			'& > *': {
				color: theme.palette.common.orange,
			},
			'&:hover': {
				backgroundColor: 'transparent',
			},
		},
	},
	selected: {},
}))

const MenuItem = ({ href, name, icon }) => {
	const classes = useStyles()

	return (
		<ListItem className={classes.root} component={Link} to={href} button dense>
			<ListItemIcon>{icon}</ListItemIcon>
			<ListItemText primary={name} />
		</ListItem>
	)
}

export default MenuItem
