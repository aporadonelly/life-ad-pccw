import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  clientSchemesSelector,
  saveSelector,
  validateSelector,
  isLoadingSelector,
  errorSelector,
  valuesActionSelector,
  termsSelector,
} from "@redux/features/employees/termination/selectors";

import {
  cycleDateSelector,
  termReasonsSelector,
} from "@redux/features/system/selectors";

import {
  loadEmpSchemes,
  loadMbrTerm,
  saveTermination,
  validTermination,
  passValuesActions,
  resetTermination,
} from "@redux/features/employees/termination/actions";
import Termination from "./Termination";

const mapStateToProps = (state) => ({
  clientSchemes: clientSchemesSelector(state),
  terms: termsSelector(state),
  save: saveSelector(state),
  valid: validateSelector(state),
  reason: termReasonsSelector(state),
  isLoading: isLoadingSelector(state),
  error: errorSelector(state),
  valuesActions: valuesActionSelector(state),
  cycleDate: cycleDateSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      loadEmpSchemes,
      loadMbrTerm,
      saveTermination,
      validTermination,
      passValuesActions,
      resetTermination,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Termination);
