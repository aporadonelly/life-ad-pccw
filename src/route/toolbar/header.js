import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/styles';
import ChatBubbleOutlinedIcon from '@material-ui/icons/ChatBubbleOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import avatIcon from '../../assets/icons/avat.jpg';
import moment from 'moment';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import SidebarDrawer from '../drawer/sidebarDrawer';

const useStyles = makeStyles(theme => ({
    
    appBar: {
        [theme.breakpoints.down("sm")]: {
            height: "3.5em",
        },
    },
    toolbarMargin: {
        ...theme.mixins.toolbar,
      [theme.breakpoints.down("sm")]: {
         minHeight: "50px",
      },
    },
    logoAndHeaderContainer: {
        display: 'flex', 
        alignItems: 'center',
    },
    eMPF: {
        fontFamily: "Roboto",
        fontSize: "26px",
        fontWeight: "Bold",
        paddingRight: "11px",
        marginLeft: "14px",
        [theme.breakpoints.down("md")]: {
            fontSize: "1.5em",
            height: "1.5em"
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.3em",
            height: "1.5em"
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "1.3em",
            height: "1.5em"
        },
      },
    logoHeading: {
        fontSize: '1.3rem',
        [theme.breakpoints.down("md")]: {
            fontSize: "1rem",
            height: "1.5em"
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "0.9rem",
            height: "1.5em"
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "0.9rem",
            height: "1.5em"
        },
    },
    tabsContainer: {
        marginLeft: "auto",
        display: 'flex', 
        alignItems: 'center',
        justifyContent: "space-evenly",
        width: "40%",
    },
    profileImageAndNameContainer: {
        display: "flex", 
        flexDirection: "row"
    },
    profileNameContainer: {
        display: "flex",
        flexDirection: "column",
        alignSelf: "center"
    },
    profileName: {
        margin: 'auto', 
        paddingLeft: "12px", 
        fontFamily: 'Roboto', 
        fontSize: '1rem' 
    },
    profilePosition: {
        margin: 'auto', 
        fontSize: '0.8rem', 
        fontFamily: 'Roboto'
    }
   
}));

const Header = (props) => {

    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("lg"));

    const Tabs = (
        <React.Fragment>
             <div className={classes.tabsContainer}>
                 <ChatBubbleOutlinedIcon fontSize="large" />
                 <Box className={classes.profileImageAndNameContainer}>
                    <Avatar alt="Remy Sharp" src={avatIcon} />
                     <div className={classes.profileNameContainer}>
                        <p className={classes.profileName}>Rosetto Chong</p>
                        <p className={classes.profilePosition}>Admin Operator</p>
                     </div>
                </Box>
                 <div style={{ fontFamily: 'Roboto' }}>{moment().format('D MMM YYYY').toUpperCase()}</div>
                 <SettingsOutlinedIcon style={{  fontSize: '2rem' }} />
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
            {/* <div className={classes.toolbarMargin}>
                { children }
            </div> */}

       </React.Fragment>
    )
}

export default Header;