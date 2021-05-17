import { Switch, Route } from "react-router-dom";
import CompanyProfile from "./CompanyProfile";
import ViewProfile from "./ViewProfile";

const Employer = (props) => {
  const path = props.match.path;

  return (
    <Switch>
      <Route exact path={`${path}`} component={CompanyProfile} />
      <Route path={`${path}/profile`} component={ViewProfile} />
    </Switch>
  );
};

export default Employer;
