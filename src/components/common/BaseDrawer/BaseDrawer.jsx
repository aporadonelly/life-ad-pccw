import { makeStyles } from '@material-ui/core/styles'
import { Drawer, Toolbar } from '@material-ui/core'

const width = 240

const useStyles = makeStyles((theme) => ({
	paper: {
		width: width,
		border: 0,
		boxShadow: '0px 2px 10px #BFBEBE96',
	},
	container: {
		overflow: 'auto',
	},
}))

const BaseDrawer = ({ children, ...props }) => {
	const styles = useStyles()

	return (
		<Drawer classes={{ paper: styles.paper }} {...props}>
			<Toolbar />
			<div className={styles.container}>{children}</div>
		</Drawer>
	)
}

BaseDrawer.width = width

export default BaseDrawer
