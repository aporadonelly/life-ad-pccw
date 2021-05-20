import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getEmployeeDetails } from "../../actions/employeesActions";
//import TitleHeaderBar from "../../common/titleHeaderBar/titleHeaderBar";
import EmployeeDetail from "../../components/employeedetail/EmployeeDetails";
import useStyles from "./EmployeeDetails.styles";

//const EmployeeDetailsPage = ({ employeeDetails, getEmployeeDetails }) => {
const EmployeeDetailsPage = (context) => {
  const classes = useStyles();
  const { clientSchemes, loadEmpSchemes } = context;
  console.log(clientSchemes, loadEmpSchemes);
  // useEffect(() => {
  //   getEmployeeDetails();
  //   //eslint-disable-next-line
  // }, []);

  return (
    <React.Fragment>
      <div style={{ marginTop: "63px" }}>
        {/* {employeeDetails.map((item, index) => {
          const { memberDetail, employmentDetail } = item;
          return (
            <TitleHeaderBar
              key={index}
              memberDetail={memberDetail}
              employmentDetail={employmentDetail}
            />
          );
        })} */}
      </div>
      <div className={classes.container}>
        {/* {employeeDetails.map((item, index) => {
          const { employmentDetail, memberDetail, supportingDocuments } = item; 
           console.log(employmentDetail, memberDetail, supportingDocuments);
        return (*/}
        <EmployeeDetail props={context} />
        {/* // key={index}
        // employmentDetail={employmentDetail}
        // memberDetail={memberDetail}
        // supportingDocuments={supportingDocuments} */}

        {/*);
         })} */}
      </div>
    </React.Fragment>
  );
};

export default EmployeeDetailsPage;
