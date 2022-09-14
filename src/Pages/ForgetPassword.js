import React from "react";
import Input from "../Components/Modal/Input";
import { ButtonContainer } from "../Components/Shared/ButtonComponent";
import { Modal } from "react-bootstrap";

function ForgetPassword({
  forgetPasswordModal,
  setForgetPasswordModal,
  setOtpInput,
}) {
  const closeModalHandler = () => setForgetPasswordModal(false);
  return (
    <div>
      <Modal
        show={forgetPasswordModal}
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
            <h2>Forgot password</h2>
            <p>Enter the email address linked to your account</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input placeholder="Email address*" />

          <ButtonContainer
            onClick={() => {
              setForgetPasswordModal(false);
              setOtpInput(true);
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
}

export default ForgetPassword;
