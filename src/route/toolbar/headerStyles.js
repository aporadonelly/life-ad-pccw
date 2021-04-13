import { makeStyles } from '@material-ui/styles';

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
            fontSize: "0.7rem",
            height: "2.5em"
        },
    },
    tabsContainer: {
        marginLeft: "auto",
        display: 'flex', 
        alignItems: 'center',
        justifyContent: "space-evenly",
        width: "40%",
        [theme.breakpoints.down("sm")]: {
            fontSize: "0.9rem",
            width: "60%",
        },
        [theme.breakpoints.down("xs")]: {
            width: "80%",
        },
    },
    chatMessage: {
        fontSize: "2rem",
        [theme.breakpoints.down("xs")]: {
            fontSize: "1.2rem",
        },
    },
    profileImageAndNameContainer: {
        display: "flex", 
        flexDirection: "row",
        
    },
    profileNameContainer: {
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        
    },
    profileName: {
        margin: 'auto', 
        paddingLeft: "12px", 
        fontFamily: 'Roboto', 
        fontSize: '1rem',
        [theme.breakpoints.down("xs")]: {
            fontSize: "0.6rem",
        },
    },
    profilePosition: {
        margin: 'auto', 
        fontSize: '0.8rem', 
        fontFamily: 'Roboto',
        [theme.breakpoints.down("xs")]: {
            fontSize: "0.5rem",
        },
    },
    date: {
       fontFamily: 'Roboto',
       [theme.breakpoints.down("xs")]: {
        fontSize: "0.6rem",
       },
    },
    avatar: {
        [theme.breakpoints.down("xs")]: {
          width: "32px",
          height: "32px"
        },
    },
    settingIcon: {
        fontSize: "2rem",
        [theme.breakpoints.down("xs")]: {
            fontSize: "1.5rem",
        },
    }
   
}));

export default useStyles;