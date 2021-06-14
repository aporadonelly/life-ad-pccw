import { connect } from "react-redux";
import CompanyProfile from "./CompanyProfile";
import { bindActionCreators } from "redux";
import {
  getAuthorizedPersonList,
  LdRegCmpnyInfoforAdmnPrtl,
  getContactPerson
} from "@redux/features/employers/actions";
import {
  authPersonInfoListSelector,
  companyRegInfoSelector,
  contactPersonSelector,
  isLoadingSelector,
  errorSelector,
} from "@redux/features/employers/selectors";

const mapStateToProps = (state) => ({
  isLoading: isLoadingSelector(state),
  error: errorSelector(state),
  companyRegInfo: companyRegInfoSelector(state),
  authPersonList: authPersonInfoListSelector(state),
  contactPerson: contactPersonSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    { LdRegCmpnyInfoforAdmnPrtl, getAuthorizedPersonList, getContactPerson },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyProfile);
