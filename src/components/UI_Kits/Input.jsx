import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";

export default function Input({ name, label, value, type, error, onChange, startAdornment, endAdornment }) {
  return (
    <FormControl error={error} variant="outlined" fullWidth>
      <InputLabel>{label.toUpperCase()}</InputLabel>

      <OutlinedInput
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        startAdornment={<InputAdornment position="start" >{startAdornment}</InputAdornment>}
        endAdornment={endAdornment}
        labelWidth={label.length * 10}
      />
    </FormControl>
  );
}
