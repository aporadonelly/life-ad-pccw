import { Switch, Route } from "react-router-dom";
import CompanySearch from "./CompanySearch";
import Companies from "./Companies";
import ViewProfile from "./ViewProfile";
import { PageHeader } from "@components/layout";

const routes = [
  {
    name: "Company Registration Information",
    path: "/employer",
    component: null,
  },
  {
    name: "Company Registration Informations",
    path: "/employer/profile",
    component: null,
  },
  {
    name: "Enrollment Scheme",
    path: "/employer/enrollment-scheme",
    component: null,
  },
];

const Employer = (props) => {
  const path = props.match.path;

  return (
    <>
      <PageHeader routes={routes}>
        <PageHeader.SubjectInfo
          subject="ABC Company Limited"
          info={{
            "Employer NO.": 123132,
          }}
        />
        <PageHeader.SubjectInfo subject="Branch 002" />
      </PageHeader>
      <Switch>
        <Route exact path={`${path}/enquiry`} component={CompanySearch} />
        <Route exact path={`${path}`} component={Companies} />
        <Route path={`${path}/profile`} component={ViewProfile} />
        <Route path={`${path}/employer/enrollment-scheme`} component={null} />
      </Switch>
    </>
  );
};

export default Employer;
