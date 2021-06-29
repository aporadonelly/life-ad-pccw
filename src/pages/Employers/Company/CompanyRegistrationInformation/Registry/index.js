import { connect } from "react-redux";
import CompanyProfile from "./CompanyProfile";
import { bindActionCreators } from "redux";
import { LdRegCmpnyInfoforAdmnPrtl } from "@redux/features/employers/actions";
import {
  companyRegInfoSelector,
  isLoadingSelector,
  errorSelector,
} from "@redux/features/employers/selectors";

const mapStateToProps = (state) => ({
  isLoading: isLoadingSelector(state),
  error: errorSelector(state),
  companyRegInfo: companyRegInfoSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ LdRegCmpnyInfoforAdmnPrtl }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyProfile);
