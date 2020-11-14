import React from "react";
import PropTypes from "prop-types";
import { Grid, makeStyles, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  backgroundImage: {
    background: `url("https://d.wattpad.com/story_parts/731247754/images/159dd3c43913e7de434555401778.jpg") no-repeat center center fixed`,
    backgroundSize: "cover",
  },
  backgroundMask: {
    background: "#00000080",
  },
  image: {
    width: "50vw",
  },
  description: {
    maxWidth: "30vw",
    color: "#ffffff",
  },
  uppercase: {
    textTransform: "uppercase",
  },
  button: {
    background: "none",
    border: "1px #fff solid",
    padding: "15px 30px",
    fontSize: "18px",
    textTransform: "uppercase",
    color: "#ffffff"
  }
}));

function Trending(props) {
  const classes = useStyles();

  return (
    <div className={classes.backgroundImage}>
      <Grid
        container
        className={classes.backgroundMask}
        alignItems="center"
        justify="space-evenly"
      >
        <Grid item>
          <img
            className={classes.image}
            src="https://nocturnal.vn/wp-content/uploads/2020/02/1-2.jpg"
            alt="top1"
          />
        </Grid>
        <Grid item className={classes.description}>
          <Typography component="div">
            <Box className={classes.uppercase} fontWeight={900} fontSize={24}>
              #1 Trending
            </Box>
            <Box
              className={classes.uppercase}
              fontSize={70}
              lineHeight={1}
              fontWeight={900}
            >
              Longsleeve Shirt basic
            </Box>
            <Box fontSize={50} lineHeight={2}>
              165.000₫
            </Box>
          </Typography>
          <button className={classes.button}>Mua ngay</button>
        </Grid>
      </Grid>
    </div>
  );
}

Trending.propTypes = {};

export default Trending;
