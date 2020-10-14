import React from "react";
import { Button } from '@material-ui/core';
  

export default function ButtonSubmit({ name, disabled }) {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      disabled={disabled}
    >
      {name}
    </Button>
  );
}
