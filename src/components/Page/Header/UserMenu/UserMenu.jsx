import { useMemo } from 'react'
import { useAppState } from '@contexts/AppProvider'
import { makeStyles } from '@material-ui/core/styles'
import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import { UserPlaceholder as UserPlaceholderIcon } from '@components/icons'

const useStyles = makeStyles((theme) => ({
	item: {
		padding: theme.spacing(0, 1.5, 0, 1),
	},
	itemAvatar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	avatar: {
		width: theme.spacing(4.25),
		height: theme.spacing(4.25),
	},
}))

const UserMenu = () => {
	const classes = useStyles()
	const {
		user: { firstName, lastName, role },
	} = useAppState()

	const fullName = useMemo(
		() => [firstName, lastName].filter(Boolean).join(' '),
		[firstName, lastName]
	)

	return (
		<List disablePadding>
			<ListItem className={classes.item} button>
				<ListItemAvatar className={classes.itemAvatar}>
					<UserPlaceholderIcon className={classes.avatar} />
				</ListItemAvatar>
				<ListItemText
					primary={fullName}
					secondary={role}
					primaryTypographyProps={{ variant: 'body2' }}
					secondaryTypographyProps={{ variant: 'caption', color: 'inherit' }}
				/>
			</ListItem>
		</List>
	)
}

export default UserMenu
