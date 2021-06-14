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
  entitleLspSpSelector,
  detailsLspSpSelector,
  payMethodSelector,
  bankListSelector,
  clntBnkInfoSelector,
  isSavingSelector,
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
  getEntitleLSPSP,
  getLspspDetails,
  loadPayMethod,
  loadBankList,
  loadClntBnkInfo,
} from "@redux/features/employees/termination/actions";
import { getTermReasons } from "@redux/features/system/actions";

import Termination from "./Termination";

const mapStateToProps = (state) => ({
  clientSchemes: clientSchemesSelector(state),
  terms: termsSelector(state),
  save: saveSelector(state),
  valid: validateSelector(state),
  isSaving: isSavingSelector(state),
  reason: termReasonsSelector(state),
  isLoading: isLoadingSelector(state),
  error: errorSelector(state),
  valuesActions: valuesActionSelector(state),
  cycleDate: cycleDateSelector(state),
  entitleLspSp: entitleLspSpSelector(state),
  detailsLspSp: detailsLspSpSelector(state),
  payMethod: payMethodSelector(state),
  bankList: bankListSelector(state),
  clnBnkInfo: clntBnkInfoSelector(state),
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
      getEntitleLSPSP,
      getLspspDetails,
      loadPayMethod,
      loadBankList,
      loadClntBnkInfo,
      getTermReasons,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Termination);
