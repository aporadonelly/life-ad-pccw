import { connect } from "react-redux";
import { authorizedPersonsSelector } from "@redux/features/registrationEmployer/selectors";
import PayrollGroups from "./PayrollGroups";

const mapStateToProps = (state) => ({
  authorizedPersons: authorizedPersonsSelector(state),
});

export default connect(mapStateToProps, null)(PayrollGroups);
