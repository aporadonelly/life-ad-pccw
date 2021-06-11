import { Grid, Paper } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { labels } from "@common/labelsList";
import { Form as FormikForm } from "@components/common";

import { Form } from "@components/UseForm";
import useStyles from "./EmployeeDetailStyles";
import * as employeeMockData from "@mockData";

import EmpScheme4 from "./EmployeeScheme4";

import moment from "moment";
import * as yup from "yup";
import { Formik } from "formik";
import { PageInner } from "@components/layout";
import MessageRender from "./Message/MessageRender";

import { Button } from "@material-ui/core";
import BottomAppBar from "@components/misc/BottomAppBar/BottomAppBar";
import FloatingButton from "@components/controls/floatingButton/floatingButton";
import { useTranslation } from "react-i18next";

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
    cycleDate,
    entitleLspSp,
    detailsLspSp,
    payMethod,
    bankList,
    clnBnkInfo,
  } = props;

  const { t } = useTranslation(["typography", "form", "button"]);
  const classes = useStyles();
  const [LSP_SP_Disable, setLSP_SP_Disable] = useState(true);
  const [open, setOpen] = useState(false);
  const [btnStatus, setBtnStatus] = useState("");
  const [bottomBar, setBottomBar] = useState(false);
  const [btnState, setBtnState] = useState();
  let formRef = React.useRef(false);
  let [filterArrayLSP_SP, setfilterArrayLSP_SP] = useState("");

  let data = replaceNull(clientSchemes);

  const initialValues = {
    state: "",
    lastDateOfEmployment: "",
    terminationReasonId: "",
    effectiveDateOfTermination: "",
    entitleToLspsp: "",
    lspspTypeId: "",
    lspspEntitlementAmount: "",
    paymentAmount: "",
    effectiveDate: "",
    changeDate: "",
    schemes: data.clientSchemes ?? [], //employeeMockData.getScheme_LSP_SP_offect_sequence(),
    bankName: "",
    acctNumber: "",
    paymentMethod: "",
  };

  const validationSave = yup.object().shape({
    lastDateOfEmployment: yup.date(),
    terminationReasonId: yup.string(),
    effectiveDateOfTermination: yup.date(),
    entitleToLspsp: yup.string(),
    lspspTypeId: yup.string(),
    lspspEntitlementAmount: yup
      .number()
      .min(0)
      .positive(
        "The inputted amount cannot exceed the current statutory maximum amount HKD $390,000. Please input again."
      ),
    paymentAmount: yup.number().positive("Money input"),
  });

  const validationSubmit = yup.object().shape({
    lastDateOfEmployment: yup.date().required(),
    terminationReasonId: yup.string().required("Please pick a reason"),
    effectiveDateOfTermination: yup.date(),
    entitleToLspsp: yup.string().required("Please choose yes or no"),
    lspspTypeId: yup.string(), // requied in validation null if not selected
    lspspEntitlementAmount: yup
      .number()
      .min(0)
      .positive(
        "The inputted amount cannot exceed the current statutory maximum amount HKD $390,000. Please input again."
      ),
    paymentAmount: yup.number().positive("Money input"),
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
    // eslint-disable-next-line
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
        setLSP_SP_Disable(true);
        resetTermination();
        formRef.current.resetForm();
      }
    }
    // eslint-disable-next-line
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

  const filterByTermReason = (termid) => {
    let selected = "";
    if (termid === "") {
      return selected;
    }
    if (reason) {
      return (selected = reason.find((term) => term.cstmTypId === termid)
        .cstmTypDtlTxt);
    }
    return selected;
  };

  // FIX: pending based on employmendate data known 06/01/2021
  // const chkEmployDate = (values) => {
  //   return true;
  // }

  const formikHandleSubmit = (values, actions) => {
    console.log("action - " + values.state, values);
    const termReason = filterByTermReason(values.terminationReasonId);

    const forValidationValues = {
      accountNumber: data.accountNumber, //clientSchemes.accountNumber,
      lastDateOfEmployment:
        values.lastDateOfEmployment &&
        moment(values.lastDateOfEmployment).format("YYYY-MM-DD"),
      entitleToLspsp:
        values.entitleToLspsp && parseBoolean(values.entitleToLspsp),
      lspspTypeId: values.lspspTypeId === "" ? null : values.lspspTypeId,
      lspspType:
        values.lspspTypeId && (values.lspspTypeId === "LS_SP" ? "SP" : "LSP"),
      terminationReasonId: values.terminationReasonId,
      terminationReason: termReason,
      lspspEntitlementAmount: values.lspspEntitlementAmount,
      paymentAmount: values.paymentAmount,
      otherOffsetAmount: 0.0,
      payableAmount:
        values.lspspEntitlementAmount &&
        values.lspspEntitlementAmount - values.paymentAmount,
    };

    const cloneValues = { ...values, ...forValidationValues };

    [
      "state",
      "schemes",
      "changeDate",
      "effectiveDate",
      "effectiveDateOfTermination",
    ].forEach((e) => delete cloneValues[e]); // NOTE: not needed as of now

    // forValidationValues === for validation in submit
    // cloneValues  ==== for saving

    if (values.state === "save") {
      const removeValues = ["", 0];

      var filter = Object.keys(cloneValues).reduce(function (r, e) {
        if (removeValues.includes(cloneValues[e])) r[e] = cloneValues[e];
        return r;
      }, {});

      //console.log(Object.keys(filter));

      Object.keys(filter).forEach((e) => delete cloneValues[e]);
      if (Object.keys(cloneValues).length === 1) return;

      const addedValues = {
        statusType: "Saved",
        statusTypeId: "ST_SV",
      };
      const newValues = [{ ...cloneValues, ...addedValues }];

      console.log("Saving", newValues);
      saveTermination(newValues);
      //saveTermination([cloneValues]);
      return;
    }

    const chkLdoe = ldoeChange(values);
    if (!chkLdoe) return;

    const chkLsp_SpAmt = chkLsp_Sp_Amount(values);
    if (!chkLsp_SpAmt) return;

    console.log("vldMbrTerm", forValidationValues);
    validTermination(forValidationValues);

    //const combined = { ...values, ...forValidationValues };
    passValuesActions(cloneValues); //, actions, forValidationValues);
  };

  const onValidSubmit = (valuesActions, btnState) => {
    if (btnState === "submit") {
      //IMPORTANT: id not found in already asked BE devs
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
      console.log("Submitting", newValues);
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
              {t("form:label.employmentDetail")}
            </div>
            <div className={classes.labelAndValueContainer}>
              <div>
                <div className={classes.labels}>
                  {t("form:label.schemeName")}
                </div>
                <div className={classes.textValueWithColor}>
                  {data.schemes && data.schemes[0].schemeName}
                </div>
              </div>
              <div>
                <div className={classes.labels}>
                  {t("form:label.employerName")}{" "}
                </div>
                <div className={classes.textValueWithColor}>
                  {data.firstName}
                </div>
              </div>
              <div>
                <div className={classes.labels}>{t("form:label.erId")}</div>
                <div className={classes.textValue}>{data.employerId}</div>
              </div>
              <div>
                <div className={classes.labels}>{t("form:label.branch")}</div>
                <div className={classes.textValue}>{data.branchName}</div>
              </div>
              <div>
                <div className={classes.labels}>{t("form:label.branchId")}</div>
                <div className={classes.textValue}>{data.branchNumber}</div>
              </div>
              <div>
                <div className={classes.labels}>
                  {t("form:label.termStatus")}
                </div>
                <div className={classes.textValue}>{data.branchStatus}</div>
              </div>
              <div>
                <div className={classes.labels}>
                  {t("form:label.effectiveDate")}
                </div>
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
            <div className={classes.paperLabelTitle}>
              {t("form:label.memberDetail")}
            </div>
            <div className={classes.labelAndValueContainer}>
              <div>
                <div className={classes.labels}>
                  {t("form:label.memberName")}
                </div>
                <div className={classes.textValue}>
                  {data.lastName && data.firstName + " " + data.lastName}
                </div>
              </div>
              <div>
                <div className={classes.labels}>{t("form:label.memberNo")}</div>
                <div className={classes.textValue}>{data.employerNumber}</div>
              </div>
              <div>
                <div className={classes.labels}>{t("form:label.acctType")}</div>
                <div className={classes.textValue}>{data.accountType}</div>
              </div>
              <div>
                <div className={classes.labels}>{t("form:label.empfNo")}</div>
                <div className={classes.textValue}>{data.empfNumber}</div>
              </div>
              <div>
                <div className={classes.labels}>{t("form:label.acctId")}</div>
                <div className={classes.textValue}>{data.accountId}</div>
              </div>
              <div>
                <div className={classes.labels}>{t("form:label.staffNo")}</div>
                <div className={classes.textValue}>{data.staffNumber}</div>
              </div>
              <div>
                <div className={classes.labels}>{t("form:label.dateJoin")}</div>
                <div className={classes.textValue}>
                  {data.joinSchemeDate &&
                    moment(data.joinSchemeDate).format("D MMMM y")}
                </div>
              </div>
              <div>
                <div className={classes.labels}>
                  {t("form:label.terminationDate")}
                </div>
                <div className={classes.textValue}>
                  {data.terminationDate &&
                    moment(data.terminationDate).format("D MMMM y")}
                </div>
              </div>
              <div>
                <div className={classes.labels}>
                  {t("form:label.termStatus")}
                </div>
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
                setfilterArrayLSP_SP("");
                //filterArrayLSP_SP = "";
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
                //filterArrayLSP_SP =
                setfilterArrayLSP_SP(
                  newArray.records.filter(function (obj) {
                    return !(notIncluded.indexOf(obj.cstmTypId) > -1);
                  })
                );
                //setFieldValue("terminationReasonId", filterArrayLSP_SP);
              } else if (event.target.value === "LS_SP") {
                notIncluded = ["TR_RD", "TR_LO", "TR_CE"]; //"TR_RD", removed for TESTING
                //filterArrayLSP_SP =
                setfilterArrayLSP_SP(
                  newArray.records.filter(function (obj) {
                    return !(notIncluded.indexOf(obj.cstmTypId) > -1);
                  })
                );

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
                      {t("form:label.terminationTitle")}
                    </div>

                    <div className={classes.terminationDetailContentContainer}>
                      <Grid item sm={3} xs={12} className={classes.datepickers}>
                        <span className={classes.labels}>
                          {t("form:label.lastDate")}
                        </span>
                        <FormikForm.DatePicker
                          name="lastDateOfEmployment"
                          helperText="YYYYMMDD"
                          format="YYYY/MM/DD"
                        />
                      </Grid>

                      <Grid item sm={3} xs={12} className={classes.datepickers}>
                        <span className={classes.labels}>
                          {t("form:label.terminationReason")}
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
                          {t("form:label.effectiveDate")}
                        </span>
                        <FormikForm.DatePicker
                          name="effectiveDateOfTermination"
                          helperText="YYYYMMDD"
                          format="YYYY/MM/DD"
                        />
                      </Grid>
                    </div>
                    <div className={classes.labels}>
                      {t("form:label.entitleTo")}
                    </div>
                    <FormikForm.RadioGroupField
                      row
                      name="entitleToLspsp"
                      onClick={disableLSP_SP}
                      //data={employeeMockData.getEntitle_LSP_SP_items()}
                      data={{
                        options: entitleLspSp, //employeeMockData.getEntitle_LSP_SP_items(),
                        label: (option) => option.label,
                        value: (option) => option.value,
                      }}
                      //helperText="Please select Yes or No"
                    />

                    <div className={classes.mgTop}>
                      <div className={classes.terminationTitle}>
                        {t("form:label.lspDetails")}
                      </div>
                      <div className={classes.lspRow}>
                        <Grid
                          item
                          sm={3}
                          xs={12}
                          className={`${classes.mgTop} ${classes.mgRight}`}
                        >
                          <div className={classes.labels}>
                            {t("form:label.entitleLsp")}
                          </div>
                          <FormikForm.RadioGroupField
                            row
                            name="lspspTypeId"
                            onClick={onClickLSP_SPReason}
                            data={{
                              options: detailsLspSp, //employeeMockData.getLSP_SP_items(),
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
                            {t("form:label.totalEntitleAmount")}
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
                            {t("form:label.payAmountEr")}
                          </span>
                          <FormikForm.Input
                            name="paymentAmount"
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
                            {t("form:label.effectiveDate")}
                          </span>
                          <FormikForm.DatePicker
                            name="effectiveDate"
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
                            readOnly
                            disabled
                            value={cycleDate ?? moment().format("YYYY/MM/DD")} // NOTE: if cycldate is not available
                          />
                        </Grid>
                      </div>
                      {/*comment */}
                      <div className={classes.mgTop}>
                        <div className={classes.terminationTitle}>
                          {/* {t("form:label.supportDocuments")} */}
                        </div>
                        {/* <EmployeeDocuments /> */}
                      </div>
                      <div className={classes.mgTop}>
                        <div className={classes.terminationTitle}>
                          {t("form:label.bankInfo")}
                        </div>
                        <Grid container spacing={3}>
                          <Grid item xs={3}>
                            <span className={classes.labels}>
                              {t("form:label.bankName")}
                            </span>
                            <FormikForm.Select
                              name="bankName"
                              data={{
                                options:
                                  Object.keys(bankList).length && bankList,
                                label: (option) => option.bnkNm,
                                value: (option) => option.id,
                              }}
                            />
                          </Grid>
                          <Grid item xs={3}>
                            <span className={classes.labels}>
                              {t("form:label.acctNum")}
                            </span>
                            <FormikForm.Input
                              name="acctNumber"
                              fullWidth
                              placeholder="Please Input"
                              value={
                                Object.keys(clnBnkInfo).length &&
                                clnBnkInfo[0].bnkAccntNmbr
                              }
                            />
                          </Grid>
                          <Grid item xs={3}>
                            <span className={classes.labels}>
                              {t("form:label.payMethod")}
                            </span>
                            <FormikForm.Select
                              name="paymentMethod"
                              data={{
                                options:
                                  Object.keys(payMethod).length && payMethod,
                                label: (option) => option.cstmTypDtlTxt,
                                value: (option) => option.cstmTypId,
                              }}
                            />
                          </Grid>
                          <Grid item xs={3}></Grid>
                        </Grid>
                      </div>{" "}
                      {/*comment */}
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
