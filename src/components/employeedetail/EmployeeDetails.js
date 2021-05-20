import { Avatar, Grid, Paper } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
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

const EmployeeDetails = (props) => {
  const { clientSchemes, loadEmpSchemes } = props;

  //const { setFieldValue } = useFormikContext();

  //console.log(clientSchemes);
  const initialValues = {
    state: "",
    last_date_of_employment: moment("").format("YYYY/MM/DD"),
    terminationReason: "",
    effective_date_of_termination: moment("").format("YYYY/MM/DD"),
    selectedValueEntitle_ESP_SP: "",
    selectedValue_ESP_SP: "",
    total_LSP_SP_entitlement_amount: "",
    payment_amount_by_ER: "",
    effective_date: moment("").format("YYYY/MM/DD"),
    change_date: moment("").format("YYYY/MM/DD"),
    schemes: employeeMockData.getScheme_LSP_SP_offect_sequence(),
  };

  const validationSchema = yup.object().shape({
    last_date_of_employment: yup.date(),
    terminationReason: yup.string(), //.required("Please pick a reason"),
    effective_date_of_termination: yup.date(), //.required(),
    selectedValueEntitle_ESP_SP: yup.string(),
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

    selectedValue_ESP_SP: yup.string(), //.required("Please choose yes or no"),
    total_LSP_SP_entitlement_amount: yup
      .number()
      .positive("Money must be greater than zero"),
    //.required("Money input is required"),
    payment_amount_by_ER: yup
      .number()
      .positive("Money must be greater than zero"),
    //.required("Money input is required"),
    //effective_date: yup.date(),
    //change_date: yup.date(),
    schemes: yup.array(),
  });

  const classes = useStyles();
  const [formDialog, setFormDialog] = useState(false);
  const [btnDialogCnt, setBtnDialogCnt] = useState(null);
  const [messageDt, setMessageDt] = useState({ header: "", subtitle: "" });
  const [formValues, setFormValues] = useState({ initialValues });
  let circleId = 0;
  const [schemeMpf, setSchemeMpf] = useState({
    schemes: employeeMockData.getScheme_LSP_SP_offect_sequence(),
  });
  const [LSP_SP_Disable, setLSP_SP_Disable] = useState(false);
  const [open, setOpen] = useState(false);
  const [btnStatus, setBtnStatus] = useState("");

  const handleClose = (e) => {
    setOpen((open) => !open);
    if (!(e === undefined)) {
      if (e.target.textContent === "yes") {
        onReset();
      }
    }
  };

  const [data, setData] = useState(replaceNull(clientSchemes));
  console.log(data);

  function replaceNull(someObj, replaceValue = "") {
    const replacer = (key, value) =>
      String(value) === "null" ||
      String(value) === "undefined" ||
      value.length === 0
        ? replaceValue
        : value;

    return JSON.parse(JSON.stringify(someObj, replacer));
  }

  const formikHandleSubmit = (values, actions) => {
    console.log(values);
    if (values.state === "save") {
      onSave(values.state);
      setBtnStatus("ExMsg_SvdSccss");
      return;
    }
    if (values.state === "submit") {
      onSubmit(values.state);
      setBtnStatus("ExMsg_SvdSccss");
      actions.resetForm({ initialValues });
      return values;
    }
  };

  const onSave = (values) => {
    //renderDialogContent("error", "save");
    handleClose();
    //setBtnDialogCnt(1);
    // setMessageDt({
    //   title: "Saving Message Reminders",
    //   subtitle: "Saving will create an employee draft termination",
    // });
    // formSaveSubmitDialog();
  };

  const onSubmit = (values) => {
    //renderDialogContent("error", "submit");
    handleClose();
  };

  const onCancel = (resetForm) => {
    //e.preventDefault();
    handleClose();
    setBtnStatus("ExMsg_CnclPrcss");
  };

  const onReset = (resetForm) => {
    resetForm();
  };

  const formSaveSubmitDialog = () => {
    setFormDialog(true);
  };

  const formhandleClose = () => {
    setFormDialog(false);
  };

  const disableLSP_SP = (event) => {
    if (event.target.value === "no_entitle_LSP_SP") {
      setLSP_SP_Disable(true);
      //setFieldValue("selectedValue_ESP_SP", "");
    } else if (event.target.value === "yes_entitle_LSP_SP") {
      setLSP_SP_Disable(false);
    }
  };

  return (
    <React.Fragment>
      <PageInner>
        {/* <DialogBox open={open} onClose={handleClose}>
          <div className={classes.dialogContainer}>
            <img
              src={CheckMark}
              alt="View Enrollment"
              variant="contained"
              name="DialogCheck"
              className={classes.imgCheck}
            />

            <div className={classes.dialogText}>
              Employee Termination has been submitted
            </div>
          </div>
          <div className={classes.btnContainer}>
            <FloatingButton text="ok" onClick={handleClose} />
          </div>
        </DialogBox> */}
        <DialogBox open={open} onClose={handleClose} msgCode={btnStatus} />

        <Paper className={classes.paperContainer} elevation={3}>
          <div className={classes.paperContentContainer}>
            <div className={classes.paperLabelTitle}>
              {labels.employmentDetail}
            </div>
            <div className={classes.labelAndValueContainer}>
              <div>
                <div className={classes.labels}>{labels.schemeName}</div>
                <div className={classes.textValueWithColor}>
                  {!(data.schemes === "") && data.schemes[0].schemeName}
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
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => formikHandleSubmit(values, actions)}
          //onReset={formikHandleReset}
        >
          <Form>
            <Paper className={classes.terminationOuterContainer} elevation={3}>
              <div className={classes.terminationInnerContainer}>
                <div className={classes.terminationTitle}>
                  {labels.terminationTitle}
                </div>
                {/* // FIX: PENDING FORMIK VALIDATION */}

                <div className={classes.terminationDetailContentContainer}>
                  <Grid item sm={3} xs={12} className={classes.datepickers}>
                    <span className={classes.labels}>{labels.last_date}</span>
                    <FormikForm.DatePicker
                      name="last_date_of_employment"
                      //onChange={handleInputChange}
                      value={formValues.last_date_of_employment}
                      helperText="YYYYMMDD"
                    />
                  </Grid>

                  <Grid item sm={3} xs={12} className={classes.datepickers}>
                    <span className={classes.labels}>
                      {labels.termination_reason}
                    </span>
                    <FormikForm.SelectOption
                      name="terminationReason"
                      //displayEmpty
                      //onChange={handleInputChange}
                      value={formValues.terminationReason}
                      options={employeeMockData.getTerminationReasonList()}
                    />
                  </Grid>
                  <Grid item sm={3} xs={12} className={classes.datepickers}>
                    <span className={classes.labels}>
                      {labels.effectiveDate}
                    </span>
                    <FormikForm.DatePicker
                      name="effective_date_of_termination"
                      //onChange={handleInputChange}
                      value={formValues.effective_date_of_termination}
                      helperText="YYYYMMDD"
                    />
                  </Grid>
                </div>
                <div className={classes.labels}>{labels.entitle_to}</div>
                <FormikForm.RadioGroup
                  row
                  name="selectedValueEntitle_ESP_SP"
                  //onChange={handleInputChange}
                  onClick={disableLSP_SP}
                  value={formValues.selectedValueEntitle_ESP_SP}
                  data={employeeMockData.getEntitle_LSP_SP_items()}
                  helperText="Please select Yes or No"
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
                      <div className={classes.labels}>{labels.entitle_lsp}</div>
                      <FormikForm.RadioGroup
                        row
                        name="selectedValue_ESP_SP"
                        value={formValues.selectedValue_ESP_SP}
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
                        name="total_LSP_SP_entitlement_amount"
                        //onChange={handleInputChange}
                        fullWidth
                        type="number"
                        value={formValues.total_LSP_SP_entitlement_amount}
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
                        name="payment_amount_by_ER"
                        //onChange={handleInputChange}
                        fullWidth
                        type="number"
                        value={formValues.payment_amount_by_ER}
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
                    <EmpScheme4 name="schemes" schemes={formValues.schemes} />
                  </div>

                  <div className={classes.effDateTop}>
                    <Grid item sm={3} xs={12} className={classes.effDateInside}>
                      <span className={classes.labels}>
                        {labels.effectiveDate}
                      </span>
                      <FormikForm.DatePicker
                        name="effective_date"
                        //onChange={handleInputChange}
                        value={formValues.effective_date}
                        helperText="YYYYMMDD"
                      />
                    </Grid>
                    <Grid item sm={3} xs={12} className={classes.mgTop}>
                      <span className={classes.labels}>Change Date</span>
                      <FormikForm.DatePicker
                        name="change_date"
                        //onChange={handleInputChange}

                        value={formValues.change_date}
                        helperText="YYYYMMDD"
                      />
                    </Grid>
                  </div>
                </div>
              </div>
            </Paper>

            <BottomAppBar>
              <FloatingButton
                type="reset"
                text="reset"
                onClick={(e) => Formik.resetForm()}
              />
              <FloatingButton text="cancel" onClick={onCancel} />
              <FormikForm.FloatingButton text="save" />
              <FormikForm.FloatingButton text="submit" />
            </BottomAppBar>
          </Form>
        </Formik>
      </PageInner>
    </React.Fragment>
  );
};

export default EmployeeDetails;
