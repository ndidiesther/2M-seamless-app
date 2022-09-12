import React from "react";
import { Modal } from "react-bootstrap";
import { ButtonContainer } from "../Shared/ButtonComponent";
import WhatsApp from "../../Assets/Images/whatsapp-icon.png";

const CustomStyles = ({orderStyle, setOrderStyle}) => {
  const closeModalHandler = () => setOrderStyle(false);
  return (
    <Modal
      show={orderStyle}
      onHide={closeModalHandler}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="custom_style">
          <h2> Order A Custom Style</h2>
          <p>
            You could not find a style you want? No worries. We are here to
            satisfy your needs. Click the button below to chat with us on
            WhatsApp so we we can better understand the details of your custom
            order.
          </p>
          <ButtonContainer
            onClick={() => {
              setOrderStyle(false);
            }}
          >
            <img src={WhatsApp} /> <span>Chat with us on WhatsApp</span>
          </ButtonContainer>
        </div>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal.Footer>
    </Modal>
  );
};

export default CustomStyles;
