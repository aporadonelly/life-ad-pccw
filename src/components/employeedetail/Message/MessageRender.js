import React from "react";
import CheckMark from "../../../assets/icons/Checkmark.png";
import XMark from "../../../assets/icons/x-mark-1.png";
import QMark from "../../../assets/icons/Question.png";
import ExclamationMark from "../../../assets/icons/Exclamation.png";
import { DialogBox } from "@components/dialogs";
import { useStyles } from "./MessageStyles";
import { Form as FormikForm } from "@components/common";
import FloatingButton from "@components/controls/floatingButton/floatingButton";

const MessageRender = ({ open, onClose, msgCode }) => {
  const classes = useStyles();

  const renderDialogContent = () => {
    let msgDialog = "",
      imgType = "",
      btnType = "";

    switch (msgCode) {
      case "ExMsg_SvdSccss":
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
        break;
      case "ExMsg_CnclPrcss":
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
            {/* <FormikForm.Reset>Yes</FormikForm.Reset> */}

            <FloatingButton
              className={classes.btnReverse}
              text="yes"
              onClick={onClose}
            />
            <FloatingButton text="no" onClick={onClose} />
          </div>
        );
        break;
      case "ExMsg_incrrtLDOE":
        msgDialog = "Incorrect last date of employment.";
        imgType = (
          <img
            src={ExclamationMark}
            alt="Checked"
            variant="contained"
            className={classes.imgDialog}
          />
        );
        btnType = <FloatingButton text="ok" onClick={onClose} />;
        break;
      default:
        break;
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
    <>
      <DialogBox
        open={open}
        onClose={onClose}
        children={renderDialogContent()}
      />
    </>
  );
};

export default MessageRender;
