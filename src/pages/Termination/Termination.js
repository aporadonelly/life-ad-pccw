import React, { useEffect } from "react";
import { AuthWrapper } from "@hocs";
import EmployeeDetails from "../../components/employeedetail/EmployeeDetails";
import { useParams } from "react-router-dom";
import { PageHeader } from "@components/layout";
import TerminationRoutes from "./TerminationRoutes";

const Termination = (props) => {
  //console.log(props);
  const { loadTermReason, loadEmpSchemes } = props;
  const { id } = useParams();
  useEffect(() => {
    loadTermReason();
    loadEmpSchemes({ accountNumber: id });
  }, []);
  return (
    <>
      <TerminationRoutes {...props} />

      <EmployeeDetails {...props} />
    </>
  );
};

export default Termination;
