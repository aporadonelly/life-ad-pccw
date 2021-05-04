import { makeStyles } from '@material-ui/core/styles'
import { List } from '@material-ui/core'
import MenuItem from './MenuItem'

const useStyles = makeStyles((theme) => ({
	list: {
		padding: theme.spacing(2),
	},
}))

const Menu = (props) => {
	const classes = useStyles()

	return <List className={classes.list} {...props} />
}

Menu.Item = MenuItem

export default Menu
