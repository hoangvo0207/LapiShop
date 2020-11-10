import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ImageWithAction from "./ImageWithAction";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 250,
    textAlign: "center",
    cursor: "pointer",
  },
  // media: {
  //   height: 250,
  // },
  typographyWeight: {
    fontWeight: "bold",
    "&:hover": {
      color: '#79858C',
    }
  },
}));

export default function MediaCard(props) {
  const classes = useStyles();
  const { image, name } = props;

  return (
    <div className={classes.root}>
      <ImageWithAction image={image} title={name} />
      <Typography
        className={classes.typographyWeight}
        variant="h6"
        component="h2"
        // noWrap={true}
      >
        {name}
      </Typography>
      <Typography variant="h6" component="h2" >
        18.000₫
      </Typography>
    </div>
  );
}
