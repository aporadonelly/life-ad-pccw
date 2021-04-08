import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/styles';
import chatIcon from "../../assets/icons/chat.svg";
import avatIcon from '../../assets/icons/avat.jpg';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import moment from 'moment';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    appBar: {
        [theme.breakpoints.down("sm")]: {
            height: "3.5em",
        },

    },
    toolbarMargin: {
        ...theme.mixins.toolbar,
      [theme.breakpoints.down("md")]: {
            height: "2.5em",
      },
      [theme.breakpoints.down("sm")]: {
         minHeight: "50px"
      },
    },
    tab: {
      ...theme.typography.tab,
      minWidth: 10, 
    },
    // small: {
    //     width: theme.spacing(3),
    //     height: theme.spacing(3),
    // },
    // large: {
    //     width: theme.spacing(7),
    //     height: theme.spacing(7),
    //   },
    logoAndHeaderContainer: {
        display: 'flex', 
        alignItems: 'center',
    },
    empf: {
        fontFamily: "Roboto",
        fontSize: "26px",
        fontWeight: "Bold",
        paddingRight: "11px",
        [theme.breakpoints.down("md")]: {
            fontSize: "1.5em",
            height: "1.5em"
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.3em",
            height: "1em"
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
            height: "0.5em"
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "0.9rem",
            height: "1.5em"
        },
    }
}));

const Header = (props) => {

    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <React.Fragment>
            <AppBar position='fixed' className={classes.appBar}>
                  <Toolbar className={classes.toolbarMargin}>
                      <Typography component={'span'} className={classes.logoAndHeaderContainer}>
                        <Box fontStyle="italic" className={classes.empf}>eMPF</Box>
                        <Box className={classes.logoHeading}>Admin Portal</Box>
                      </Typography>
                      {matches ? null : Tabs}
                 </Toolbar>
            </AppBar>
            <div className={classes.toolbarMargin}></div>
       </React.Fragment>
    )
}

const Tabs = (
    <React.Fragment>
         <div style={{
                    marginLeft: "auto",
                    display: 'flex', 
                    alignItems: 'center',
                }}>
             <img alt="chat icon" src={chatIcon} style={{ width: '50px', height: '50px', margin: '0px 10px' }} />
             <Avatar alt="Remy Sharp" src={avatIcon} />
                 <div style={{ display: 'flex', flexDirection: 'column', margin: '0px auto 0px 0px' }}>
                 <p style={{ margin: '0px', fontFamily: 'Roboto', fontSize: '1rem' }}>Rosetto Chong</p>
                 <p style={{ margin: 'auto', fontSize: '0.8rem', fontFamily: 'Roboto' }}>Admin Operator</p>
                 </div>
             <div style={{ fontFamily: 'Roboto', margin: '0px 10px 0px 10px' }}>{moment().format('D MMM YYYY').toUpperCase()}</div>
             <SettingsOutlinedIcon style={{ display: 'flex', alignSelf: 'center', fontSize: '2rem' }} />
         </div>
    </React.Fragment>
 );

export default Header;