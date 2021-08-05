import { connect } from "react-redux";
import { authorizedPersonsSelector } from "@redux/features/registrationEmployer/selectors";
import AuthorizedPersonList from "./AuthorizedPersonList";

const mapStateToProps = (state) => ({
  authorizedPersons: authorizedPersonsSelector(state),
});

export default connect(mapStateToProps, null)(AuthorizedPersonList);
