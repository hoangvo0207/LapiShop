import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ImageWithAction from "./ImageWithAction";
import ImageProduct from "./ImageProduct";
import SetLayoutOfItem from "./SetLayoutOfItem";

const useStyles = makeStyles((theme) => ({
  typographyWeight: {
    position: "relative",
    fontWeight: "bold",
    "&:hover": {
      color: "#79858C",
    },
  },
}));

export default function MediaCard(props) {
  const classes = useStyles();
  const { image, name, price } = props;

  return (
    <SetLayoutOfItem>
      <ImageProduct>
        <ImageWithAction image={image} title={name} />
      </ImageProduct>
      <Typography
        className={classes.typographyWeight}
        variant="h6"
        component="h2"
        // noWrap={true}
      >
        {name}
      </Typography>
      <Typography variant="h6" component="h2">
        {price}
      </Typography>
    </SetLayoutOfItem>
  );
}
