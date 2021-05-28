import { Grid, Paper } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { labels } from "../../common/labelsList";
import { Form as FormikForm } from "@components/common";

import { Form } from "../UseForm";
import useStyles from "./EmployeeDetailStyles";
import * as employeeMockData from "../../pages/employees/mockData/mockData";

import EmpScheme4 from "./EmployeeScheme4";

import moment from "moment";
import * as yup from "yup";
import { Formik } from "formik";
import { PageInner } from "@components/layout";
import MessageRender from "./Message/MessageRender";

import { Button } from "@material-ui/core";
import BottomAppBar from "../../components/misc/BottomAppBar/BottomAppBar";
import FloatingButton from "@components/controls/floatingButton/floatingButton";

import { Cancel as CancelIcon } from "@material-ui/icons";
import { validate } from "@material-ui/pickers";

const EmployeeDetails = (props) => {
  const {
    clientSchemes,
    reason,
    valid,
    validTermination,
    saveTermination,
    passValuesActions,
    valuesActions,
    save,
    resetTermination,
  } = props;

  const classes = useStyles();
  const [LSP_SP_Disable, setLSP_SP_Disable] = useState(true);
  const [open, setOpen] = useState(false);
  const [btnStatus, setBtnStatus] = useState("");
  const [bottomBar, setBottomBar] = useState(false);
  const [btnState, setBtnState] = useState();
  let formRef = React.useRef(false);
  let filterArrayLSP_SP = ""; // will be used dynamically in LSP/SP option change
  let data = replaceNull(clientSchemes);
  //let data = clientSchemes;

  //console.log(clientSchemes);
  //console.log(reason);
  //console.log(data);
  //console.log(data.schemes);

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
    schemes: employeeMockData.getScheme_LSP_SP_offect_sequence(), //data.schemes ?? [],
  };

  const validationSave = yup.object().shape({
    lastDateOfEmployment: yup.date(),
    terminationReasonId: yup.string(),
    effective_date_of_termination: yup.date(),
    entitleToLspsp: yup.string(),
    lspspTypeId: yup.string(),
    lspspEntitlementAmount: yup
      .number()
      .min(0)
      .positive(
        "The inputted amount cannot exceed the current statutory maximum amount HKD $390,000. Please input again."
      ),
    orsoOffsetAmount: yup.number().positive("Money input"),
  });

  const validationSubmit = yup.object().shape({
    lastDateOfEmployment: yup.date().required(), //yup.date(),
    terminationReasonId: yup.string().required("Please pick a reason"), //.required("Please pick a reason"),
    effective_date_of_termination: yup.date(), //.required(),
    entitleToLspsp: yup.string().required("Please choose yes or no"),
    lspspTypeId: yup.string(), //.required("Please choose yes or no"),
    lspspEntitlementAmount: yup
      .number()
      .min(0)
      .positive(
        "The inputted amount cannot exceed the current statutory maximum amount HKD $390,000. Please input again."
      )
      .required("Money input is required"),
    orsoOffsetAmount: yup
      .number()
      .positive("Money input")
      .required("Money input is required"),
  });

  useEffect(() => {
    if (valid) {
      console.log("validations", valid);
      if (valid.substring(0, 2).toLowerCase() === "ex") {
        handleClose();
        setBtnStatus(valid);
        return;
      }
      //NOTE: "WEB_UNHANDLED_EXCEPTION"
      if (valid.substring(0, 3).toLowerCase() === "web") {
        handleClose();
        setBtnStatus(valid);
        return;
      }
      if (valid === "success") {
        onValidSubmit(valuesActions, btnState);
      }
    }
  }, [valid]);

  useEffect(() => {
    if (save) {
      console.log("save", save);
      if (save.substring(0, 2).toLowerCase() === "ex") {
        handleClose();
        setBtnStatus(save);
        return;
      }
      //NOTE: "WEB_UNHANDLED_EXCEPTION WEB_MESSAGE_NOT_READABLE"
      if (save.substring(0, 3).toLowerCase() === "web") {
        handleClose();
        setBtnStatus("");
        return;
      }

      if (save === "success") {
        handleClose();
        setBtnStatus("ExMsg_SvdSccss");
        resetTermination();
      }
    }
  }, [save]);

  useEffect(() => {
    if (btnState) {
      console.log("btnState", btnState);
      if (formRef.current) {
        formRef.current.handleSubmit();
      }
    }
  }, [btnState]);

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
    if (values.lastDateOfEmployment === "") return true; // proceed to next validation
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

  const chkLsp_Sp_Amount = (values) => {
    if (parseFloat(values.lspspEntitlementAmount) > parseFloat(390000.0)) {
      handleClose();
      setBtnStatus("ExMsg_ExcdLspspAmt");
      return false;
    }
    return true;
  };

  const formikHandleSubmit = (values, actions) => {
    console.log(values);
    //actions.validateForm();
    //const chkValid = await validationSchema.isValid(initialValues);
    //console.log(chkValid);
    const chkLdoe = ldoeChange(values);
    if (!chkLdoe) return;

    const chkLsp_SpAmt = chkLsp_Sp_Amount(values);
    if (!chkLsp_SpAmt) return;

    const forValidationValues = {
      accountNumber: data.accountNumber, //clientSchemes.accountNumber,
      lastDateOfEmployment:
        values.lastDateOfEmployment &&
        moment(values.lastDateOfEmployment).format("YYYY-MM-DD"),
      entitleToLspsp:
        values.entitleToLspsp && parseBoolean(values.entitleToLspsp),
      lspspTypeId: values.lspspTypeId,
      terminationReasonId: values.terminationReasonId,
      lspspEntitlementAmount: values.lspspEntitlementAmount,
      orsoOffsetAmount: values.orsoOffsetAmount,
      otherOffsetAmount: 0.0,
      payableAmount:
        values.lspspEntitlementAmount &&
        values.lspspEntitlementAmount - values.orsoOffsetAmount,
    };

    const cloneValues = { ...values, ...forValidationValues };

    [
      "state",
      "schemes",
      "change_date",
      "effective_date",
      "effective_date_of_termination",
    ].forEach((e) => delete cloneValues[e]); // NOTE: not needed as of now

    // forValidationValues === for validation in submit
    // cloneValues  ==== for saving

    if (values.state === "save") {
      const removeValues = ["", 0];

      var filter = Object.keys(cloneValues).reduce(function (r, e) {
        if (removeValues.includes(cloneValues[e])) r[e] = cloneValues[e];
        return r;
      }, {});

      console.log(Object.keys(filter));

      Object.keys(filter).forEach((e) => delete cloneValues[e]);
      if (Object.keys(cloneValues).length === 1) return;
      // const addedValues = {
      //   accountNumber: data.accountNumber,
      //   statusType: "Saved",
      //   statusTypeId: "ST_SV",
      // };
      //const newValues = [{ ...cloneValues, ...addedValues }];

      console.log("svEETermInst", cloneValues);
      saveTermination([cloneValues]);
      //actions.resetForm();
      return;
    }

    console.log("vldMbrTerm", forValidationValues);
    validTermination(forValidationValues);

    //const combined = { ...values, ...forValidationValues };
    passValuesActions(cloneValues); //, actions, forValidationValues);
  };

  const onValidSubmit = (valuesActions, btnState) => {
    if (btnState === "submit") {
      //IMPORTANT: id not found in /ldMbrActAccntLstForER already asked BE devs
      //const enttyUuid = "327D2230-AE4C-43CF-8314-4B3525AE6CA3"
      //loadMbrTerm(enttyUuid); //pending useeffect like valid and save
      const addedValues = {
        // NOTE: stated in docu
        //statusType: "Pending for internal review",
        //statusTypeId: "ST_PD_RW",
        //NOTE: stated in JSON file valid in /
        statusType: "Submitted",
        statusTypeId: "ST_SB",
      };
      const newValues = [{ ...valuesActions, ...addedValues }];
      console.log("submit", newValues);
      saveTermination(newValues);
      //actions.resetForm();
      return;
    }
  };

  const onCancel = (resetForm) => {
    handleClose();
    setBtnStatus("ExMsg_CnclPrcss");
  };

  return (
    <React.Fragment>
      <PageInner>
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
                  {data.effectiveDate &&
                    moment(data.effectiveDate).format("D MMMM y")}
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
                  {data.lastName && data.firstName + " " + data.lastName}
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
                  {data.joinSchemeDate &&
                    moment(data.joinSchemeDate).format("D MMMM y")}
                </div>
              </div>
              <div>
                <div className={classes.labels}>{labels.terminationDate}</div>
                <div className={classes.textValue}>
                  {data.terminationDate &&
                    moment(data.terminationDate).format("D MMMM y")}
                </div>
              </div>
              <div>
                <div className={classes.labels}>{labels.status}</div>
                <div className={classes.textValue}>{data.status}</div>
              </div>
            </div>
          </div>
        </Paper>

        <Formik
          innerRef={formRef}
          enableReinitialize
          initialValues={initialValues}
          validationSchema={
            btnState === "save" ? validationSave : validationSubmit
          }
          onSubmit={formikHandleSubmit}
        >
          {({
            setFieldValue,
            resetForm,
            handleSubmit,
            validateForm,
            setTouched,
          }) => {
            const onHandleClick = (e, state) => {
              setFieldValue("state", state);
              setBtnState(state);
              // validateForm().then((errors) => {
              //   return setTouched(errors);
              // });
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
                notIncluded = ["TR_LO", "TR_CE"]; //"TR_RD", removed for TESTING
                filterArrayLSP_SP = newArray.records.filter(function (obj) {
                  return !(notIncluded.indexOf(obj.cstmTypId) > -1);
                });
                //setFieldValue("terminationReasonId", filterArrayLSP_SP);
              }
            };

            return (
              <Form onClick={() => setBottomBar(true)}>
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

                    <div className={classes.terminationDetailContentContainer}>
                      <Grid item sm={3} xs={12} className={classes.datepickers}>
                        <span className={classes.labels}>
                          {labels.last_date}
                        </span>
                        <FormikForm.DatePicker
                          name="lastDateOfEmployment"
                          helperText="YYYYMMDD"
                          format="YYYY/MM/DD"
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
                          //options={reason} //{employeeMockData.getTerminationReasonList()}
                        />
                      </Grid>
                      <Grid item sm={3} xs={12} className={classes.datepickers}>
                        <span className={classes.labels}>
                          {labels.effectiveDate}
                        </span>
                        <FormikForm.DatePicker
                          name="effective_date_of_termination"
                          helperText="YYYYMMDD"
                          format="YYYY/MM/DD"
                        />
                      </Grid>
                    </div>
                    <div className={classes.labels}>{labels.entitle_to}</div>
                    <FormikForm.RadioGroupField
                      row
                      name="entitleToLspsp"
                      onClick={disableLSP_SP}
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
                            fullWidth
                            type="number"
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
                            fullWidth
                            type="number"
                            placeholder="Input Amount in HKD"
                            //disabled={LSP_SP_Disable ? "disabled" : ""}
                          />
                        </Grid>
                      </div>
                    </div>

                    <div className={`${classes.mgTop}`}>
                      <div>
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
                            helperText="YYYYMMDD"
                            format="YYYY/MM/DD"
                          />
                        </Grid>
                        <Grid item sm={3} xs={12} className={classes.mgTop}>
                          <span className={classes.labels}>Change Date</span>
                          <FormikForm.DatePicker
                            name="change_date"
                            helperText="YYYYMMDD"
                            format="YYYY/MM/DD"
                          />
                        </Grid>
                      </div>
                    </div>
                  </div>
                </Paper>

                {bottomBar && (
                  <BottomAppBar>
                    <FloatingButton
                      text="cancel"
                      onClick={onCancel.bind(null, resetForm)}
                    />
                    {/* <FormikForm.FloatingButton text="submit" /> 
                  <FormikForm.Submit text="submit">SUBMIT</FormikForm.Submit> */}
                    <Button
                      type="submit"
                      className={classes.btnReverse}
                      onClick={(e) => onHandleClick(e, "save")}
                    >
                      Save
                    </Button>
                    &nbsp;
                    <Button
                      type="submit"
                      onClick={(e) => onHandleClick(e, "submit")}
                    >
                      Submit
                    </Button>
                  </BottomAppBar>
                )}
              </Form>
            );
          }}
        </Formik>
      </PageInner>
    </React.Fragment>
  );
};

export default EmployeeDetails;
