import { memo } from "react";
import { Box } from "@material-ui/core";
import { reactStringReplace } from "@utils";

const HighlightedText = (props) => {
  const { text, match } = props;
  const re = new RegExp(`(${match})`, "gi");

  if (match && re.test(text)) {
    return reactStringReplace(text, match, (match, index) => (
      <Box key={index} display="inline" bgcolor="common.highlighted">
        {match}
      </Box>
    ));
  }

  return text;
};

export default memo(HighlightedText);
