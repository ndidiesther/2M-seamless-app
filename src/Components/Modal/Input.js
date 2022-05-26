import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../../Styles/Modal.css";

const Input = ({placeholder}) => {
  return (
    <React.Fragment>
      <Box className="box_input"
        sx={{
          display: "flex",
          alignItems: "center",
          "& > :not(style)": { m: 1 },
        }}
      >
        <TextField id="demo-helper-text-misaligned-no-helper" label={placeholder} />
      </Box>
    
    </React.Fragment>
  );
};

export default Input;
