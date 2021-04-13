import React, { useState } from "react";
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import IconButton from '@material-ui/core/IconButton';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import PrintOutlinedIcon from '@material-ui/icons/PrintOutlined';
import PeopleOutlineOutlinedIcon from '@material-ui/icons/PeopleOutlineOutlined';
import RecordVoiceOverOutlinedIcon from '@material-ui/icons/RecordVoiceOverOutlined';
import GavelOutlinedIcon from '@material-ui/icons/GavelOutlined';
import PublicOutlinedIcon from '@material-ui/icons/PublicOutlined';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory, useLocation } from 'react-router-dom';
import useStyles from "./sidebarDrawerStyle";

const SidebarDrawer = () => {
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const [openDrawer, setOpenDrawer] = useState(true);
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation()

    const sideDrawerItem = [
        {
            text: 'Dashboard',
            icons: <HomeOutlinedIcon color="secondary" />,
            path: '/'
        },
        {
            text: 'Enquires',
            icons: <SearchIcon color="secondary" />,
            path: '/enquires'
        },
        {
            text: 'Trustee',
            icons: <AccountBalanceOutlinedIcon color="secondary" />,
            path: '/trustee'
        },
        {
            text: 'Company',
            icons: <BusinessOutlinedIcon color="secondary" />,
            path: '/company'
        },
        {
            text: 'Indivdual',
            icons: <PersonOutlineOutlinedIcon color="secondary" />,
            path: '/individual'
        },
        {
            text: 'Employer',
            icons: <PrintOutlinedIcon color="secondary" />,
            path: '/employer'
        },
        {
            text: 'Employee',
            icons: <PeopleOutlineOutlinedIcon color="secondary" />,
            path: '/employee'
        },
        {
            text: 'Agent',
            icons: <RecordVoiceOverOutlinedIcon color="secondary" />,
            path: '/agent'
        },
        {
            text: 'General Legar',
            icons: <GavelOutlinedIcon color="secondary" />,
            path: '/legar'
        },
        {
            text: 'Correspondenses',
            icons: <PublicOutlinedIcon color="secondary" />,
            path: '/correspondenses'
        },
    ]

        const Drawer = (
        <React.Fragment>
            <SwipeableDrawer 
               variant="persistent"
               disableBackdropTransition={!iOS} 
               disableDiscovery={iOS} 
               open={openDrawer} 
               onClose={() => setOpenDrawer(false)}
               onOpen={() => setOpenDrawer(true)}
               classes={{ paper: classes.drawerContainer }}>
                   <List>
                       {sideDrawerItem.map(item => (
                           <ListItem 
                              button 
                              key={item.text}
                              className={clsx(classes.drawerIconTextMargin, location.pathname === item.path ? classes.selectedActive : classes.hoverSelectedItem)} 
                              onClick={() => {history.push(item.path); setOpenDrawer(false)}}
                            >
                               <div style={{ width: "35px" }}>{item.icons}</div>
                               <ListItemText>{item.text}</ListItemText>
                           </ListItem>
                       ))}
                   </List>
            </SwipeableDrawer>
            <IconButton 
              className={openDrawer ? classes.leftIcon : classes.leftIconShift}
               size="small"
               onClick={() => setOpenDrawer(!openDrawer)}>
                <ChevronLeftIcon fontSize="large" color="secondary" />
            </IconButton>
        </React.Fragment>
    )

    return (
        <React.Fragment>
            <Toolbar className={clsx(classes.subToolbar, {
                    [classes.toolbarShift]: openDrawer,
                })} >
                <Typography style={{ marginLeft: "23px" }}>Employee / Member Enqueries</Typography>
                {Drawer}
            </Toolbar>
    </React.Fragment> 
    );
}

export default SidebarDrawer;