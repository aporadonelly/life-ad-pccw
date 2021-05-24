import { Avatar, Grid, Paper } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { add_employee_details } from "../../actions/employeesActions";
import AlertDialog from "../../common/confirmMessage";
import { labels } from "../../common/labelsList";
import BottomMenuBar from "../../menu/toolbar/bottomMenuBar";
import Controls from "../controls/Controls";
import { Form as FormikForm } from "@components/common";
import { AuthWrapper } from "@hocs";

import { Form, useForm } from "../UseForm";
import useStyles from "./EmployeeDetailStyles";
import EnhancedTable from "./supportingDocumentsTable";
import * as employeeMockData from "../../pages/employees/mockData/mockData";
//import MsgDialog from "@components/controls/FormDialog";

import EmpScheme from "./EmployeeScheme";
import EmpScheme2 from "./EmployeeScheme2";
import EmpScheme3 from "./EmployeeScheme3";
import EmpScheme4 from "./EmployeeScheme4";

import moment from "moment";
import { bindActionCreators } from "redux";
import * as yup from "yup";
import { Formik, useFormikContext } from "formik";
import { PageInner } from "@components/layout";
import { DialogBox } from "@components/dialogs";
import { Button } from "@material-ui/core";
import BottomAppBar from "../../components/misc/BottomAppBar/BottomAppBar";
import FloatingButton from "@components/controls/floatingButton/floatingButton";
import CheckMark from "@assets/icons/Checkmark.png";
import XMark from "../../assets/icons/x-mark-1.png";

import { Cancel as CancelIcon } from "@material-ui/icons";
// import { loadEmpSchemes } from "@redux/features/employees/termination/actions";
// import { clientSchemesSelector } from "@redux/features/employees/termination/selectors";

const EmployeeDetails2 = (props) => {
  const { clientSchemes, reason, valid, validTermination } = props;
  //console.log(data);
  const initialValues = {
    state: "",
    lastDateOfEmployment: "",
    terminationReasonId: "",
    effective_date_of_termination: "",
    entitleToLspsp: "",
    lspspTypeId: "",
    lspspEntitlementAmount: "",
    // orsoOffsetAmount: "",
    // effective_date: moment("").format("YYYY/MM/DD"),
    // change_date: moment("").format("YYYY/MM/DD"),
    // schemes: employeeMockData.getScheme_LSP_SP_offect_sequence(),
  };

  const validationSchema = yup.object().shape({
    lastDateOfEmployment: yup.string(),
    terminationReasonId: yup.string(), //.required("Please pick a reason"),
    effective_date_of_termination: yup.date(),
    entitleToLspsp: yup.string(),
  });

  const classes = useStyles();
  const [LSP_SP_Disable, setLSP_SP_Disable] = useState(false);
  const [open, setOpen] = useState(false);
  const [btnStatus, setBtnStatus] = useState("");

  const formikHandleSubmit = (values, actions) => {
    actions.setTouched({
      lastDateOfEmployment: true,
      terminationReasonId: true,
      effective_date_of_termination: true,
      entitleToLspsp: true,
      lspspTypeId: true,
      lspspEntitlementAmount: true,
    });
    actions.validateForm();
    console.log(values);
  };

  return (
    <React.Fragment>
      <PageInner>
        {/* </Form> */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => formikHandleSubmit(values, actions)}

          //onReset={formikHandleReset}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setFieldValue,
            resetForm,
            validateForm,
            setTouched,
          }) => {
            return (
              <Form>
                <Paper
                  className={classes.terminationOuterContainer}
                  elevation={3}
                >
                  <div className={classes.terminationInnerContainer}>
                    <div className={classes.terminationTitle}>
                      {labels.terminationTitle}
                    </div>
                    {/* // FIX: PENDING FORMIK VALIDATION */}

                    <div className={classes.terminationDetailContentContainer}>
                      <Grid item sm={3} xs={12} className={classes.datepickers}>
                        <span className={classes.labels}>
                          {labels.last_date}
                        </span>
                        <FormikForm.DatePicker
                          name="lastDateOfEmployment"
                          //value={formValues.lastDateOfEmployment}
                          helperText="YYYYMMDD"
                        />
                      </Grid>

                      <Grid item sm={3} xs={12} className={classes.datepickers}>
                        <span className={classes.labels}>
                          {labels.termination_reason}
                        </span>
                        <FormikForm.Select
                          name="terminationReasonId"
                          data={{
                            options: reason,
                            label: (option) => option.cstmTypDtlTxt,
                            value: (option) => option.cstmTypId,
                          }}
                        />
                      </Grid>
                      <Grid item sm={3} xs={12} className={classes.datepickers}>
                        <span className={classes.labels}>
                          {labels.effectiveDate}
                        </span>
                        <FormikForm.DatePicker
                          name="effective_date_of_termination"
                          //onChange={handleInputChange}
                          //value={formValues.effective_date_of_termination}
                          defaultValue={""}
                          helperText="YYYYMMDD"
                        />
                      </Grid>
                    </div>
                    <div className={classes.labels}>{labels.entitle_to}</div>
                    <FormikForm.RadioGroup
                      row
                      name="entitleToLspsp"
                      //onChange={handleInputChange}
                      //onClick={disableLSP_SP}
                      //value={formValues.entitleToLspsp}
                      data={employeeMockData.getEntitle_LSP_SP_items()}
                      helperText="Please select Yes or No"
                    />

                    <Grid
                      item
                      sm={3}
                      xs={12}
                      className={`${classes.mgTop} ${classes.mgRight}`}
                    >
                      <div className={classes.labels}>{labels.entitle_lsp}</div>
                      <FormikForm.RadioGroup
                        row
                        name="lspspTypeId"
                        //value={formValues.lspspTypeId}
                        //onChange={onChangeRadio}
                        data={employeeMockData.getLSP_SP_items()}
                        helperText="Please select Yes or No"
                        disabled={LSP_SP_Disable ? "disabled" : ""}
                      />
                    </Grid>
                    <Grid
                      item
                      sm={3}
                      xs={12}
                      className={`${classes.mgTop} ${classes.mgRight}`}
                    >
                      <span className={classes.labels}>
                        {labels.total_entitle_amount}
                      </span>
                      <FormikForm.Input
                        name="lspspEntitlementAmount"
                        fullWidth
                        type="number"
                        placeholder="Input Amount in HKD"
                        //disabled={LSP_SP_Disable ? "disabled" : ""}
                      />
                    </Grid>
                  </div>
                </Paper>

                <BottomAppBar>
                  <FormikForm.Submit onClick={() => validateForm()}>
                    VALIDATE
                  </FormikForm.Submit>
                  <FormikForm.Reset className={classes.reverse}>
                    RESET
                  </FormikForm.Reset>
                  <FormikForm.Submit>SUBMIT</FormikForm.Submit>
                </BottomAppBar>
              </Form>
            );
          }}
        </Formik>
      </PageInner>
    </React.Fragment>
  );
};

export default EmployeeDetails2;
