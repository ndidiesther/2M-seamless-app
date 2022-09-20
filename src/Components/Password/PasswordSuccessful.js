import React from "react";
import { Modal } from "react-bootstrap";
import { ButtonContainer } from "../Shared/ButtonComponent";
import Successful from "../../Assets/Images/successful.png";

const PasswordSuccessful = ({ passwordSuccessful, setPasswordSuccessful }) => {
  const closeModalHandler = () => setPasswordSuccessful(false);
  return (
    <Modal
      show={passwordSuccessful}
      onHide={closeModalHandler}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="payment_success">
          <img src={Successful} />
          <h2>
            <strong>Successful</strong>
          </h2>
          <h5 className="password_success">
            Your pasword has successfully been changed
          </h5>
          <ButtonContainer onClick={() => setPasswordSuccessful(false)}>
            Done
          </ButtonContainer>
        </div>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal.Footer>
    </Modal>
  );
};

export default PasswordSuccessful;
