import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { CardMedia, Card, Typography } from "@material-ui/core";
import ImageMedia from "../../UI_Kits/ImageWithMask";

CategoryItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
};

CategoryItem.defaultProps = {
  image: "https://picsum.photos/600",
  title: "",
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    background: "firebrick",
    width: "12.6%",
    margin: "2%",
    "&:before": {
      content: '" "',
      float: "left",
      paddingTop: "100%",
    },
    ["@media (max-width: 768px)"]: {
      width: "29.3%",
      background: "red",
    },
    ["@media (max-width: 425px)"]: {
      width: "46%",
      background: "yellow",
    },
  },
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
    <div className={classes.root}>
      <ImageMedia image={image} title={title} />
      <Typography
        className={classes.typography}
        gutterBottom
        variant="h6"
        component="h2"
        noWrap={true}
      >
        {title}
      </Typography>
    </div>
  );
}

export default CategoryItem;
