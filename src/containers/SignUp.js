import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
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
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5" className={classes.typography}>
          Sign up
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
            <Input
              name="confirmPassword"
              type="password"
              value={values.confirmPassword}
              onChange={handleChange}
              label="Confirm Password"
              error={
                values.confirmPassword === "" ? null : !checkConfirmPassword
              }
            >
              <IconButton>
                {values.confirmPassword ===
                "" ? null : !checkConfirmPassword ? (
                  <ErrorIcon color="error" />
                ) : (
                  <CheckCircleIcon color="primary" />
                )}
              </IconButton>
            </Input>
          </Grid>
          <Grid item xs={12}>
            <ButtonSubmit name="Sign Up" disabled={true} />
          </Grid>
        </Grid>

        <Grid container justify="flex-end" className={classes.containerGrid}>
          <Grid item>
            {"Already have an account? "}
            {/* <Link href="#" variant="body2"> */}
            Sign in
            {/* </Link> */}
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
