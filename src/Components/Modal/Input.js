import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../../Styles/Modal.css";
import styled from "styled-components";



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
        <TextField
          id="demo-helper-text-misaligned-no-helper"
          label={placeholder}
          style={{ width: 450 }}
        />
      </Box>
    </React.Fragment>
  );
};

export default Input;



// export const InputContainer = styled.Box`
//   text-transform: capitalize;
//   font-size: 1rem;
//   background: #bc9a43;
//   border: 0.05rem solid #bc9a43;
//   border-color: ${(props) => (props.cart ? "blue" : "#BC9A43")};
//   color: ${(props) => (props.cart ? "Black" : "white")};
//   border-radius: ${(props) => (props.cart ? "0.5rem" : "0")};
//   /* border-radius: 0.5rem; */
//   padding: 1rem 0.5rem;
//   width: 100%;
//   cursor: pointer;
//   margin: 0.2rem 0.5rem 0.2rem 0;
//   font-weight: bold;
//   transition: all 0.5s ease-in-out;
//   &:hover {
//     background: ${(props) => (props.cart ? "green" : "transparent")};
//     color: #bc9a43;
//   }
//   &:focus {
//     outline: none;
//   }
// `;
