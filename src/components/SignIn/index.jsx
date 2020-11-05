import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Link } from '@material-ui/core';

import Banner from "../UI_Kits/Banner"
import ButtonSubmit from "../UI_Kits/ButtonSubmit";
import Logo from "../UI_Kits/Logo";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: theme.spacing(8, 4),
  },
  username: {
    width: 350,
    marginTop: theme.spacing(2),
  },
  password: {
    width: 350,
    marginTop: theme.spacing(2),
  },
  button: {
    width: "100%",
    minHeight: theme.spacing(5),
    marginTop: theme.spacing(1),
    //backgroundColor: "#941f16"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  h5: {
    textAlign: "center",
    fontStyle: "normal",
    fontWeight: 550,
    marginTop: 20,
  },
}));

export default function SignIn(props) {
  const classes = useStyles();
  const [checkConfirmPassword, setCheckConfirmPassword] = useState(false);

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  return (
    <Container className={classes.root}>
      <Banner />

      <Grid item container alignItems="center" xs={12} sm={6} md={5} lg={4}>
        <div className={classes.container}>
          <div className={classes.content}>
            <Logo />

            <React.Fragment>
              <Typography variant="h5" gutterBottom className={classes.h5}>
                Sign In
              </Typography>

              <TextField
                name="email"
                type="text"
                variant="outlined"
                className={classes.username}
                value={values.email}
                onChange={handleChange}
                label="Email"
                error={null}
              />

              <TextField
                name="password"
                type={values.showPassword ? "text" : "password"}
                variant="outlined"
                value={values.password}
                className={classes.password}
                onChange={handleChange}
                label="Password"
                error={null}
              >
                <IconButton onClick={handleClickShowPassword}>
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </TextField>

              <ButtonSubmit
                name="Sign In"
                disabled={!(values.email && values.password)}
              />

              <Link
                underline="none"
                href="/forgot-password"
                className={classes.button}
              >
                <Button
                  fullWidth
                  className={classes.button}
                  variant="contained"
                  color="primary"
                >
                  Forgot Password?
                </Button>
              </Link>

              <Link
                underline="none"
                href="/SignUp"
                className={classes.button}
              >
                <Button
                  fullWidth
                  className={classes.button}
                  variant="contained"
                  color="primary"
                >
                  Don't have an account? Sign Up
                </Button>
              </Link>
            </React.Fragment>
          </div>
        </div>
      </Grid>
    </Container>
  );
}
