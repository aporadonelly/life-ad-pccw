import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  clientSchemesSelector,
  termsSelector,
  saveSelector,
  validateSelector,
  reasonSelector,
  isLoadingSelector,
  errorSelector,
  isSavingSelector,
} from "@redux/features/employees/termination/selectors";

import {
  loadEmpSchemes,
  loadMbrTerm,
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
  isLoading: isLoadingSelector(state),
  error: errorSelector(state),
  isSaving: isSavingSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      loadEmpSchemes,
      loadMbrTerm,
      saveTermination,
      validTermination,
      loadTermReason,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Termination);
