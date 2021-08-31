import { Container } from "@material-ui/core";
import { useStyles } from "./styles";

const PageInner = (props) => {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.root} {...props} />
    </Container>
  );
};

export default PageInner;
