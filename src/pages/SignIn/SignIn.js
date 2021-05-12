import { useTranslation } from "react-i18next";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  isLoadingSelector,
  errorSelector,
} from "@redux/features/user/selectors";
import { login } from "@redux/features/user/actions";
import * as yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Avatar, Typography } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import {
  LockOutlined as LockOutlinedIcon,
  PersonOutlineOutlined as PersonOutlineOutlinedIcon,
} from "@material-ui/icons";
import { Formik } from "formik";
import { Form } from "@components/common";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
  },
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    backgroundColor: theme.palette.primary.main,
  },
}));

const SignIn = ({ isLoading, error, login }) => {
  const classes = useStyles();
  const { t } = useTranslation(["typography", "form", "button"]);

  const handleSubmit = (values) => {
    login(values);
  };

  return (
    <Container className={classes.container} maxWidth="xs">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12} align="middle">
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon fontSize="large" />
              </Avatar>
            </Grid>
            <Grid item xs={12} align="middle">
              <Typography component="h1" variant="h5">
                {t("typography:heading.signIn")}
              </Typography>
            </Grid>
            {error && (
              <Grid item xs={12}>
                <Alert severity="error">{error}</Alert>
              </Grid>
            )}
            <Grid item xs={12}>
              <Form.Input
                label={t("form:label.username")}
                name="username"
                InputProps={{
                  startAdornment: <PersonOutlineOutlinedIcon />,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Form.Input
                type="password"
                label={t("form:label.password")}
                name="password"
                InputProps={{
                  startAdornment: <LockOutlinedIcon />,
                }}
              />
            </Grid>
            <Grid item xs={12} align="middle">
              <Form.Submit disabled={isLoading} fullWidth>
                {t("button:signIn")}
              </Form.Submit>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  isLoading: isLoadingSelector(state),
  error: errorSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ login }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
