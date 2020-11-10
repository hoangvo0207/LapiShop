import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '16%',
    margin: "2%",
    flexDirection: 'column',
    position: 'relative',
    ["@media (max-width: 768px)"]: {
      width: "29.3%",
    },
    ["@media (max-width: 425px)"]: {
      width: "46%",
    },
  },
}));

function SetLayoutOfItem(props) {
  const classes = useStyles();
  const { children } = props;

  return (
    <div className={classes.root}>
      { children }
    </div>
  )
}

SetLayoutOfItem.propTypes = {

}

export default SetLayoutOfItem

