import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  titleLabel: {
    textAlign: "left",
    font: "normal normal bold 26px/28px Roboto",
    letterSpacing: "0px",
    color: "#009CCD",
    opacity: 1,
  },
  compRegInfor: {
    marginTop: "13px"
  },
  supportingDocsLabel: {
    textAlign: "left",
    font: "normal normal bold 14px/16px Roboto",
    letterSpacing: "0px",
    color: "#42526E",
    opacity: 1,
  },
  supportingDocsValue: {
    textAlign: "left",
    font: "normal normal medium 14px/31px Roboto",
    letterSpacing: "0px",
    color: "#42526E",
    opacity: 1,
  }
}));

export default useStyles;