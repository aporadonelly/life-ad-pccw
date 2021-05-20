import { makeStyles } from "@material-ui/styles";

const drawerWidth = 232;
const useStyles = makeStyles((theme) => ({
  paperContainer: {
    height: "148px",
    display: "flex",
    flexDirection: "column",
    margin: "25px 49px 0px 42px",
    borderRadius: "15px",
    opacity: 1,
  },
  paperContentContainer: {
    margin: "25px 15px 0px 31px",
  },
  labelAndValueContainer: {
    marginTop: "18px",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  paperLabelTitle: {
    textAlign: "left",
    font: "normal normal bold 26px/28px Roboto",
    letterSpacing: "0px",
    color: "#009CCD",
    opacity: 1,
  },
  labels: {
    textAlign: "left",
    font: "normal normal normal 13px/15px Roboto",
    letterSpacing: "0px",
    color: "#42526E",
    opacity: 1,
  },
  textValueWithColor: {
    textAlign: "left",
    font: "normal normal medium 16px/20px Roboto",
    letterSpacing: "0px",
    color: "#2D9FC3",
    opacity: 1,
  },
  textValue: {
    textAlign: "left",
    font: "normal normal medium 16px/31px Roboto",
    letterSpacing: "0px",
    color: "#42526E",
    opacity: 1,
    fontWeight: "bold",
  },
  // termination form
  terminationOuterContainer: {
    backgroundColor: "#FFFFFF",
    margin: "25px 49px 0px 42px",
    borderRadius: "15px",
    opacity: 1,
    marginBottom: "188px",
  },
  terminationInnerContainer: {
    margin: "0px 15px 0px 31px",
    paddingTop: "20px",
    paddingBottom: "34px",
  },
  terminationDetailContentContainer: {
    margin: "18px 0px 0px 0px",
    display: "flex",
    flexWrap: "wrap",
  },
  terminationTitle: {
    font: "normal normal bold 26px/28px Roboto",
    letterSpacing: "0px",
    color: "#009CCD",
    opacity: 1,
  },
  datepickers: {
    display: "flex",
    flexDirection: "column",
    marginRight: "3em",
    marginBottom: "20px",
  },
  floatingBottomMenu: {
    position: "fixed",
    bottom: 0,
    background: "#42526E 0% 0% no-repeat padding-box",
    opacity: 0.77,
    width: `calc(100% - ${drawerWidth}px)`,
    height: "76px",
  },
  floatingButton: {
    display: "flex",
    flexDirection: "row",
    height: "76px",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "38px",
  }, // added
  mgTop: {
    marginTop: "1rem",
  },
  mgRight: {
    marginRight: "2.5rem",
  },
  lspRow: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  effDateTop: {
    // followed pattern previously made
    display: "flex",
    marginTop: "25px",
  },
  effDateInside: {
    display: "flex",
    flexDirection: "column",
    marginRight: "43px",
    marginTop: "20px",
  },
  imgCheck: {
    width: "4rem",
    height: "4rem",
  },
  dialogContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  dialogText: {
    marginLeft: "1rem",
    fontSize: "1.4rem",
    color: "grey",
    flexWrap: "wrap",
  },
  btnContainer: {
    marginTop: "1rem",
    display: "flex",
    justifyContent: "center",
  },
  schemeUl: {
    listStyleType: "none",
    listStylePosition: "inside",
    margin: 0,
    padding: 0,
    //listStyle: "none",
    // display: "flex",
    // marginTop: "20px",
    // flexDirection: "column",
    // flexWrap: "wrap",
    // height: "240px",
    // alignContent: "flex-start",
  },
  schemeGrid: {
    display: "flex",
    marginTop: "20px",
    paddingRight: "28px",
  },
  // schemeBox: {
  //   flex: "0 0 300px",
  //   width: "300px",
  //   marginRight: "20px",
  //   display: "flex",
  //   justifyContent: "space-around",
  // },
  schemeAvatar: {
    width: "30px",
    height: "30px",
    backgroundColor: "#2D9FC3",
    marginRight: "23px",
  },
}));

export default useStyles;
