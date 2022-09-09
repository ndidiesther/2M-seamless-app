import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { ButtonContainer } from "../Shared/ButtonComponent";
import TailoringOrderImg from "../../Assets/Images/orderdetails.png";
import Successful from "../../Assets/Images/successful.png";

const TailoringOrders = ({tailoringOrders, setTailoringOrders}) => {
    const closeModalHandler = () => setTailoringOrders(false);
    const [tailoringOrderSuccess, setTailoringOrderSuccess] = useState(false);
    const [completed, setCompleted] = useState(null)
   
  return (
    <div>
    <Modal
      dialogClassName={"OrdersModal"}
      show={tailoringOrders}
      onHide={closeModalHandler}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="modal-title"
        ></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <h2 className="ord_details">Order Details</h2>
        </div>
        <div className="Laundry-Orders">
          <div className="laundry-order-page">
            <div>
              <img src={TailoringOrderImg} />
            </div>
            <div>
              <p>Ankara Bohemian Gown</p>
              <p>3rd March, 2022; 12:24PM</p>
              <p>
                ID - 12332 | <span>Custom Order</span>{" "}
              </p>
              <p>Fabric: Yes</p>
              <p>0812 345 6789</p>
            </div>
            <div>
              {completed == null ?   <p>Delivery in 10 Days</p>: <p>Delivered</p>}
            
            </div>
          </div>
          <div className="laundry_content">
            <div>
              <p>Size</p>
              <p>US 4/UK 8</p>
            </div>
            <div>
              <p>Measurement</p>
              <p className="view_img">View Image</p>
            </div>
            <div>
              <p>Pick Up</p>
              <p>Onsite</p>
            </div>
            <div>
              <p>Delivery</p>
              <p>Home Delivery</p>
            </div>
          </div>
          <div className="laundry_address">
            <div>
              <p>Delivery Address</p>
              <p>
                Sector F car car wash by green access Pharmacy, F.H.A Lugbe
                Airport Road, Abuja
              </p>
            </div>
            <div>
              <p>Fabric Pickup Address</p>
              <p>
                Sector F car car wash by green access Pharmacy, F.H.A Lugbe
                Airport Road, Abuja
              </p>
            </div>
          </div>
          <div className="col-12 laundrySummary-footer orderFooter">
            <div>
              <span>Subtotal:</span>
              <span>#3000.00</span>
            </div>
            <div>
              <span>Shipping:</span>
              <span>#250.00</span>
            </div>

            <div>
              <span>Total:</span>
              <span>#3220.00</span>
            </div>
          </div>
        </div>
       

        <ButtonContainer
          onClick={() => {
            setTailoringOrderSuccess(true);
            setTailoringOrders(false);
            setCompleted("Completed")
          }}
          className={completed && 'disabled complete-disabled'}
        >
          Confirm Order Received
        </ButtonContainer>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal.Footer>
    </Modal>
    <PaymentSuccessful {...{ tailoringOrderSuccess, setTailoringOrderSuccess }} />
  </div>
  )
}

export default TailoringOrders

const PaymentSuccessful = ({ tailoringOrderSuccess, setTailoringOrderSuccess }) => {
    const closeModalHandler = () => setTailoringOrderSuccess(false);
    // const navigate  = useNavigate()
    return (
      <Modal
        show={tailoringOrderSuccess}
        onHide={closeModalHandler}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="payment_success order-success">
            <img src={Successful} />
            <h2>
              <strong>Order Confirmation Successful</strong>
            </h2>
            <h5>Your order has successfully been confirmed</h5>
            <ButtonContainer onClick={() => {setTailoringOrderSuccess(false)}}>Done</ButtonContainer>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={props.onHide}>Close</Button> */}
        </Modal.Footer>
      </Modal>
    );
  };