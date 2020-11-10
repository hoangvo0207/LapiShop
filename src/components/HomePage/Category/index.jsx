import React from "react";
import PropTypes from "prop-types";
import CategoryItem from "./CategoryItem";
import { makeStyles } from "@material-ui/core";

Category.propTypes = {};

const useStyles = makeStyles((theme) => ({
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    
  },  
}));

function Category(props) {
  const classes = useStyles();
  const { categoryArray } = props;

  return (
    <div className={classes.grid}>
      {categoryArray.map((item) => (
        <CategoryItem
          className={classes.item}
          image={item.image}
          title={item.title}
        />
      ))}
    </div>
  );
}

export default Category;
