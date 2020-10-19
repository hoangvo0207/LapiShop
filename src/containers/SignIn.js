import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import Input from "../components/UI_Kits/Input";
import ButtonSubmit from "../components/UI_Kits/ButtonSubmit";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  typography: {
    margin: theme.spacing(3),
  },
  containerGrid: {
    margin: theme.spacing(0, 0, 2, 0),
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
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5" className={classes.typography}>
          Sign in
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
            >
              <IconButton onClick={handleClickShowPassword}>
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </Input>
          </Grid>

          <Grid item xs={12}>
            <ButtonSubmit name="Sign In" disabled={!(values.email && values.password)} />
          </Grid>
        </Grid>

        <Grid container>
            <Grid item xs>
              <Link to="/forgot-password" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/signup" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
      </div>
    </Container>
  );
}
