import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import {
  isLoadingSelector,
  errorSelector,
  draftEnquirySelector,
  employersSelector,
} from "@redux/features/registrationEmployer/selectors";
import {
  ldSrchCmpny,
  draftEnquiry,
  setSelectedPnsnId,
} from "@redux/features/registrationEmployer/actions";

import SearchResult from "./SearchResult";

const mapStateToProps = (state) => ({
  employers: employersSelector(state),
  isLoading: isLoadingSelector(state),
  error: errorSelector(state),
  enquiry: draftEnquirySelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    { ldSrchCmpny, draftEnquiry, setSelectedPnsnId, push },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
