import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// added
//import axios from "axios";
//import decode from "jwt-decode";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getUserPerLogin } from '../../actions/userActions';
import { setTokenDecode } from '../../redux/userAuth/userAuth.actions';
import axios from 'axios';

//axios.defaults.withCredentials = true;
// end of added

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {
  /// start of added

  const history = useHistory();
  const classes = useStyles();
  //IMPORTANT: version is based on README_TOKEN.md
  // NOTE: Optional and for release testing only. Log-in to a specific code release version.
  const initForm = { username: '', password: '', version: '20210201120000' };
  const [user, setUser] = useState(initForm);
  const dispatch = useDispatch();

  // will fix here basura codes

  const handleChange = event => {
    const { value, name } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    // try {
    //   const response = await axios.post(
    //     "https://ec2-18-163-183-202.ap-east-1.compute.amazonaws.com/ad/api/auth/login",
    //     {
    //       username: user.username,
    //       password: user.password,
    //     }
    //   );
    //   const res = await axios.get(
    //     "https://ec2-18-163-183-202.ap-east-1.compute.amazonaws.com/ad/api/auth/userinfo",
    //     {
    //       headers: {
    //         Authorization: `Bearer ${response.data.sessionToken}`,
    //       },
    //     }
    //   );

    //   dispatch({
    //     type: "SET_USER_AUTH_DETAILS",
    //     payload: {
    //       firstName: res.data.displayName,
    //       lastName: null,
    //       role: "Admin Operator",
    //     },
    //   });
    // } catch {
    //   alert("Invalid credentials");
    // }

    // if (user.username === "lorem" && user.password === "password") {
    //   dispatch({
    //     type: "SET_USER_AUTH_DETAILS",
    //     payload: {
    //       firstName: "lorem",
    //       lastName: "Ipsum",
    //       role: "Admin Operator",
    //     },
    //   });

    //   window.location.href = "/dashboard";
    // } else {
    //   alert("Invalid credentials");
    // }

    try {
      const response = await axios.post(
        'https://ec2-18-163-183-202.ap-east-1.compute.amazonaws.com/ad/api/auth/login',
        user
        // {
        //   httpsAgent: new https.Agent({
        //     rejectUnauthorized: false,
        //   }),
        // }
      );

      const res2 = await axios.get(
        'https://ec2-18-163-183-202.ap-east-1.compute.amazonaws.com/ad/api/auth/userinfo',
        {
          headers: {
            Authorization: `Bearer ${response.data.sessionToken}`,
          },
          // httpsAgent: new https.Agent({
          //   rejectUnauthorized: false,
          // }),
        }
      );

      dispatch({
        type: 'SET_USER_AUTH_DETAILS',
        payload: {
          firstName: res2.data.displayName,
          lastName: null,
          role: 'Admin Operator',
        },
      });

      setTimeout(() => (window.location.href = '/dashbaord'), 1500);
    } catch (error) {
      alert('Invalid credentials');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default Login;
