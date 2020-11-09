import React from "react";
import PropTypes from "prop-types";
import CategoryItem from "./CategoryItem";
import { Grid } from "@material-ui/core";

Category.propTypes = {};

function Category(props) {
  const {categoryArray} = props;
  return (
    <Grid container direction="row" justify="space-between">
      {categoryArray.map((item) => (
        <Grid item auto>
          <CategoryItem image={item.image} title={item.title}/>
        </Grid>
      ))}
    </Grid>
  );
}

export default Category;
