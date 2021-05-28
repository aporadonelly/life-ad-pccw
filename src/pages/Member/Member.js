import { Switch, Route } from "react-router-dom";
import MemberSearch from "./MemberSearch";
import Members from "./Members";
import ViewMember from "./ViewMember";

const Member = (props) => {
  const path = props.match.path;

  return (
    <>
      <Switch>
        <Route exact path={`${path}`} component={Members} />
        <Route path={`${path}/enquiry`} component={MemberSearch} />
        <Route path={`${path}/details`} component={ViewMember} />
      </Switch>
    </>
  );
};

export default Member;
