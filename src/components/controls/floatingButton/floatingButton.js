import React from "react";
import { Button as MuiButton } from "@material-ui/core";
import floatingButtonStyles from "./floatingButtonStyles";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0.5),
  },
  label: {
    textTransform: "uppercase",
  },
}));
const FloatingButton = (props) => {
  const classes = { ...floatingButtonStyles(), ...useStyles() };
  const { text, size, color, variant, onClick, ...other } = props;
  let orangeBtn = false;
  if (text === "okay" || text === "submit") {
    orangeBtn = true;
  }

  return (
    <MuiButton
      variant={variant || "contained"}
      color={color || "primary"}
      size={size || "large"}
      onClick={onClick}
      {...other}
      className={
        orangeBtn === true ? classes.submitBtn : classes.cancelAndSaveBtn
      }
      classes={{
        root: classes.root,
        label: classes.label,
      }}
    >
      {text}
    </MuiButton>
  );
};

export default FloatingButton;
