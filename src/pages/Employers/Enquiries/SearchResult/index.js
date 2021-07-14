import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import {
  isLoadingSelector,
  errorSelector,
  draftEnquirySelector,
  employersSelector,
} from "@redux/features/enrollmentEmployer/selectors";
import {
  ldSrchCmpny,
  draftEnquiry,
  setSelectedPnsnId,
} from "@redux/features/enrollmentEmployer/actions";
import { setSelectedCompanyUUID } from "@redux/features/registrationEmployer/actions";

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
      setSelectedPnsnId,
      push,
      setSelectedCompanyUUID,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
