import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { push } from "@redux/helpers";
import {
  customTypeByGroupIdSelector,
  countriesSelector,
} from "@redux/features/system/selectors";
import {
  isLoadingSelector,
  errorSelector,
  draftEnquirySelector,
} from "@redux/features/registrationEmployee/selectors";
import {
  ldSrchRegInd,
  draftEnquiry,
} from "@redux/features/registrationEmployee/actions";
import SearchEnquiry from "./SearchEnquiry";

const mapStateToProps = (state) => ({
  isLoading: isLoadingSelector(state),
  error: errorSelector(state),
  gender: customTypeByGroupIdSelector(state, "GD"),
  idType: customTypeByGroupIdSelector(state, "ID"),
  nationality: customTypeByGroupIdSelector(state, "NTN"),
  placeOfBirth: countriesSelector(state),
  employeeType: customTypeByGroupIdSelector(state, "EP"),
  industryType: customTypeByGroupIdSelector(state, "NT"),
  occupation: customTypeByGroupIdSelector(state, "MB"),
  schemeType: customTypeByGroupIdSelector(state, "SC"),
  status: customTypeByGroupIdSelector(state, "ST"),
  enquiry: draftEnquirySelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      draftEnquiry,
      ldSrchRegInd,
      push,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchEnquiry);
