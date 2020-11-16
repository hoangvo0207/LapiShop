import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import lapi from "../../assets/lapi.png";
import SearchBar from "../SearchBar/index.jsx";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  lapi: {
    padding: theme.spacing(0),
    textAlign: "center",
    height: 150,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 10
  },
  search: {
    marginLeft: -70,
    marginTop: 30
  },
  contact: {}
}));

const Detail = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <img className={classes.lapi} src={lapi} alt="lapi" />
        </Grid>
        <Grid item xs={7} className={classes.search}>
          <SearchBar />
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </div>
  );
};

export default Detail;
