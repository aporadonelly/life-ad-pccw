import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  imgDialog: {
    width: "4rem",
    height: "4rem",
  },
  btnContainer: {
    marginTop: "1rem",
    display: "flex",
    justifyContent: "center",
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
  btnReverse: {
    margin: theme.spacing(0.5),
    font: "normal normal Bold 14px/24px Roboto",
    width: "107px",
    height: "38px",
    border: `2px solid #fff`,
    borderRadius: "19px",
    opacity: 1,
    color: "#fff",
    background: "#42526E 0% 0% no-repeat padding-box",
    "&:hover": {
      backgroundColor: "#EF841F",
      border: `2px solid #EF841F`,
      boxShadow: `0px 2px 8px`,
      color: "#fff",
    },
  },
  errorLabel: {
    color: "#ef5350",
  },
}));

export { useStyles };
