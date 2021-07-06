import { connect } from "react-redux";
import {
  authorizedPersonsSelector,
  // primaryContactPersonsSelector,
} from "@redux/features/registrationEmployer/selectors";
import PrimaryContactPerson from "./PrimaryContactPerson";

const mapStateToProps = (state) => ({
  contactPersons: authorizedPersonsSelector(state),
  // contactPersons: primaryContactPersonsSelector(state),
});

export default connect(mapStateToProps, null)(PrimaryContactPerson);
