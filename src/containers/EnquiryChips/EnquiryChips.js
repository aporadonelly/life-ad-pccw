import { useStyles } from "./styles";
import {
  red,
  orange,
  yellow,
  green,
  blue,
  indigo,
  purple,
} from "@material-ui/core/colors";
import { roundrobin } from "@helpers";
import Chip from "./Chip";

const EnquiryChips = (props) => {
  const { enquiry } = props;
  const classes = useStyles();
  const getColor = roundrobin([
    red,
    orange,
    yellow,
    green,
    blue,
    indigo,
    purple,
  ]);

  return (
    <div className={classes.root}>
      {Object.entries(enquiry).map(([key, value]) => (
        <Chip
          key={key}
          pair={{ key, value }}
          style={{ backgroundColor: getColor()[700] }}
        />
      ))}
    </div>
  );
};

export default EnquiryChips;
