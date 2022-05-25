import { React, useState } from "react";
import ShowExamples from "../../Pages/SignInModal";
// import SignIn from "./SignIn";

function Register({ setModalShow2, setModalShow, modalShow2 }) {
  // const [modalShow2, setModalShow2] = useState(false);

  return (
    <>
      <span
        variant="primary"
        onClick={() => {
          setModalShow2(true);
          setModalShow(false);
        }}
      >
        Sign In
      </span>

      <ShowExamples
        show={modalShow2}
        onHide={() => {
          setModalShow2(false);
          setModalShow(false);
        }}
      />
    </>
  );
}

export default Register;
