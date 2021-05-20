import { Switch, Route } from "react-router-dom";
import Termination from "./index";
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
    component: Termination,
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

const TerminationRoutes = (props) => {
  const path = props.match.path;
  //console.log(path);
  return (
    <>
      <PageHeader subjectInfo={{ firstName: "" }} routes={routes} />;
      <Switch>
        <Route exact path={`${path}`} />
      </Switch>
    </>
  );
};

export default TerminationRoutes;
