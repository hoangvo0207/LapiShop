/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import Slideshow from "./Slideshow";
import Title from "./Title";

const useStyles = makeStyles(() => ({
  background: {
    backgroundColor: "#FBFBFB",
    padding: "2%"
  },
  title: {
    textAlign: "center"
  },
  root: {
    width: "70vw"
  }
}));

function Feedback(props) {
  // eslint-disable-next-line react/prop-types
  const classes = useStyles();
  const { slideImages, slidesToShow, height } = props;
  return (
    <Grid
      className={classes.background}
      container
      alignItems="center"
      justify="space-between"
    >
      <Grid className={classes.title} item>
        <Title />
      </Grid>
      <Grid item className={classes.root}>
        <Slideshow slideImages={slideImages} />
      </Grid>
    </Grid>
  );
}

Feedback.propTypes = {
  slideImages: PropTypes.array,
};

Feedback.defaultProps = {
  slideImages: [],
};

export default Feedback;
