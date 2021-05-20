import React from "react";
import FloatingButton from "@components/controls/floatingButton/floatingButton";
import useStyles from "@components/controls/floatingButton/floatingButtonStyles";
import { Form as FormikForm } from "@components/common";

const BottomMenuBar = ({ resetForm, onSave, onCancel, onSubmit }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div classes={{ root: classes.floatRight }}>
        <FloatingButton
          style={{ marginLeft: "19px" }}
          data-testid="cancel-btn"
          text="cancel"
          color="secondary"
          onClick={onCancel}
        />
        {/* <FloatingButton
          style={{ marginLeft: "19px" }}
          data-testid="cancel-btn"
          text="save"
          color="secondary"
          onClick={onSave}
        /> */}
        <FormikForm.FloatingButton text="save" />
        {/* <FloatingButton
          style={{ marginLeft: "19px" }}
          type="submit"
          data-testid="submit-btn"
          text="submit"
          handleSubmit={onSubmit}
        /> */}
        {/* <FormikForm.Submit fullWidth>
          <FloatingButton>{"SUBMIT"}</FloatingButton>
        </FormikForm.Submit> */}
        <FormikForm.FloatingButton text="submit" />
      </div>
    </React.Fragment>
  );
};

export default BottomMenuBar;
