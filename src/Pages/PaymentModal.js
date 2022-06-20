import React from "react";
import { Modal } from "react-bootstrap";
import Input from "../Components/Modal/Input";
import { ButtonContainer } from "../Components/Shared/ButtonComponent";

const PaymentModal = ({ paymentModal, setPaymentModal, ...props }) => {
  const closeModalHandler = () => setPaymentModal(false);
  return (
    <Modal
      dialogClassName={"LoginModal"}
      show={paymentModal}
      onHide={closeModalHandler}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="modal-title">
          <h2>Payment Gateway</h2>
          <p>
            You are about to pay ₦181,076.00 for 2m Seamless tailoring services
          </p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Card Details</h4>
        <Input placeholder="Card Number*" focused />
        <Input placeholder="Card Holder*" focused  />
        
        <div className="payment_input">
            <Input className='expiry_date' placeholder="Expiry Date*" focused  />
            <Input placeholder="CVV*" focused  />
        </div>
        <ButtonContainer>Pay</ButtonContainer>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal.Footer>
    </Modal>
  );
};

export default PaymentModal;
