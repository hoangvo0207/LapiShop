import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { CardMedia, Card, Typography } from "@material-ui/core";

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
    width: 250,
    position: "relative",
    border: "none",
  },
  media: {
    transition: "all .7s",
    height: 250,
    backgroundSize: "120%",

    "&:hover": {
      cursor: 'pointer',
      backgroundSize: "150%",
    },

    "&:after": {
      display: "none",
      content: '""',
      position: "absolute",
      zIndex: "99",
      backgroundColor: "#88888860",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },

    "&:hover:after": {
      display: "grid",
      placeItems: "center",
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
    <Card hover className={classes.root}>
      <CardMedia
          className={classes.media}
          image={image}
          title={title}
        />
      <Typography
        className={classes.typography}
        gutterBottom
        variant="h6"
        component="h2"
        noWrap={true}
      >
        {title}
      </Typography>
    </Card>
  );
}

export default CategoryItem;
