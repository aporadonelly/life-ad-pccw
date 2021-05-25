import { Switch, Route } from "react-router-dom";
import { PageHeader } from "@components/layout";
import MemberSearch from "./MemberSearch";
import Members from "./Members";
import ViewMember from "./ViewMember";

const routes = [
  {
    name: "Company Registration Information",
    path: "/employer/profile",
    component: null,
  },
  {
    name: "Enrollment Scheme",
    path: "/employer/enrollment-scheme",
    component: null,
  },
];

const Member = (props) => {
  const path = props.match.path;

  return (
    <>
      <PageHeader routes={routes} />
      <Switch>
        <Route exact path={`${path}`} component={Members} />
        <Route path={`${path}/search`} component={MemberSearch} />
        <Route path={`${path}/details`} component={ViewMember} />
      </Switch>
    </>
  );
};

export default Member;
