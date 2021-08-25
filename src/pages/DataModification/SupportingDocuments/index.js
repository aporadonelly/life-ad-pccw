import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { vldUpldDoc } from "@redux/features/dataModification/actions";
import SupportingDocuments from "./SupportingDocuments";
import { isLoadingSelector } from "@redux/features/dataModification/selectors";

const mapStateToProps = (state) => ({
  isLoading: isLoadingSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      vldUpldDoc,
    },
    dispatch
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SupportingDocuments);
