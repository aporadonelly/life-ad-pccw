import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  clientSchemesSelector,
  termsSelector,
  saveSelector,
  validateSelector,
  reasonSelector,
} from "@redux/features/employees/termination/selectors";
import {
  loadEmpSchemes,
  loadEmpTerm,
  saveTermination,
  validTermination,
  loadTermReason,
} from "@redux/features/employees/termination/actions";
import Termination from "./Termination";

const mapStateToProps = (state) => ({
  clientSchemes: clientSchemesSelector(state),
  terms: termsSelector(state),
  save: saveSelector(state),
  valid: validateSelector(state),
  reason: reasonSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      loadEmpSchemes,
      loadEmpTerm,
      saveTermination,
      validTermination,
      loadTermReason,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Termination);
