import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  clientSchemesSelector,
  termsSelector,
  saveSelector,
} from "@redux/features/employees/termination/selectors";
import {
  loadEmpSchemes,
  loadEmpTerm,
  saveTermination,
} from "@redux/features/employees/termination/actions";
import Termination from "./Termination";

const mapStateToProps = (state) => ({
  clientSchemes: clientSchemesSelector(state),
  terms: termsSelector(state),
  save: saveSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    { loadEmpSchemes, loadEmpTerm, saveTermination },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Termination);
