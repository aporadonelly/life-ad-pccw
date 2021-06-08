import { Switch, Route } from "react-router-dom";
import CompanyProfile from "./CompanyProfile";
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
        <Route exact path={`${path}`} component={CompanyProfile} />
        <Route path={`${path}/profile`} component={ViewProfile} />
        <Route path={`${path}/employer/enrollment-scheme`} component={null} />
      </Switch>
    </>
  );
};

export default Employer;
