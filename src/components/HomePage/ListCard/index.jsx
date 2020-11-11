import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";

import Card from "../../UI_Kits/Card";

const useStyles = makeStyles((theme) => ({
  grid: {
    display: "flex",
    flexWrap: "wrap",
  },
}));

function ListCard(props) {
  const classes = useStyles();
  const { listProducts } = props;

  return (
    <div className={classes.grid}>
      {listProducts?.map((item) => {
        return <Card image={item.image} name={item.name} price={item.price} />;
      })}
    </div>
  );
}

ListCard.propTypes = {
  listProducts: PropTypes.array
};

ListCard.defaultProps = {
  listProducts: []
};

export default ListCard;
