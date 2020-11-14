import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  typography: {
    fontSize: "40px",
    fontWeight: 900,
    textTransform: "uppercase",
    textAlign: "center",
    lineHeight: 3
  },
}));

function Title(props) {
  const classes = useStyles();

  return <div className={classes.typography}> Sản phẩm bán chạy </div>;
}

Title.propTypes = {};

export default Title;
