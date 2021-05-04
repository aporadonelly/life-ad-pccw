import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as MuiLink } from '@material-ui/core'

const Link = (props) => <ReactRouterLink component={MuiLink} {...props} />

export default Link
