import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { push } from "@redux/helpers";
import {
  isLoadingSelector,
  errorSelector,
  draftEnquirySelector,
  employersSelector,
} from "@redux/features/enrollmentEmployer/selectors";
import {
  ldSrchCmpny,
  draftEnquiry,
} from "@redux/features/enrollmentEmployer/actions";
import SearchResult from "./SearchResult";

const mapStateToProps = (state) => ({
  employers: employersSelector(state),
  isLoading: isLoadingSelector(state),
  error: errorSelector(state),
  enquiry: draftEnquirySelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      ldSrchCmpny,
      draftEnquiry,
      push,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
