import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";


export default function Input({ name, label, value, type, error, onChange, children }) {
  return (
    <FormControl error={error} variant="outlined" fullWidth required>
      <InputLabel>{label}</InputLabel>
      <OutlinedInput
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
              {children}
          </InputAdornment>
        }
        labelWidth={120}
      />
    </FormControl>
  );
}
