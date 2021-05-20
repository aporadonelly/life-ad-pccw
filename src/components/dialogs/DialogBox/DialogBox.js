import React, { useEffect } from "react";
import { useStyles } from "./styles";
import { Backdrop, Container, Paper, ButtonBase } from "@material-ui/core";
import { Cancel as CancelIcon } from "@material-ui/icons";
import FloatingButton from "@components/controls/floatingButton/floatingButton";
import CheckMark from "../../../assets/icons/Checkmark.png";
import XMark from "../../../assets/icons/x-mark-1.png";
import QMark from "../../../assets/icons/Question.png";

const DialogBox = ({ open, onClose, children, msgCode }) => {
  const classes = useStyles();

  const renderDialogContent = () => {
    let msgDialog = "",
      imgType = "",
      btnType = "";
    if (msgCode === "ExMsg_SvdSccss") {
      msgDialog = "Record is saved successfully.";
      imgType = (
        <img
          src={CheckMark}
          alt="Checked"
          variant="contained"
          className={classes.imgDialog}
        />
      );
      btnType = <FloatingButton text="ok" onClick={onClose} />;
    }

    if (msgCode === "ExMsg_CnclPrcss") {
      msgDialog = "Are you sure to cancel the process?";
      imgType = (
        <img
          src={QMark}
          alt="Question"
          variant="contained"
          className={classes.imgDialog}
        />
      );
      btnType = (
        <div className={classes.dialogContainer}>
          <FloatingButton text="yes" onClick={onClose} />
          <FloatingButton text="no" onClick={onClose} />
        </div>
      );
    }

    return (
      <>
        <div className={classes.dialogContainer}>
          {imgType}
          <div className={classes.dialogText}>{msgDialog}</div>
        </div>
        <div className={classes.btnContainer}>{btnType}</div>
      </>
    );
  };

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
          {renderDialogContent()}
          {/* {children} */}
        </Paper>
      </Container>
    </Backdrop>
  );
};

export default DialogBox;
