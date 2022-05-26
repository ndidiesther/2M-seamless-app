import Input from "../Components/Modal/Input";
import { Button, Modal } from "react-bootstrap";
import "../Styles/Modal.css";
import PasswordInput from "../Components/Modal/PasswordInput";
// import ButtonComponent from "../Components/Shared/ButtonComponent";
import { ButtonContainer } from "../Components/Shared/ButtonComponent";
import SignInBox from "../Components/Modal/SignInBox";
import { Link } from "react-router-dom";
import { useState } from "react";

function SignUpModal({ modalShow2, setModalShow, setModalShow2, ...props }) {
  const closeModalHandler = () => setModalShow2(false);
  const [signUpStep, setSignupStep] = useState(1);

  return (
    <Modal
      show={modalShow2}
      onHide={closeModalHandler}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {signUpStep === 1 ? (
        <FirstStep {...{ setSignupStep, setModalShow2, setModalShow }} />
      ) : (
        <SecondStep {...{ setSignupStep, setModalShow2, setModalShow }} />
      )}
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal.Footer>
    </Modal>
  );
}

export default SignUpModal;

const FirstStep = ({
  setSignupStep,
  setModalShow2,
  setModalShow,
  ...restProps
}) => {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="modal-title">
          <h2>First Signup</h2>
          <p>Welcome back, enter your details to log in</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Input placeholder="Username or email address *" />
        <PasswordInput />
        <SignInBox /> <br /> <br />
        <ButtonContainer onClick={() => setSignupStep(2)}>
          Continue 1
        </ButtonContainer>
        <br /> <br />
        <div className="account_signup">
          Don't have an account?
          {/* <span>
            <Link to="">Sign Up</Link>{" "}
          </span> */}
          <button
            onClick={() => {
              setModalShow2(false);
              setModalShow(true);
            }}
          >
            Sign Up
          </button>
        </div>
      </Modal.Body>
    </>
  );
};

const SecondStep = ({
  setSignupStep,
  setModalShow2,
  setModalShow,
  ...restProps
}) => {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="modal-title">
          <h2>Second Signup</h2>
          <p>Welcome back, enter your details to log in</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Input placeholder="Username or email address *" />
        <PasswordInput />
        <SignInBox /> <br /> <br />
        <ButtonContainer onClick={() => setSignupStep(1)}>
          Continue 2
        </ButtonContainer>
        <br /> <br />
        <div className="account_signup">
          Don't have an account?
          {/* <span>
            <Link to="">Sign Up</Link>{" "}
          </span> */}
          <button
            onClick={() => {
              setModalShow2(false);
              setModalShow(true);
            }}
          >
            Sign Up
          </button>
        </div>
      </Modal.Body>
    </>
  );
};
