import React from "react";
import PropTypes from "prop-types";
import { Typography, Box, Grid } from "@material-ui/core";

function InforItem(props) {
  // eslint-disable-next-line react/prop-types
  const { icon, content } = props;
  return (
    <Grid container alignItems="center">
      <Grid item>{icon}</Grid>
      <Grid item>
        <Typography component="div">
          <Box fontSize={18} ml={1} lineHeight={2}>
            {content}
          </Box>
        </Typography>
      </Grid>
    </Grid>
  );
}

InforItem.propTypes = {};

export default InforItem;
