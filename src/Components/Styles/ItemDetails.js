import React, { useContext, useState } from "react";
import NumberFormat from "react-number-format";
import { CartContext } from "../../App";
import PaymentModal from "../../Pages/PaymentModal";
import { ButtonContainer } from "../Shared/ButtonComponent";

const ItemDetails = ({ styleName, uniqueId, amount, description }) => {
  const [paymentModal, setPaymentModal] = useState(false);
  const [totalValue, setTotalValue] = useState(amount);

  const cartContext = useContext(CartContext);
  const { cartItems, setCartItems } = cartContext;

  const incrementItem = (id) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === id) {
        item.itemQty = item.itemQty + 1;
        return item;
      } else {
        return item;
      }
    });
    // console.log(updatedItems);
    setCartItems(updatedItems);
  };
  const decrementItem = (id) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === id) {
        if (item.itemQty > 1) {
          item.itemQty = item.itemQty - 1;
        }
        return item;
      } else {
        return item;
      }
    });
    // console.log(updatedItems);
    setCartItems(updatedItems);
  };

  const updatePrice = (id) => {
    cartItems.map((item) => {
      if (id === item.id) {
        let amount = parseFloat(item.price) * Number(item.itemQty);

        // let totalAmount = amount;
        // console.log(amount);
        item.totalPrice = amount.toFixed(2);
        let totalSum = parseFloat(item.totalPrice) + 15000;
        // console.log(totalSum);
        setTotalValue(totalSum.toFixed(2));
        return item;
      } else {
        return item;
      }
    });
    // console.log(changePrice);
  };

  // console.log(uniqueId);
  // console.log(cartItems);
  return (
    <div className="item_details">
      <div>
        <p>{styleName}</p>
        <p>{description}</p>
        <p className="quan_p">
          <span>Quantity:</span>

          {cartItems.map((item, index) => {
            if (item.id === uniqueId) {
              return (
                <span key={index} className="change_quantity cart-quantity">
                  <span
                    onClick={() => {
                      decrementItem(item.id);
                      updatePrice(item.id);
                    }}
                  >
                    <i className="fa-solid fa-minus"></i>
                  </span>
                  <span>{item.itemQty}</span>
                  <span
                    onClick={() => {
                      incrementItem(item.id);
                      updatePrice(item.id);
                    }}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </span>
                </span>
              );
            }
          })}
        </p>
      </div>

      <div>
        <p>
          <span className="outfit">Outfit:</span>

          {cartItems.map((item, index) => {
            if (item.id === uniqueId) {
              return (
                <span key={index}>
                  {" "}
                  <NumberFormat
                    value={item.totalPrice}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₦"}
                  />
                </span>
              );
            }
          })}
        </p>
        <p>
          <span className="delivery">Delivery:</span>
          <span>₦15,000.00</span>
        </p>
        <p>
          <span className="total">Total:</span>
          {}
          <span>
            {" "}
            <NumberFormat
              value={totalValue}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₦"}
            />
          </span>
        </p>
      </div>
      <div className="item_input">
        <p>WhatsApp Phone Number</p>
        <input type="number" />
      </div>

      <ButtonContainer onClick={() => setPaymentModal(true)}>
        Proceed to Pay{" "}
        <NumberFormat
          value={totalValue}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₦"}
        />
      </ButtonContainer>

      <PaymentModal {...{ paymentModal, setPaymentModal }} />
    </div>
  );
};

export default ItemDetails;
