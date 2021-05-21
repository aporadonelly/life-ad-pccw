import React, { useEffect } from "react";
import { AuthWrapper } from "@hocs";
import EmployeeDetails from "../../components/employeedetail/EmployeeDetails";
import { useParams } from "react-router-dom";
import { PageHeader } from "@components/layout";

const routes = [
  {
    name: "Enrollment",
    path: "/employee/enrollment",
    component: null,
  },
  {
    name: "Investment",
    path: "/employee/investment",
    component: null,
  },
  {
    name: "Termination",
    path: "/employee-termination",
    component: null,
  },
  {
    name: "Claims",
    path: "/employee/claims",
    component: null,
  },
  {
    name: "Transfers",
    path: "/employee/transfers",
    component: null,
  },
];

const Termination = (props) => {
  //console.log(props);
  const { loadTermReason, loadEmpSchemes } = props;
  const { id } = useParams();
  useEffect(() => {
    loadTermReason();
    loadEmpSchemes({ accountNumber: id });
  }, []);
  //return null;
  return (
    <>
      <PageHeader subjectInfo={{ firstName: "" }} routes={routes} />;
      <EmployeeDetails {...props} />
    </>
  );
  //return <pre>{JSON.stringify(clientSchemes, null, 2)}</pre>;
};

export default Termination;
