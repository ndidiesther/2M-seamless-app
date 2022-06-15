import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Box } from "@mui/material";
import styled from "styled-components";


const StyledOutlinedInput = styled(OutlinedInput)`
  &
    .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused
    .MuiOutlinedInput-notchedOutline {
    border-color: #bc9a43 !important;
  }

  & .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
    border: 2px solid rgba(0, 0, 0, 0.23) !important;
  }
  & .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: #000 !important;
  }
  .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused
  .MuiOutlinedInput-notchedOutline {
  border: 2px solid #bc9a43 !important;
}
`;

function ShowAndHidePassword() {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          "& > :not(style)": { m: 1 },
        }}
      >
        <FormControl sx={{ m: 1 }} variant="outlined" style={{ width: 450 }}>
          <InputLabel htmlFor="outlined-adornment-password">
            Password*
          </InputLabel>
          <StyledOutlinedInput
            id="outlined-adornment-password"
            type={passwordType}
            onChange={handlePasswordChange}
            value={passwordInput}
            name="password"
            className="form-control"
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={togglePassword}>
                  {passwordType === "password" ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </Box>
    </React.Fragment>
  );
}
export default ShowAndHidePassword;
