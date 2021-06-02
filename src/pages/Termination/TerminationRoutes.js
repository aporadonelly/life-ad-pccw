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
  // NOTE: for future nested tabs
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
  const empSubject = props.clientSchemes;
  let subjInfoName = "Chan, Tai Man",
    subjAccountID = "3746474",
    subjAccountNo = "273 637 338",
    subjCompanyName = "Great Company Limited",
    subjEmployerNumber = "223344433",
    subjSchemeName = "AIA MPF - Prime Value Choice";
  if (empSubject) {
    subjInfoName = empSubject.firstName + " " + empSubject.lastName;
    subjAccountID = empSubject.accountId;
    subjAccountNo = empSubject.accountNumber;
    subjCompanyName = empSubject.companyName;
    subjEmployerNumber = empSubject.employerNumber;
    if (empSubject.length === undefined) {
      subjSchemeName = empSubject.schemes[0].schemeName;
    }
  }
  return (
    <>
      <PageHeader routes={routes}>
        <PageHeader.SubjectInfo
          subject={subjInfoName}
          info={{
            "eMDF ID:": subjAccountID,
            "Member No.": subjAccountNo,
          }}
        />
        <PageHeader.SubjectInfo
          subject={subjCompanyName}
          info={subjEmployerNumber}
        />
        <PageHeader.SubjectInfo subject={subjSchemeName} />
      </PageHeader>

      <Switch>
        <Route exact path={`${path}`} />
      </Switch>
    </>
  );
};

export default TerminationRoutes;
