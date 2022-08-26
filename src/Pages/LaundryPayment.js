import React, { useState } from "react";
import { ButtonContainer } from "../Components/Shared/ButtonComponent";import { Modal } from "react-bootstrap";
import Input from "../Components/Modal/Input";

import Successful from "../Assets/Images/successful.png";
import { useNavigate } from "react-router-dom";

const LaundryPayment = ({ setLaundryPayment, setLaundryDetails, setLaundrySummary, setLaundryUpload }) => {
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);


  return (
    <div className="col-12">
      <div className="col-12 side-menu ">
        {/* <div className="side-menu__overlay" /> */}
        <div className="side-menu__content">
          <div className="laundrySummary_header laundry_sum">
            <button
              onClick={() => setLaundryPayment(false)}
              className="backArrow"
            >
              <i className="fa-solid fa-arrow-left"></i>
              <span>Back</span>
            </button>
            <div>
              <p>Payment Gateway</p>
              <p className="summary_items">
                You are about to pay ₦675.00 for 2m Seamless laundry services
              </p>
            </div>
          </div>
          <div>
            <p>Card Details</p> <br />
            <div className="card_payment">
              <Input placeholder="Card Number*" focused />
              <Input placeholder="Card Holder*" focused />
            </div>
            <div className="payment_input laundry_payment">
              <Input
                className="expiry_date"
                placeholder="Expiry Date*"
                focused
              />
              <Input placeholder="CVV*" focused />
            </div>
            <div className="laundry-footer payment-footer">
              <div>
                <ButtonContainer
                  onClick={() => {
                    setIsPaymentSuccessful(true);

                    //   setPaymentModal(false);
                  }}
                >
                  Pay
                </ButtonContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="payment_modal">
        <PaymentSuccessful
          {...{ isPaymentSuccessful, setIsPaymentSuccessful, setLaundryDetails, setLaundrySummary, setLaundryPayment, setLaundryUpload }}
        />
      </div>
    </div>
  );
};

export default LaundryPayment;

const PaymentSuccessful = ({ isPaymentSuccessful, setIsPaymentSuccessful, setLaundryDetails, setLaundrySummary, setLaundryPayment, setLaundryUpload }) => {
  const closeModalHandler = () => setIsPaymentSuccessful(false);
  const navigate  = useNavigate() 
  return (
    <Modal
      show={isPaymentSuccessful}
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
            <strong>Order Successful</strong>
          </h2>
          <h5>Your order has successfully been received</h5>
          <ButtonContainer
            onClick={() => {
              setIsPaymentSuccessful(false);
              setLaundryDetails(false);
              setLaundryPayment(false);
              setLaundryUpload(false);
              setLaundrySummary(false)
              navigate("/laundry")
            }}
          >
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
