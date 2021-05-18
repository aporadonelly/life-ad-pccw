import { useStyles } from "./styles";
import { Backdrop, Container, Paper, ButtonBase } from "@material-ui/core";
import { Cancel as CancelIcon } from "@material-ui/icons";

const DialogBox = ({ open, onClose, children }) => {
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open={open}>
      <Container maxWidth="xs">
        <Paper className={classes.paper} elevation={0}>
          <ButtonBase
            className={classes.closeButton}
            disableTouchRipple
            onClick={onClose}
          >
            <CancelIcon color="inherit" />
          </ButtonBase>
          {children}
        </Paper>
      </Container>
    </Backdrop>
  );
};

export default DialogBox;
