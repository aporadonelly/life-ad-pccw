import { connect } from "react-redux";
import CompanyProfile from "./CompanyProfile";
import { bindActionCreators } from "redux";
import { companyRegInfoSelector, errorSelector, isLoadingSelector } from "../../../redux/features/company/selector";
import { LdRegCmpnyInfoforAdmnPrtl } from "@redux/features/company/action";
import { getAuthorizedPersonList } from "@redux/features/employers/actions";
import { authPersonInfoListSelector } from "../../../redux/features/employers/selectors";

const mapStateToProps = state => ({
  isLoading: isLoadingSelector(state),
  error: errorSelector(state),
  companyRegInfo: companyRegInfoSelector(state),
  authPersonList: authPersonInfoListSelector(state)
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ LdRegCmpnyInfoforAdmnPrtl, getAuthorizedPersonList }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyProfile);