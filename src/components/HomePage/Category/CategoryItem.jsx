import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import ImageMedia from "../../UI_Kits/ImageWithMask";
import ImageProduct from "../../UI_Kits/ImageProduct";
import SetLayoutOfItem from "../../UI_Kits/SetLayoutOfItem";

CategoryItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
};

CategoryItem.defaultProps = {
  image: "https://picsum.photos/600",
  title: ""
};

const useStyles = makeStyles((theme) => ({
  typography: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    color: "white",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: "24px",
    zIndex: "100",
  },
}));

function CategoryItem(props) {
  const classes = useStyles();

  const { image, title } = props;

  return (
    <SetLayoutOfItem>
      <ImageProduct>
        <ImageMedia image={image} title={title} />
      </ImageProduct>
      <Typography
        className={classes.typography}
        gutterBottom
        variant="h6"
        component="h2"
        noWrap={true}
      >
        {title}
      </Typography>
    </SetLayoutOfItem>
  );
}

export default CategoryItem;
