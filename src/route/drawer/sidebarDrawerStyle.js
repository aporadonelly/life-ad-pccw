import { makeStyles } from '@material-ui/styles';

const drawerWidth = 232;
const useStyles = makeStyles(theme => ({
    subToolbar: {
        backgroundColor: "#2D9FC3",
        minHeight: "58px",
    },
    toolbarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerContainer: {
        position: "fixed",
        top: "64px",
        backgroundColor: theme.palette.common.gray98,
        width: drawerWidth,
        
        [theme.breakpoints.down("sm")]: {
            top: "50px",
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
          borderRadius: "6px"
        }
    },
    leftIcon: {
        position: "absolute",
        left: "-20px",
        backgroundColor: "white",
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
}));

export default useStyles;
