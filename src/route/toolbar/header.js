import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import ChatBubbleOutlinedIcon from '@material-ui/icons/ChatBubbleOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import avatIcon from '../../assets/icons/avat.jpg';
import moment from 'moment';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { SidebarDrawer } from '../drawer';
import useStyles from './headerStyles';

const Header = (props) => {

    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("lg"));

    const Tabs = (
        <React.Fragment>
             <div className={classes.tabsContainer}>
                 <ChatBubbleOutlinedIcon className={ classes.chatMessage } />
                 <Box className={classes.profileImageAndNameContainer}>
                    <Avatar alt="Remy Sharp" src={avatIcon} className={classes.avatar} />
                     <div className={classes.profileNameContainer}>
                        <p className={classes.profileName}>Rosetto Chong</p>
                        <p className={classes.profilePosition}>Admin Operator</p>
                     </div>
                </Box>
                 <div className={classes.date}>{moment().format('D MMM YYYY').toUpperCase()}</div>
                 <SettingsOutlinedIcon className={classes.settingIcon} />
             </div>
        </React.Fragment>
     );

    return (
        <React.Fragment>
            <AppBar position='fixed' className={classes.appBar}>
                  <Toolbar className={classes.toolbarMargin}>
                      <Typography component={'span'} className={classes.logoAndHeaderContainer}>
                        <Box fontStyle="italic" className={classes.eMPF}>eMPF</Box>
                        <Box className={classes.logoHeading}>Admin Portal</Box>
                      </Typography>
                     {matches ? Tabs : null}
                 </Toolbar>
                 <SidebarDrawer />
            </AppBar>

       </React.Fragment>
    )
}

export default Header;