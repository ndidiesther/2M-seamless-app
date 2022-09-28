import React, { useEffect, useRef, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../../App";
import NumberFormat from "react-number-format";
import TrashCan from "../../Assets/Images/Trash_can.png";

import { ButtonContainer } from "../../Components/Shared/ButtonComponent";

const CartItem = () => {
  let location = useLocation();

  const ImageRef = useRef();

  // const { state } = location;
  let chooseSex = location.state?.id;

  const cartContext = useContext(CartContext);
  const {
    cartItems,
    setCartItems,
    subTotalValue,
    setSubTotalValue,
    totalValue,
    setTotalValue,
  } = cartContext;

  const deleteItem = (id) => {
    const itemsLeft = cartItems.filter((item) => item.id !== id);
    // console.log(itemsLeft);
    setCartItems(itemsLeft);
  };
  const updatePrice = (id) => {
    cartItems.map((item) => {
      if (id === item.id) {
        let amount = parseFloat(item.price) * Number(item.itemQty);
        // let totalAmount = amount;
        // console.log(amount);
        item.totalPrice = amount.toFixed(2);
        return item;
      } else {
        return item;
      }
    });
    // console.log(changePrice);
  };

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
  useEffect(() => {
    const subTotal = cartItems.reduce((total, item) => {
      // console.log(item);
      total = total + parseFloat(item.totalPrice);

      return total;
    }, 0);
    // console.log(subTotal);
    setSubTotalValue(subTotal.toFixed(2));
    let Total = subTotal + 10000;
    setTotalValue(Total.toFixed(2));
    // // console.log(typeof(subTotalValue));
    // console.log(subTotal.toFixed(2));
  }, [cartItems]);

  // console.log(location.state.id)
  // useEffect(() => {
  //   ImageRef.current.src = orderImage;
  // }, [orderImage]);
  return (
    <div className="col-12 cart-item">
      <h2>Cart</h2>
      <div>
        <p>
          <Link
            to={
              chooseSex === 1 ? "/tailoring/malestyle" : "/tailoring/femalestyle"
            }
          >
            <button className="male_backarrow">
              <i className="fa-solid fa-arrow-left"></i>
            </button>
          </Link>
          <span>
            <strong>Continue Shopping</strong>
          </span>
        </p>
        <div>
          {cartItems.length === 0 && (
            <p className="empty_cart">Your Cart is Empty</p>
          )}
        </div>

        <div className="cart-details">
          <div>
            {cartItems.map((item, index) => (
              <div key={index} className="cart-content col-12">
                <div className="cart_img">
                  <img alt="img" ref={ImageRef} src={item.imgSrc} />
                  <div className="cart_name">
                    <div className="cartname">
                      <div>{item.name}</div>
                      <div>{item.description}</div>
                      <div>{item.size}</div>
                    </div>
                    <div className="change_quantity cart-quantity">
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
                    </div>
                  </div>
                </div>

                <div className="cart_price">
                  <span onClick={() => deleteItem(item.id)}>
                    <img alt="trashcan" src={TrashCan} />
                  </span>
                  <span>
                    <NumberFormat
                      value={item.totalPrice}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"#"}
                    />
                  </span>
                </div>
              </div>
            ))}
          </div>
          {cartItems.length > 0 && (
            <div className="cart-summary">
              <h3>Cart Totals</h3>
              <table id="cart-sum">
                <tbody>
                  <tr>
                    <td>SUBTOTAL</td>
                    <td>
                      {" "}
                      <NumberFormat
                        value={subTotalValue}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"#"}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>DELIVERY</td>
                    <td>#10,000.00</td>
                  </tr>
                  <tr>
                    <td>TOTAL</td>
                    <td>
                      {" "}
                      <NumberFormat
                        value={totalValue}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"#"}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <ButtonContainer>Proceed</ButtonContainer>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
