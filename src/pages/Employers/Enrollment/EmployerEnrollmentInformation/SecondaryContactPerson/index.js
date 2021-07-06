import { connect } from "react-redux";
import {
  authorizedPersonsSelector,
  // primaryContactPersonsSelector,
} from "@redux/features/registrationEmployer/selectors";
import SecondaryContactPerson from "./SecondaryContactPerson";

const mapStateToProps = (state) => ({
  contactPersons: authorizedPersonsSelector(state),
  // contactPersons: primaryContactPersonsSelector(state),
});

export default connect(mapStateToProps, null)(SecondaryContactPerson);
