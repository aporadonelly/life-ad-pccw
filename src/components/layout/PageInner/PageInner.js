import { useStyles } from "./styles";
import { Container } from "@material-ui/core";

const PageInner = (props) => {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.root} {...props} />
    </Container>
  );
};

export default PageInner;
