import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import React from "react";

export default function Input({
  name,
  label,
  value,
  type,
  error,
  onChange,
  startAdornment,
  endAdornment
}) {
  return (
    <FormControl error={error} variant="outlined" fullWidth>
      <TextField
        fullWidth
        variant="outlined"
        name={name}
        type={type}
        value={value}
        label={label}
        onChange={onChange}
        startAdornment={
          <InputAdornment position="start">{startAdornment}</InputAdornment>
        }
        endAdornment={endAdornment}
        labelWidth={label.length * 10}
        style={{ width: 350, marginTop: 8 }}
      />
    </FormControl>
  );
}
