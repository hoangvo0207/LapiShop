import React from "react";
import PropTypes from "prop-types";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    padding: "10px 2%",
    textTransform: "uppercase"
  },
  titleTypography: {
    fontWeight: "900",
    fontSize: "44px",
    marginBottom: "15px",
  },
  description: {
    color: "#777777",
    fontSize: "18px",
  },
  hotTypography: {
    fontWeight: "900",
    color: "#F2F2F2",
    fontSize: "200px",
    margin: "0"
  },
  ["@media (max-width: 768px)"]: {
    titleTypography: {
      fontSize: "28px",
      marginBottom: "5px",
    },
    description: {
      fontSize: "14px",
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
          <p className={classes.titleTypography}>NEW ARRIVALS</p>
          <p className={classes.description}>
            Các mẫu mới về - chất hơn nước cất
          </p>
        </span>
      </Grid>
      <Grid item>
        <p className={classes.hotTypography}>Arrival</p>
      </Grid>
    </Grid>
  );
}

Title.propTypes = {};

export default Title;
