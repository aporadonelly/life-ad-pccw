import { makeStyles } from '@material-ui/styles';

const drawerWidth = 232;
const drawerWidthSM = 180;
const useStyles = makeStyles(theme => ({
    subToolbar: {
        backgroundColor: "#2D9FC3",
        minHeight: "58px",
    },
    subToolbarTitle: {
        marginLeft: "23px",
        [theme.breakpoints.down("sm")]: {
           fontSize: "0.875em"
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "0.7em"
         },
    },
    toolbarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),

        [theme.breakpoints.down("sm")]: {
            marginLeft: drawerWidthSM,
            width: `calc(100% - ${drawerWidthSM}px)`,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
    },
    drawerContainer: {
        position: "fixed",
        top: "64px",
        backgroundColor: theme.palette.common.gray98,
        width: drawerWidth,
        [theme.breakpoints.down("sm")]: {
            top: "50px",
            width: drawerWidthSM,
        },
    },
    drawerItem: {
        ...theme.typography.tab,
        color: theme.palette.common.fiord,
        opacity: 0.7,
    },
    drawerIconTextMargin: {
      width: "194px",
      height: "36px",
      margin: "5px 18px 19px 18px", 
    },
    drawerItemSelected: {
       backgroundColor: "#EF841F",
       opacity: 1
    },
    selectedActive: {
        color: theme.palette.common.orange,
    },
    hoverSelectedItem: {
        "&:hover": {
          backgroundColor: theme.palette.common.orange,
          color: theme.palette.common.white,
          borderRadius: "6px",
        },
        [theme.breakpoints.down("xs")]: {
            height: "1em",
         },
    },
    leftIcon: {
        position: "absolute",
        left: "-16px",
        backgroundColor: "white",
        width: '30px',
        height: '30px',
        zIndex: theme.zIndex.snackbar,
        "&:hover": {
           backgroundColor: theme.palette.common.white
        },
     },
     leftIconShift: {
        position: "absolute",
        left: "0px",
        backgroundColor: "white",
        zIndex: theme.zIndex.snackbar,
        "&:hover": {
         backgroundColor: theme.palette.common.white
      },
     },
     sideMenuText: {
         fontFamily: theme.typography.tab.fontFamily,
        [theme.breakpoints.down("sm")]: {
           fontSize: "0.875em"
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "0.7em",
         },
     },
}));

export default useStyles;
