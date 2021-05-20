import React from "react";
import { AuthWrapper } from "@hocs";
import EmployeeDetails from "../../components/employeedetail/EmployeeDetails";
import { useParams } from "react-router-dom";

const Termination = (props) => {
  //console.log(props);
  const { clientSchemes, loadEmpSchemes } = props;
  const { id } = useParams();
  React.useEffect(() => {
    loadEmpSchemes({ accountNumber: id });
  }, []);
  //return null;
  return <EmployeeDetails {...props} />;
  //return <pre>{JSON.stringify(clientSchemes, null, 2)}</pre>;
};

export default Termination;
