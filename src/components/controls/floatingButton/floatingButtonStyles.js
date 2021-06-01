import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../../assets/styleGuide";

const FloatingButtonStyles = makeStyles((theme) => ({
  root: {
    // '& .MuiFormControl-root': {
    //   width: '100%',
    // },
  },
  label: {
    marginTop: "-20px",
    fontFamily: "Roboto",
    color: colors.titleColor,
    fontSize: "26px",
    fontWeight: "Bold",
    opacity: 1,
    textAlign: "left",
    height: "30px",
    letterSpacing: "0px",
    padding: "1rem 0 0.5rem",
  },
  submitBtn: {
    background: `${colors.orange} 0% 0% no-repeat padding-box`, // EF841F
    font: "normal normal Bold 14px/24px Roboto",
    margin: theme.spacing(0.5),
    width: "107px",
    height: "38px",
    letterSpacing: "0.5px",
    opacity: 1,
    borderRadius: "19px",
    "&:hover": {
      backgroundColor: colors.orange,
      boxShadow: `0px 2px 8px ${colors.black}`,
    },
  },
  cancelAndSaveBtn: {
    margin: theme.spacing(0.5),
    font: "normal normal Bold 14px/24px Roboto",
    width: "107px",
    height: "38px",
    border: `2px solid ${colors.white}`,
    borderRadius: "19px",
    opacity: 1,
    color: colors.white,
    background: "#42526E 0% 0% no-repeat padding-box",
    "&:hover": {
      backgroundColor: colors.orange,
      border: `2px solid ${colors.orange}`,
      boxShadow: `0px 2px 8px ${colors.black}`,
      color: colors.white,
    },
  },
  floatRight: {
    marginLeft: "auto",
  },
  centerBtn: {
    justifyContent: "center",
  },
}));
export default FloatingButtonStyles;
