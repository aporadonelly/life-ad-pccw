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
  // {
  //   name: "Investment",
  //   path: "/employer/investment",
  //   component: null,
  //   children: [
  //     {
  //       name: "Future Investment Instruction",
  //       path: "/employer/investment/future-investment",
  //       component: null,
  //     },
  //     {
  //       name: "Fund Switching / Re-balancing",
  //       path: "/employer/investment/fund-switching",
  //       component: null,
  //     },
  //   ],
  // },
];

const TerminationRoutes = (props) => {
  const path = props.match.path;
  //console.log(path);
  return (
    <>
      <PageHeader routes={routes}>
        <PageHeader.SubjectInfo
          subject="Chan, Tai Man"
          info={{
            "eMDF ID:": "3746474",
            "Member No.": "273 637 338",
          }}
        />
        <PageHeader.SubjectInfo
          subject="Great Company Limited"
          info={{
            "Employer NO.": "223344433",
          }}
        />
        <PageHeader.SubjectInfo subject="AIA MPF - Prime Value Choice" />
      </PageHeader>

      <Switch>
        <Route exact path={`${path}`} />
      </Switch>
    </>
  );
};

export default TerminationRoutes;
