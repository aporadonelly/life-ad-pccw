import { useFormikContext } from "formik";
import { Button as MuiButton } from "@material-ui/core";
import floatingButtonStyles from "./FloatingButton.styles";
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
  const { handleSubmit, setFieldValue } = useFormikContext();
  const { text, size, color, variant, onClick, ...other } = props;
  // FIX: PROBLEM ON OVERRIDING STYLES BELOW
  const classes = { ...floatingButtonStyles(), ...useStyles() };
  let orangeBtn = false;
  if (text === "ok" || text === "submit") {
    orangeBtn = true;
  }
  return (
    // <Button
    //   type="submit"
    //   variant="contained"
    //   color="primary"
    //   onClick={handleSubmit}
    //   {...props}
    // />

    <MuiButton
      variant={variant || "contained"}
      color={color || "primary"}
      size={size || "large"}
      onClick={(e) => {
        setFieldValue("state", text);
        handleSubmit(e);
      }}
      //onClick={handleSubmit}
      {...other}
      className={
        //text === "submit"
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
