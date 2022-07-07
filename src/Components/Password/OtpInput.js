import React from "react";
import Input from "../Modal/Input";
import { ButtonContainer } from "../Shared/ButtonComponent";
import { Modal } from "react-bootstrap";

const OtpInput = ({ otpInput, setOtpInput, setResetPassword }) => {
  const closeModalHandler = () => setOtpInput(false);
  return (
    <div>
      <Modal
        show={otpInput}
        onHide={closeModalHandler}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="modal-title"
          >
            <h2>Enter OTP</h2>
            <p>An OTP was sent to your email</p>
            <p className="otp_p">Enter OTP below</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input placeholder="OTP*" />

          <ButtonContainer
            onClick={() => {
              setOtpInput(false);
              setResetPassword(true);
            }}
            className="btn_login"
          >
            Submit
          </ButtonContainer>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={props.onHide}>Close</Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OtpInput;
