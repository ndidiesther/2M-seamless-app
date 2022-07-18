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
        <FormLabel className="sex-label" id="demo-row-radio-buttons-group-label">Sex*</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="female"
            control={
              <Radio
                sx={{
                  "&.Mui-checked": {
                    color: "#bc9a43",
                  },
                  "&.css-1nrlq1o-MuiFormControl-root. css-j204z7-MuiFormControlLabel-root": {
                      marginRight: "10px"
                  }
                }}
              />
            }
            label="Female"
          />
          <FormControlLabel
            value="male"
            control={
              <Radio
                sx={{
                  "&.Mui-checked": {
                    color: "#bc9a43",
                  },
                }}
              />
            }
            label="Male"
          />
          <FormControlLabel
            value="other"
            control={
              <Radio
                sx={{
                  "&.Mui-checked": {
                    color: "#bc9a43",
                  },
                }}
              />
            }
            label="Prefer not to say"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
