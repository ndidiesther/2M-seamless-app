import { React, useState } from "react";
import ShowExamples from "../../Pages/SignInModal";
// import SignIn from "./SignIn";


function Register() {
    const [modalShow2, setModalShow2] = useState(false);
  
    return (
      <>
        <span variant="primary" onClick={() => setModalShow2(true)}>
          Sign In
        </span>
  
        <ShowExamples 
          show={modalShow2}
          onHide={() => setModalShow2(false)}
        />
         
      </>
    );
  }
  
export default Register
