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
  valuesActionSelector,
} from "@redux/features/employees/termination/selectors";

import {
  loadEmpSchemes,
  loadMbrTerm,
  saveTermination,
  validTermination,
  loadTermReason,
  passValuesActions,
  resetTermination,
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
  valuesActions: valuesActionSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      loadEmpSchemes,
      loadMbrTerm,
      saveTermination,
      validTermination,
      loadTermReason,
      passValuesActions,
      resetTermination,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Termination);
