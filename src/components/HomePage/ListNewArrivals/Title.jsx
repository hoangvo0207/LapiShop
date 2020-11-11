import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    padding: "10px 2%"
  },
  titleTypography: {
    fontWeight: "700",
    textTransform: "uppercase",
    fontSize: "54px",
    marginBottom: "15px",
  },
  description: {
    color: "#777777",
    textTransform: "uppercase",
  },
  hotTypography: {
    fontWeight: "900",
    color: "#F2F2F2",
    fontSize: "230px",
    textTransform: "uppercase",
  },
  ["@media (max-width: 768px)"]: {
    titleTypography: {
      fontSize: "28px",
      marginBottom: "7px",
    },
    description: {
      fontSize: "18px",
    },
    hotTypography: {
      display: "none",
    },
  },
});

function Title(props) {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.root}
      justify="space-between"
      alignItems="center"
    >
      <Grid item>
        <span>
          <Typography className={classes.titleTypography} variant="h3">
            NEW ARRIVALS
          </Typography>
          <Typography className={classes.description} variant="h5">
            Các mẫu mới về - chất hơn nước cất
          </Typography>
        </span>
      </Grid>
      <Grid item>
        <Typography className={classes.hotTypography} variant="h1">
          Arrival
        </Typography>
      </Grid>
    </Grid>
  );
}

Title.propTypes = {};

export default Title;
