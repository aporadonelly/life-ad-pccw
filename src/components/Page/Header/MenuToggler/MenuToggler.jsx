import { useAppState } from '@contexts/AppProvider'
import { IconButton, Hidden } from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'

const MenuToggler = () => {
	const { siderToggled } = useAppState()

	return (
		<Hidden smUp implementation='css'>
			<IconButton color='inherit' onClick={siderToggled}>
				<MenuIcon />
			</IconButton>
		</Hidden>
	)
}

export default MenuToggler
