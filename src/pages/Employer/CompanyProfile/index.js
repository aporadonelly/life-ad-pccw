import { connect } from "react-redux";
import CompanyProfile from "./CompanyProfile";
import { bindActionCreators } from "redux";
import { companyRegInfoSelector, errorSelector, isLoadingSelector } from "../../../redux/features/company/selector";
import { LdRegCmpnyInfoforAdmnPrtl } from "@redux/features/company/action";

const mapStateToProps = state => ({
  isLoading: isLoadingSelector(state),
  error: errorSelector(state),
  companyRegInfo: companyRegInfoSelector(state),
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ LdRegCmpnyInfoforAdmnPrtl }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyProfile);