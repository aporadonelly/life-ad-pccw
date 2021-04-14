import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Icon from '@material-ui/core/Icon';
import { ProfilePic, SettingsIcon, Group80 } from '../../assets/icons';
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
                <Box className={classes.profileImageAndNameContainer}>
                    <Icon className={classes.profileIconContainer}>
                        <img style={{ height: "100%" }} src={ProfilePic} />
                    </Icon>
                    <div className={classes.profileNameContainer}>
                        <p className={classes.profileName}>Rosetta Chan</p>
                        <p className={classes.profilePosition}>Admin Operator</p>
                    </div>
                </Box>
                <Icon style={{ marginRight: "10px", alignSelf: "center" }}>
                    <img style={{ height: "90%" }} src={Group80} />
                </Icon>
                <div className={classes.date}>{moment().format('D MMM YYYY').toUpperCase()}</div>
                <Icon style={{ alignSelf: "center" }}>
                    <img style={{ height: "100%" }} src={SettingsIcon} />
                </Icon>
                
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