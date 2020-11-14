import React from "react";
import PropTypes from "prop-types";
import { Typography, Box, Grid, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  title: {
    textTransform: "uppercase",
    color: "#7D7777",
  },
  uppercase: {
    textTransform: "uppercase",
  },
  changeColor: {
    color: "#7D7777",
  },
}));

function Title(props) {
  const classes = useStyles();
  return (
    <Grid container alignItems="center" justify="center">
      <Grid item>
        <Typography component="div">
          <Box className={classes.title} fontSize={18}>
            Feedbacks
          </Box>
          <Box
            className={classes.uppercase}
            fontSize={26}
            fontWeight={900}
            lineHeight={2}
          >
            Khách hàng
          </Box>
          <Box className={classes.changeColor} fontSize={18}>
            Hình ảnh khách hàng với thời trang Nocturnal menswear
          </Box>
          <Box className={classes.uppercase} fontSize={16} lineHeight={4}>
            <Link style={{ color: "#000000" }}>XEM THÊM</Link>
          </Box>
        </Typography>
      </Grid>
    </Grid>
  );
}

Title.propTypes = {};

export default Title;
