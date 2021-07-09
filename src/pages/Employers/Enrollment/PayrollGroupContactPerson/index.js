import { connect } from "react-redux";
import { contactPersonsSelector } from "@redux/features/enrollmentEmployer/selectors";
import PayrollGroupContactPerson from "./PayrollGroupContactPerson";

const mapStateToProps = (state) => ({
  contactPersons: contactPersonsSelector(state),
});

export default connect(mapStateToProps, null)(PayrollGroupContactPerson);
