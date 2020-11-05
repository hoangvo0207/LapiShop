import React, { useState } from "react";
import { Link } from "react-router-dom";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';

import ButtonSubmit from "../UI_Kits/ButtonSubmit.jsx";
import Input from "../UI_Kits/Input.jsx";
import Logo from '../UI_Kits/Logo';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 10px 2px #ececec",
    padding: theme.spacing(0, 8, 0, 8),
    backgroundColor: "#fff",
    height: "100vh"
  },
  typography: {
    margin: theme.spacing(3),
    textAlign: "center",
    fontWeight: "600",
    color: "#8e8e8e"
  },
  containerGrid: {
    margin: theme.spacing(0, 0, 4, 0),
  },
  link: {
    color: "#3578b7",
  }
}));

export default function SignUp(props) {
  const classes = useStyles();
  const [checkConfirmPassword, setCheckConfirmPassword] = useState(false);

  const [values, setValues] = useState({
    password: "",
    confirmPassword: "",
    showPassword: false,
    checkConfirmPassword: false,
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setValues({
      ...values,
      [name]: value,
    });

    if (name === "confirmPassword") {
      setCheckConfirmPassword(value === values.password);
    }
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  return (
    <Container component="main" maxWidth="sm">
      <div className={classes.paper}>
        <Logo />
        <Typography component="h1" variant="h5" className={classes.typography}>
          Tạo tài khoản ngay, mua sắm liền tay
        </Typography>
        <Grid container spacing={2} className={classes.containerGrid}>
          <Grid item xs={12}>
            <Input
              name="email"
              type="text"
              value={values.email}
              onChange={handleChange}
              label="Email"
              error={null}
              startAdornment={<EmailIcon color="primary"/>}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              name="password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange}
              label="Password"
              error={null}
              startAdornment={<LockIcon color="primary"/>}
              endAdornment={
                <IconButton onClick={handleClickShowPassword}>
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              }
            ></Input>
          </Grid>
          <Grid item xs={12}>
            <Input
              name="confirmPassword"
              type="password"
              value={values.confirmPassword}
              onChange={handleChange}
              label="Confirm Password"
              error={
                values.confirmPassword === "" ? null : !checkConfirmPassword
              }
              startAdornment={<ConfirmationNumberIcon color="primary"/>}
              endAdornment={
                values.confirmPassword === "" ? null : !checkConfirmPassword ? (
                  <ErrorIcon color="error" />
                ) : (
                  <CheckCircleIcon color="primary" />
                )
              }
            ></Input>
          </Grid>
          <Grid item xs={12}>
            <ButtonSubmit
              name="Sign Up"
              disabled={
                !(
                  values.email !== "" &&
                  values.password !== "" &&
                  values.confirmPassword !== "" &&
                  checkConfirmPassword
                )
              }
            />
          </Grid>
        </Grid>

        <Grid container justify="center" className={classes.containerGrid}>
          <Grid item>
            <Link to="/SignIn" className={classes.link}>
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </div>
    </Container>

  );
}