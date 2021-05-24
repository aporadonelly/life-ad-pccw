import { Avatar, Grid, Paper } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { add_employee_details } from "../../actions/employeesActions";
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
import MessageRender from "./Message/MessageRender";

import { Button } from "@material-ui/core";
import BottomAppBar from "../../components/misc/BottomAppBar/BottomAppBar";
import FloatingButton from "@components/controls/floatingButton/floatingButton";

import { Cancel as CancelIcon } from "@material-ui/icons";
import { validate } from "@material-ui/pickers";
// import { loadEmpSchemes } from "@redux/features/employees/termination/actions";
// import { clientSchemesSelector } from "@redux/features/employees/termination/selectors";

const EmployeeDetails = (props) => {
  const {
    clientSchemes,
    reason,
    valid,
    validTermination,
    saveTermination,
  } = props;
  //console.log(clientSchemes);
  //let data = replaceNull(clientSchemes);
  let data = clientSchemes;
  let filterArrayLSP_SP = ""; // will be used dynamically in LSP/SP option change
  //console.log(reason);
  //console.log(data);

  console.log(data.schemes);
  //return null;

  const initialValues = {
    state: "",
    lastDateOfEmployment: "", //moment("").format("YYYY/MM/DD"),
    terminationReasonId: "",
    effective_date_of_termination: "", //moment("").format("YYYY/MM/DD"),
    entitleToLspsp: "",
    lspspTypeId: "",
    lspspEntitlementAmount: "",
    orsoOffsetAmount: "",
    effective_date: "", //moment("").format("YYYY/MM/DD"),
    change_date: "", //moment("").format("YYYY/MM/DD"),
    schemes: data.schemes ?? [], //employeeMockData.getScheme_LSP_SP_offect_sequence(), //
  };

  const validationSchema = yup.object().shape({
    lastDateOfEmployment: yup.string(), //yup.date(),
    terminationReasonId: yup.string(), //.required("Please pick a reason"),
    //effective_date_of_termination: yup.date().required(),
    entitleToLspsp: yup.string(),
    lspspTypeId: yup.string(), //.required("Please choose yes or no"),
    lspspEntitlementAmount: yup
      .number()
      .positive("Money must be greater than zero"),
    //.required("Money input is required"),
    orsoOffsetAmount: yup.number().positive("Money must be greater than zero"),
    //.required("Money input is required"),
    effective_date: yup.string(), //yup.date(),
    change_date: yup.string(), //yup.date(),
    schemes: yup.array(),
    //.required("Please choose yes or no"),
    // selectedValueEntitle_ESP_SP: yup
    //   .string()
    //   .required("Please choose yes or no"),
    // total_LSP_SP_entitlement_amount: yup
    //   .number()
    //   .when("selectedValueEntitle_ESP_SP", {
    //     is: (val) => val === "no_entitle_LSP_SP",
    //     then: yup.string().required("Please choose yes or no"),
    //     otherwise: yup.string().notRequired(),
    //   }),
  });

  const classes = useStyles();
  const [LSP_SP_Disable, setLSP_SP_Disable] = useState(true);
  const [open, setOpen] = useState(false);
  const [btnStatus, setBtnStatus] = useState("");
  const btnClick = React.useRef(null);

  const handleClose = (e) => {
    setOpen((open) => !open);
    if (!(e === undefined)) {
      if (e.target.textContent === "yes") {
        //btnClick.current.click();
      }
    }
  };

  function replaceNull(someObj, replaceValue = "") {
    const replacer = (key, value) =>
      String(value) === "null" ||
      String(value) === "undefined" ||
      value.length === 0
        ? replaceValue
        : value;

    return JSON.parse(JSON.stringify(someObj, replacer));
  }

  function parseBoolean(str) {
    switch (str.toLowerCase()) {
      case "true":
        return true;
      case "false":
        return false;
      default:
        throw new Error("Cannot convert string to boolean.");
    }
  }

  const ldoeChange = (values) => {
    const dateLdoe = Date.parse(values.lastDateOfEmployment);
    if (!dateLdoe) {
      handleClose();
      setBtnStatus("ExMsg_incrrtLDOE");
      return false;
    }

    const dateJoin = Date.parse(clientSchemes.joinSchemeDate);
    const dateEffect = Date.parse(clientSchemes.effectiveDate);
    //const dateEmp_dt = "No idea where this is";
    if (dateLdoe < dateJoin || dateLdoe < dateEffect) {
      handleClose();
      setBtnStatus("ExMsg_incrrtLDOE");
      return false;
    }
    return true;
  };

  // const formikHandleSubmit = (values, actions) => {
  //   validateForm(values, actions);
  //   localStorage.setItem("state", values.state); /// refresh fix
  //   console.log(values);
  // };

  const formikHandleSubmit = (values, actions) => {
    console.log(values);

    const forValidationValues = {
      accountNumber: data.accountNumber, //clientSchemes.accountNumber,
      lastDateOfEmployment: moment(values.lastDateOfEmployment).format(
        "YYYY-MM-DD"
      ),
      entitleToLspsp: parseBoolean(values.entitleToLspsp),
      lspspTypeId: values.lspspTypeId,
      terminationReasonId: values.terminationReasonId,
      lspspEntitlementAmount: values.lspspEntitlementAmount,
      orsoOffsetAmount: values.orsoOffsetAmount,
      otherOffsetAmount: 0.0,
      payableAmount: values.lspspEntitlementAmount - values.orsoOffsetAmount,
    };
    // } catch (err) {
    //   console.error(err);
    // }
    console.log(forValidationValues);

    validTermination(forValidationValues);
  };

  const validateForm = (values, actions) => {
    const chkLdoe = ldoeChange(values);
    if (!chkLdoe) return;
    console.log(values);

    const forValidationValues = {
      // NOTE: proven validated values
      // accountNumber: 970001,
      // lastDateOfEmployment: "2020-05-01",
      // entitleToLspsp: true,
      // lspspTypeId: "LS_SP",
      // terminationReasonId: "TR_RD",
      // lspspEntitlementAmount: 390000.0,
      // orsoOffsetAmount: 0.0,
      // otherOffsetAmount: 0.0,

      accountNumber: data.accountNumber, //clientSchemes.accountNumber,
      lastDateOfEmployment: moment(values.lastDateOfEmployment).format(
        "YYYY-MM-DD"
      ),
      entitleToLspsp: parseBoolean(values.entitleToLspsp),
      lspspTypeId: values.lspspTypeId,
      terminationReasonId: values.terminationReasonId,
      lspspEntitlementAmount: values.lspspEntitlementAmount,
      orsoOffsetAmount: values.orsoOffsetAmount,
      otherOffsetAmount: 0.0,
      payableAmount: values.lspspEntitlementAmount - values.orsoOffsetAmount,
    };
    console.log(forValidationValues);
    validTermination(forValidationValues);
  };

  // IMPORTANT: during validtermination the page refreshes so valid payload
  // NOTE:        was changed to forValidationValues

  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])

  // console.log(valid);
  // if (valid !== "") {
  //   console.log("validation", valid);
  //   const stateBtn = localStorage.getItem("state"); /// refresh fix

  //   if (stateBtn === "save") {
  //     const addedValues = { statusType: "Saved", statusTypeId: "ST_SV" };
  //     const newValues = { ...valid, ...addedValues };
  //     handleClose();
  //     setBtnStatus("ExMsg_SvdSccss"); // refresh fix
  //     saveTermination(newValues);
  //     return;
  //   }
  //   if (stateBtn === "submit") {
  //     const addedValues = {
  //       statusType: "Pending for internal review",
  //       statusTypeId: "ST_PD_RW",
  //     };
  //     const newValues = { ...valid, ...addedValues };
  //     //onSubmit(values);
  //     handleClose();
  //     setBtnStatus("ExMsg_SvdSccss"); // refresh fix
  //     saveTermination(newValues);
  //   }
  //   //FIX: reset cannot be used page refreshes when a request sent to ACTIONS
  //   //actions.resetForm(initialValues);
  //   localStorage.removeItem("state"); // refresh fix
  // }

  const onCancel = (resetForm) => {
    handleClose();
    setBtnStatus("ExMsg_CnclPrcss");
    //resetForm();
  };

  return (
    <React.Fragment>
      <PageInner>
        {/* <DialogBox open={open} onClose={handleClose} msgCode={btnStatus} /> */}

        <Paper className={classes.paperContainer} elevation={3}>
          <div className={classes.paperContentContainer}>
            <div className={classes.paperLabelTitle}>
              {labels.employmentDetail}
            </div>
            <div className={classes.labelAndValueContainer}>
              <div>
                <div className={classes.labels}>{labels.schemeName}</div>
                <div className={classes.textValueWithColor}>
                  {data.schemes && data.schemes[0].schemeName}
                </div>
              </div>
              <div>
                <div className={classes.labels}>{labels.employerName}</div>
                <div className={classes.textValueWithColor}>
                  {data.firstName}
                </div>
              </div>
              <div>
                <div className={classes.labels}>{labels.er_id}</div>
                <div className={classes.textValue}>{data.employerId}</div>
              </div>
              <div>
                <div className={classes.labels}>{labels.branch}</div>
                <div className={classes.textValue}>{data.branchName}</div>
              </div>
              <div>
                <div className={classes.labels}>{labels.branchId}</div>
                <div className={classes.textValue}>{data.branchNumber}</div>
              </div>
              <div>
                <div className={classes.labels}>{labels.status}</div>
                <div className={classes.textValue}>{data.branchStatus}</div>
              </div>
              <div>
                <div className={classes.labels}>{labels.effectiveDate}</div>
                <div className={classes.textValue}>
                  {moment(data.effectiveDate).format("d MMMM y")}
                </div>
              </div>
            </div>
          </div>
        </Paper>
        <Paper className={classes.paperContainer} elevation={3}>
          <div className={classes.paperContentContainer}>
            <div className={classes.paperLabelTitle}>{labels.memberDetail}</div>
            <div className={classes.labelAndValueContainer}>
              <div>
                <div className={classes.labels}>{labels.memberName}</div>
                <div className={classes.textValue}>
                  {data.firstName + " " + data.lastName}
                </div>
              </div>
              <div>
                <div className={classes.labels}>{labels.memberNo}</div>
                <div className={classes.textValue}>{data.employerNumber}</div>
              </div>
              <div>
                <div className={classes.labels}>{labels.acctType}</div>
                <div className={classes.textValue}>{data.accountType}</div>
              </div>
              <div>
                <div className={classes.labels}>{labels.eMPF_No}</div>
                <div className={classes.textValue}>{data.empfNumber}</div>
              </div>
              <div>
                <div className={classes.labels}>{labels.acctId}</div>
                <div className={classes.textValue}>{data.accountId}</div>
              </div>
              <div>
                <div className={classes.labels}>{labels.staffNo}</div>
                <div className={classes.textValue}>{data.staffNumber}</div>
              </div>
              <div>
                <div className={classes.labels}>{labels.dateJoin}</div>
                <div className={classes.textValue}>
                  {moment(data.joinSchemeDate).format("d MMMM y")}
                </div>
              </div>
              <div>
                <div className={classes.labels}>{labels.terminationDate}</div>
                <div className={classes.textValue}>
                  {moment(data.terminationDate).format("d MMMM y")}
                </div>
              </div>
              <div>
                <div className={classes.labels}>{labels.status}</div>
                <div className={classes.textValue}>{data.status}</div>
              </div>
            </div>
          </div>
        </Paper>
        {/* </Form> */}

        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={formikHandleSubmit}
          //onSubmit={(values, actions) => formikHandleSubmit(values, actions)}
          //onReset={(values, actions) => formikHandleReset(values, actions)}
        >
          {({ setFieldValue, resetForm, handleSubmit }) => {
            const onHandleClick = (e, state) => {
              setFieldValue("state", state);
              handleSubmit(e);
            };

            const disableLSP_SP = (event) => {
              if (event.target.value === "false") {
                setLSP_SP_Disable(true);
                setFieldValue("lspspTypeId", "");
                //setFieldValue("lastDateOfEmployment", "");
              } else if (event.target.value === "true") {
                setLSP_SP_Disable(false);
                if (filterArrayLSP_SP !== "") {
                  setFieldValue("terminationReasonId", reason);
                }
                filterArrayLSP_SP = "";
              }
            };

            const onClickLSP_SPReason = (event) => {
              setFieldValue("terminationReasonId", "");
              let notIncluded,
                newArray = { records: reason };
              if (event.target.value === "LS_LSP") {
                notIncluded = [
                  "TR_RT",
                  "TR_DA",
                  "TR_IH",
                  "TR_TI",
                  "TR_LO",
                  "LR_CE",
                ];
                filterArrayLSP_SP = newArray.records.filter(function (obj) {
                  return !(notIncluded.indexOf(obj.cstmTypId) > -1);
                });
                //setFieldValue("terminationReasonId", filterArrayLSP_SP);
              } else if (event.target.value === "LS_SP") {
                notIncluded = ["TR_RD", "TR_LO", "TR_CE"];
                filterArrayLSP_SP = newArray.records.filter(function (obj) {
                  return !(notIncluded.indexOf(obj.cstmTypId) > -1);
                });
                //setFieldValue("terminationReasonId", filterArrayLSP_SP);
              }
            };

            return (
              <Form>
                <MessageRender
                  open={open}
                  onClose={handleClose}
                  msgCode={btnStatus}
                />
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
                          format="yyyy/MM/dd"
                        />
                      </Grid>

                      <Grid item sm={3} xs={12} className={classes.datepickers}>
                        <span className={classes.labels}>
                          {labels.termination_reason}
                        </span>
                        <FormikForm.Select
                          name="terminationReasonId"
                          data={{
                            options:
                              filterArrayLSP_SP !== ""
                                ? filterArrayLSP_SP
                                : reason,
                            label: (option) => option.cstmTypDtlTxt,
                            value: (option) => option.cstmTypId,
                          }}
                          //displayEmpty
                          //onChange={handleInputChange}
                          //value={formValues.terminationReasonId}
                          //options={reason} //{employeeMockData.getTerminationReasonList()}
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
                          helperText="YYYYMMDD"
                          format="yyyy/MM/dd"
                        />
                      </Grid>
                    </div>
                    <div className={classes.labels}>{labels.entitle_to}</div>
                    <FormikForm.RadioGroupField
                      row
                      name="entitleToLspsp"
                      onClick={disableLSP_SP}
                      //value={formValues.entitleToLspsp}
                      //data={employeeMockData.getEntitle_LSP_SP_items()}
                      data={{
                        options: employeeMockData.getEntitle_LSP_SP_items(),
                        label: (option) => option.label,
                        value: (option) => option.value,
                      }}
                      //helperText="Please select Yes or No"
                    />

                    <div className={classes.mgTop}>
                      <div className={classes.terminationTitle}>
                        {labels.lsp_details}
                      </div>
                      <div className={classes.lspRow}>
                        <Grid
                          item
                          sm={3}
                          xs={12}
                          className={`${classes.mgTop} ${classes.mgRight}`}
                        >
                          <div className={classes.labels}>
                            {labels.entitle_lsp}
                          </div>
                          <FormikForm.RadioGroupField
                            row
                            name="lspspTypeId"
                            //value={formValues.lspspTypeId}
                            onClick={onClickLSP_SPReason}
                            data={{
                              options: employeeMockData.getLSP_SP_items(),
                              label: (option) => option.label,
                              value: (option) => option.value,
                            }}
                            //helperText="Please select Yes or No"
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
                            //onChange={handleInputChange}
                            fullWidth
                            type="number"
                            //value={formValues.lspspEntitlementAmount}
                            placeholder="Input Amount in HKD"
                            //disabled={LSP_SP_Disable ? "disabled" : ""}
                          />
                        </Grid>
                        <Grid
                          item
                          sm={3}
                          xs={12}
                          className={`${classes.mgTop} ${classes.mgRight}`}
                        >
                          <span className={classes.labels}>
                            {labels.pay_amount_er}
                          </span>
                          <FormikForm.Input
                            name="orsoOffsetAmount"
                            //onChange={handleInputChange}
                            fullWidth
                            type="number"
                            //value={formValues.orsoOffsetAmount}
                            placeholder="Input Amount in HKD"
                            //disabled={LSP_SP_Disable ? "disabled" : ""}
                          />
                        </Grid>
                      </div>
                    </div>

                    <div className={`${classes.mgTop}`}>
                      <div>
                        {/* <EmpScheme
                    //handleInputChange={handleInputChange}
                    //values={formValues.scheme_LSP_SP}
                    /> */}

                        {/* <EmpScheme2 /> */}
                        {/* <EmpScheme3 /> */}
                        {data.schemes && (
                          <EmpScheme4
                            name="schemes"
                            schemes={initialValues.schemes}
                          />
                        )}
                      </div>

                      <div className={classes.effDateTop}>
                        <Grid
                          item
                          sm={3}
                          xs={12}
                          className={classes.effDateInside}
                        >
                          <span className={classes.labels}>
                            {labels.effectiveDate}
                          </span>
                          <FormikForm.DatePicker
                            name="effective_date"
                            //onChange={handleInputChange}
                            //value={formValues.effective_date}
                            helperText="YYYYMMDD"
                            format="yyyy/MM/dd"
                          />
                        </Grid>
                        <Grid item sm={3} xs={12} className={classes.mgTop}>
                          <span className={classes.labels}>Change Date</span>
                          <FormikForm.DatePicker
                            name="change_date"
                            //onChange={handleInputChange}

                            //value={formValues.change_date}
                            helperText="YYYYMMDD"
                            format="yyyy/MM/dd"
                          />
                        </Grid>
                      </div>
                    </div>
                  </div>
                </Paper>

                <BottomAppBar>
                  <FloatingButton
                    text="cancel"
                    onClick={onCancel.bind(null, resetForm)}
                  />
                  {/* <FormikForm.FloatingButton text="save" /> */}

                  {/* <FormikForm.FloatingButton text="submit" /> */}
                  {/* <FormikForm.Submit className={classes.btnReverse} text="save">
                    SAVE
                  </FormikForm.Submit>
                  <FormikForm.Submit text="submit">SUBMIT</FormikForm.Submit> */}
                  <Button
                    type="submit"
                    onClick={(e) => onHandleClick(e, "save")}
                  >
                    Save
                  </Button>
                  <Button
                    type="submit"
                    onClick={(e) => onHandleClick(e, "submit")}
                  >
                    Submit
                  </Button>
                </BottomAppBar>
              </Form>
            );
          }}
        </Formik>
      </PageInner>
    </React.Fragment>
  );
};

export default EmployeeDetails;
