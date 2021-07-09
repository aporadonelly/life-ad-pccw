import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { push } from "connected-react-router";
import { contactPersonsSelector } from "@redux/features/enrollmentEmployer/selectors";
import { ldCntctPrsnInfo } from "@redux/features/enrollmentEmployer/actions";
import ContactPersonList from "./ContactPersonList";

const mapStateToProps = (state) => ({
  contactPersons: contactPersonsSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ push, ldCntctPrsnInfo }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactPersonList);
