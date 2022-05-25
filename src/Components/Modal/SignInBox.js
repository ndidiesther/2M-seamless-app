import React from "react";
import { Link } from "react-router-dom";

const SignInBox = () => {
  return (
    <div className="todo-list">
      <span className="todo-item">
        <input type="checkbox" />
        <span className="check-item">Remember me</span>
      </span>

      <span>
        <Link to="">Forgot Password</Link>
      </span>
    </div>
  );
};

export default SignInBox;
