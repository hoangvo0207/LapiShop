import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    width: "100%",
    boxShadow: "none",
  },
}));

export default function Menu() {
  const classes = useStyles();
  const labels = ["Trang chủ ", "Tất cả sản phẩm", "Áo", "Quần"];
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        centered
      >
        {labels.map((label) => (
          <Tab label={label} />
        ))}
      </Tabs>
    </Paper>
  );
}
