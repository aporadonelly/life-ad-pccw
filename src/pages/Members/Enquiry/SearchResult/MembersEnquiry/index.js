import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { enquirySelector } from "@redux/features/members/selectors";
import { saveEnquiry } from "@redux/features/members/actions";
import MembersEnquiryChip from "./MembersEnquiryChip";

const mapStateToProps = (state) => ({
  enquiry: enquirySelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      saveEnquiry,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(MembersEnquiryChip);
