import { connect } from "react-redux";
import CompanyProfile from "./CompanyProfile";
import { bindActionCreators } from "redux";
import {
  getAuthorizedPersonList,
  LdRegCmpnyInfoforAdmnPrtl,
} from "@redux/features/employers/actions";
import {
  authPersonInfoListSelector,
  companyRegInfoSelector,
  isLoadingSelector,
  errorSelector,
} from "@redux/features/employers/selectors";

const mapStateToProps = (state) => ({
  isLoading: isLoadingSelector(state),
  error: errorSelector(state),
  companyRegInfo: companyRegInfoSelector(state),
  authPersonList: authPersonInfoListSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    { LdRegCmpnyInfoforAdmnPrtl, getAuthorizedPersonList },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyProfile);
