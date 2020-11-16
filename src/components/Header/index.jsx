import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Badge } from "@material-ui/core";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";

import Menu from "./Menu";
import InputSearch from "./InputSearch";
import lapi from "../../assets/lapi.png";

const useStyles = makeStyles(() => ({
  root: {
    position: "sticky",
    top: 0,
    backgroundColor: "#FFF",
    zIndex: "9999",
    display: "flex",
    padding: "0px 20px",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0 1px 3px rgba(0,0,0,.1)"
  },
  image: {
    width: 200,
    height: 100,
    marginBottom: 20,
    marginTop: 20
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img className={classes.image} src={lapi} />
      <Menu />
      <InputSearch />
      <Badge badgeContent={0} color="primary" showZero>
        <LocalMallOutlinedIcon />
      </Badge>
    </div>
  );
}
