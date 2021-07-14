import { connect } from "react-redux";
import {
  customTypesEntitiesSelector,
  customTypeByIdentitySelector,
  countriesEntitiesSelector,
  trusteesEntitiesSelector,
  schemesEntitiesSelector,
} from "@redux/features/system/selectors";
import Chip from "./Chip";

const mapStateToProps = (state, ownProps) => ({
  customTypes: customTypesEntitiesSelector(state),
  nationality: customTypeByIdentitySelector(state, {
    cstmTypDtlTxt: ownProps?.pair?.value,
  }),
  countries: countriesEntitiesSelector(state),
  trustees: trusteesEntitiesSelector(state),
  schemes: schemesEntitiesSelector(state),
});

export default connect(mapStateToProps, null)(Chip);
