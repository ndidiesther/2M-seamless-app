import { React, useState } from "react";
import Example from "../../Pages/SignInModal";
import ShowExample from "../../Pages/SignUpModal"
import Register from "./Register";
// import SignIn from "./SignIn";

function Login() {
  const [modalShow, setModalShow] = useState(false);
  const [modalShow1, setModalShow1] = useState(false);

  return (
    <>
      <span variant="primary" onClick={() => setModalShow(true)}>
        Login
      </span>

      <Example show={modalShow} onHide={() => setModalShow(false)} />

     
    </>
  );
}

export default Login;
