// import { useStyles } from "./styles";
// import {
//   Dialog,
//   DialogContent,
//   DialogContentText,
//   Button,
//   IconButton,
// } from "@material-ui/core";
// import CancelIcon from "@material-ui/icons/Cancel";

// const DialogBox = ({ open, onClose }) => {
//   const classes = useStyles();

//   return (
//     <Dialog
//       PaperProps={{ className: classes.paper, elevation: 0 }}
//       maxWidth="xs"
//       open={true}
//       onClose={onClose}
//     >
//       <IconButton className={classes.closeButton}>
//         <CancelIcon fontSize="large" color="inherit" />
//       </IconButton>
//       <DialogContent className={classes.content}>
//         <DialogContentText id="alert-dialog-description">
//           Let Google help apps determine location. This means sending anonymous
//           location data to Google, even when no apps are running.
//         </DialogContentText>
//         <Button size="small">Ok</Button>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default DialogBox;

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
