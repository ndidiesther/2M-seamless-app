import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function Sex() {
  return (
    <div className="select_sex">
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Sex*</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel
            value="other"
            control={<Radio />}
            label="Prefer not to say"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
