import React, { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { ButtonContainer } from "../Shared/ButtonComponent";
import LaundryOrderImg from "../../Assets/Images/laundryorder.png";
import Successful from "../../Assets/Images/successful.png";
import { CartContext } from "../../App";
import ImageNull from "../../Assets/Images/image_ban.png";

function LaundryOrders({
  laundryOrders,
  setLaundryOrders,
  selectedOrder,
  orderArr,
  setOrderArr,
}) {
  const closeModalHandler = () => setLaundryOrders(false);
  const [laundryOrderSuccess, setLaundryOrderSuccess] = useState(false);
  const [completed, setCompleted] = useState(null);
  const cartContext = useContext(CartContext);
  const { laundryCartItems } = cartContext;
  const [imageNull, setImageNull] = useState('');

  function updateStatus() {
    let updatedArray = orderArr.map((item) => {
      if (item.orderId == selectedOrder.orderId) {
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
        show={laundryOrders}
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
            <div className="laundry-order-page on_laundry">
              {imageNull == null ? (
                <div>
                  <img src={ImageNull} />
                </div>
              ) : (
                <div>
                  <img src={LaundryOrderImg} />
                </div>
              )}
              <div>
                <p>{selectedOrder.service}</p>
                <p>
                  {selectedOrder.date}; {selectedOrder.time}
                </p>
                <p>{selectedOrder.orderId}</p>

                <p className="laundry_option">{selectedOrder.status}</p>
              </div>
            </div>
            <div className="laundry_content">
              <div>
                <p>Items</p>
                <p>{selectedOrder.itemCount}</p>
              </div>
              <div>
                <p>WhatsApp Contact</p>
                <p>0812 345 6789</p>
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
            <div className="laundrySummary-content laundry-ord">
              <div>
                <div>Services</div>
                <div>Rate</div>
                <div>Qty</div>
              </div>
              {laundryCartItems.map((item, index) => (
                <div key={index}>
                  <div>
                    <div className="cloth_type ">{item.name}</div>
                    <div className="service_type">({item.services})</div>
                  </div>
                  <div>{item.price}</div>
                  <div>{item.quantity}</div>
                </div>
              ))}
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
              setLaundryOrderSuccess(true);
              setLaundryOrders(false);
              updateStatus();
            }}
            className={
              selectedOrder.status == "Delivered" &&
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
      <PaymentSuccessful {...{ laundryOrderSuccess, setLaundryOrderSuccess }} />
    </div>
  );
}

export default LaundryOrders;

const PaymentSuccessful = ({ laundryOrderSuccess, setLaundryOrderSuccess }) => {
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
        <div className="payment_success order-success">
          <img src={Successful} />
          <h2>
            <strong>Order Confirmation Successful</strong>
          </h2>
          <h5>Your order has successfully been confirmed</h5>
          <ButtonContainer
            onClick={() => {
              setLaundryOrderSuccess(false);
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
