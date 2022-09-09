import React from 'react';
import { Modal } from "react-bootstrap";
import { ButtonContainer } from "../Shared/ButtonComponent";
import Successful from "../../Assets/Images/successful.png";

function LaundryOrderSuccess  ({laundryOrderSuccess, setLaundryOrderSuccess}) {
    const closeModalHandler = () => setLaundryOrderSuccess(false);
  // const navigate  = useNavigate()
  return (
    <Modal
      show={laundryOrderSuccess}
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
            <strong>Order Confirmation Successful</strong>
          </h2>
          <h5>Your order has successfully been confirmed</h5>
          <ButtonContainer onClick={() => {}}>Done</ButtonContainer>
        </div>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal.Footer>
    </Modal>
  );
}

export default LaundryOrderSuccess