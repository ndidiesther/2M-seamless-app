import React from "react";
import PasswordInput from "../Modal/PasswordInput";
import { ButtonContainer } from "../Shared/ButtonComponent";
import { Modal } from "react-bootstrap";

const ResetPassword = ({
  resetPassword,
  setResetPassword,
  setPasswordSuccessful,
}) => {
  const closeModalHandler = () => setResetPassword(false);
  return (
    <div>
      <Modal
        show={resetPassword}
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
            <h2>New Password</h2>
            <p>Enter a new password</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PasswordInput placeholder="New Password*" /> <br />
          <PasswordInput placeholder="Reenter Password*" /> <br />
          <ButtonContainer
            onClick={() => {
              setResetPassword(false);
              setPasswordSuccessful(true);
            }}
            className="btn_login"
          >
            Finish
          </ButtonContainer>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={props.onHide}>Close</Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ResetPassword;
