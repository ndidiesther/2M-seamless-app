import React from "react";
import "../../Styles/Modal.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { inputLabelClasses } from "@mui/material/InputLabel";

const Input = ({ placeholder, focused }) => {
  return (
    <React.Fragment>
      <Box
        className="box_input"
        sx={{
          display: "flex",
          alignItems: "center",
          "& > :not(style)": { m: 1 },
        }}
      >
        <TextField
          InputLabelProps={{
            sx: {
              // set the color of the label when not shrinked
              color: "",
              [`&.${inputLabelClasses.shrink}`]: {
                // set the color of the label when shrinked (usually when the TextField is focused)
                color: "#000",
              },
            },
          }}
          sx={{
            ".MuiOutlinedInput-root.Mui-focused": {
              "& > fieldset": {
                borderColor: "#bc9a43",
              },
            },
            ".MuiOutlinedInput-root:hover": {
              "& > fieldset": {
                borderColor: "#bc9a43",
                borderWidth: "2px",
              },
            },

            ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
              border: "2px solid rgba(0, 0, 0, 0.23)",
            },
            ".css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
              {
                border: "2px solid #bc9a43",
              },

            // "& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
            //   color: "#000",
            // },
          }}
          id="demo-helper-text-misaligned-no-helper"
          label={placeholder}
          style={{ width: 450 }}
          focused={focused}
        />
      </Box>
    </React.Fragment>
  );
};

export default Input;
