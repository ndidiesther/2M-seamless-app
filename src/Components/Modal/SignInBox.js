import React from "react";
import { Link } from "react-router-dom";
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const SignInBox = () => {
  return (
    <div className="todo-list">
      <span className="todo-item">
        <Checkbox {...label} />
        <span className="check-item">Remember me</span>
      </span>

      <span>
        <Link to="">Forgot Password</Link>
      </span>
    </div>
  );
};

export default SignInBox;
