import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  customTypeByIdSelector,
  countrySelector,
} from "@redux/features/system/selectors";
import { Chip as MuiChip } from "@material-ui/core";

const Chip = (props) => {
  const { customType, country, label } = props;
  const { t } = useTranslation(["form"]);
  const value = customType?.cstmTypDtlTxt ?? country?.cntryTypNm ?? props.value;
  return <MuiChip label={`${t(`form:label.${label}`)} : ${value}`} />;
};

const mapStateToProps = (state, { value }) => ({
  country: countrySelector(state, value),
  customType: customTypeByIdSelector(state, value),
});

export default connect(mapStateToProps, null)(Chip);
