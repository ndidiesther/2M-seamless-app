import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { ButtonContainer } from "../Shared/ButtonComponent";
import TailoringOrderImg from "../../Assets/Images/orderdetails.png";
import Successful from "../../Assets/Images/successful.png";
import ImageNull from "../../Assets/Images/image_ban.png";

const TailoringOrders = ({
  tailoringOrders,
  setTailoringOrders,
  selectedOrder,
  orderArr,
  setOrderArr,
}) => {
  const closeModalHandler = () => setTailoringOrders(false);
  const [tailoringOrderSuccess, setTailoringOrderSuccess] = useState(false);
  const [completed, setCompleted] = useState(null);
  const [imageNull, setImageNull] = useState("");
  function updateStatus() {
    let updatedArray = orderArr.map((item) => {
      if (item.orderId === selectedOrder.orderId) {
        return { ...item, status: "Delivered" };
      } else {
        return item;
      }
    });
    setOrderArr(updatedArray);
  }

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
              {imageNull == null ? (
                <div>
                  <img alt="img" src={ImageNull} />
                </div>
              ) : (
                <div>
                  <img alt="img" src={TailoringOrderImg} />
                </div>
              )}

              <div>
                <div>
                  <p>Ankara Bohemian Gown</p>
                  <p>
                    {selectedOrder.date}; {selectedOrder.time}
                  </p>
                  <p>
                    {selectedOrder.orderId} | <span>Custom Order</span>{" "}
                  </p>
                  <p className="fbc">Fabric: Yes</p>
                  <p className="fbc">0812 345 6789</p>
                </div>
                <div>
                  {completed == null ? (
                    <p>{selectedOrder.status}</p>
                  ) : (
                    <p>Delivered</p>
                  )}
                </div>
              </div>
            </div>
            <div className="laundry_content">
              <div className="wbc">
                <p>Fabric</p>
                <p>Yes</p>
              </div>
              <div className="wbc">
                <p>WhatsApp Contact</p>
                <p>0812 345 6789</p>
              </div>

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
                <p>{selectedOrder.pickUp}</p>
              </div>
              <div>
                <p>Delivery</p>
                <p>{selectedOrder.delivery}</p>
              </div>
            </div>
            <div className="col-12 laundry_address">
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
              updateStatus();
            }}
            className={
              selectedOrder.status === "Delivered" &&
              "disabled complete-disabled"
            }
          >
            Confirm Order Received
          </ButtonContainer>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={props.onHide}>Close</Button> */}
        </Modal.Footer>
      </Modal>
      <PaymentSuccessful
        {...{ tailoringOrderSuccess, setTailoringOrderSuccess }}
      />
    </div>
  );
};

export default TailoringOrders;

const PaymentSuccessful = ({
  tailoringOrderSuccess,
  setTailoringOrderSuccess,
}) => {
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
          <img alt="img" src={Successful} />
          <h2>
            <strong>Order Confirmation Successful</strong>
          </h2>
          <h5>Your order has successfully been confirmed</h5>
          <ButtonContainer
            onClick={() => {
              setTailoringOrderSuccess(false);
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
