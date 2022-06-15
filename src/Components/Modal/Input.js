import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../../Styles/Modal.css";
import styled from "styled-components";

const StyledTextField = styled(TextField)`
  &
    .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused
    .MuiOutlinedInput-notchedOutline {
    border-color: #bc9a43 !important;
  }

  & .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
    border: 2px solid rgba(0, 0, 0, 0.23) !important;
  }
  & .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: black !important;
  }
  .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused
  .MuiOutlinedInput-notchedOutline {
  border: 2px solid #bc9a43 !important;
}
`;

const Input = ({ placeholder }) => {
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
        <StyledTextField
          id="demo-helper-text-misaligned-no-helper"
          label={placeholder}
          style={{ width: 450 }}
        />
      </Box>
    </React.Fragment>
  );
};

export default Input;
