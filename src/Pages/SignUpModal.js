import Input from "../Components/Modal/Input";
import { Modal } from "react-bootstrap";
import "../Styles/Modal.css";
import PasswordInput from "../Components/Modal/PasswordInput";
import { ButtonContainer } from "../Components/Shared/ButtonComponent";
import { useState } from "react";
import CountrySelector from "./Country";
import Sex from "../Components/Modal/Sex";

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
        <button
          onClick={() => {
            setModalShow2(false);
            setModalShow(true);
            setSignupStep(1);
          }}
          className="back_arrow"
        >
          <i className="fa-solid fa-arrow-left"></i>Back
        </button>
        <Modal.Title id="contained-modal-title-vcenter" className="modal-title">
          <h2>Signup</h2>
          <p>Enter your details to create your acount</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Input placeholder="First Name*" />
        <Input placeholder="Last Name*" />
        <PasswordInput />
        <ButtonContainer
          className="btn_continue"
          onClick={() => setSignupStep(2)}
        >
          Continue
        </ButtonContainer>

        <div className="account_signup">
          Already have an account?
          {/* <span>
            <Link to="">Sign Up</Link>{" "}
          </span> */}
          <button
            className="gf_btn"
            onClick={() => {
              setModalShow2(false);
              setModalShow(true);
            }}
          >
            Log In
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
        <button
          onClick={() => {
            setModalShow2(true);
            setSignupStep(1);
          }}
          className="back_arrow"
        >
          <i className="fa-solid fa-arrow-left"></i>Back
        </button>
        <Modal.Title id="contained-modal-title-vcenter" className="modal-title">
          <h2>Signup</h2>
          <p>Complete the following details to sign up</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Input placeholder="Email*" />
        <label className="country_label">Country*</label>
        <CountrySelector />

        <Sex />
        <p className="terms_p">By signing up, you agree to the Terms & Conditions of 2m seamless</p>
        <ButtonContainer
          onClick={() => {
            setModalShow2(false);
            setSignupStep(1);
          }}
        >
          Complete
        </ButtonContainer>
      </Modal.Body>
    </>
  );
};
