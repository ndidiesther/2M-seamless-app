import React, { useEffect, useRef, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ButtonContainer } from "../Components/Shared/ButtonComponent";
import "../Styles/cart.css";
import { CartContext } from "../App";
import NumberFormat from "react-number-format";
import TrashCan from "../Assets/Images/Trash_can.png";

const AddToCart = ({ setShowCart }) => {
  const navigate = useNavigate();

  const location = useLocation();
  const { state } = location;
  let orderImage = location.state?.src;
  let chooseSex = location.state?.id;
  let styleName = location.state?.stylename;
  let amount = location.state?.price;
  // console.log(chooseSex)

  const ImageRef = useRef();

  const cartContext = useContext(CartContext);
  const { cartItems, setCartItems, subTotalValue, setSubTotalValue } =
    cartContext;

  const deleteItem = (id) => {
    const itemsLeft = cartItems.filter((item) => item.id != id);
    // console.log(itemsLeft);
    setCartItems(itemsLeft);
  };
  const updatePrice = (id) => {
    let changePrice = cartItems.map((item) => {
      if (id == item.id) {
        let amount = parseFloat(item.price) * Number(item.itemQty);
        let totalAmount = amount;
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
      if (item.id == id) {
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
      if (item.id == id) {
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
    // console.log(typeof(subTotalValue));
    // console.log(subTotal.toFixed(2))
  }, [cartItems]);

  return (
    <div className="col-12">
      <div className=" col-12 side-menu">
        <div className="side-menu__overlay" />
        <div className="side-menu__content">
          <div className="cart-header col-12">
            <span>Cart</span>
            <span onClick={() => setShowCart(false)}>
              <i className="fa-solid fa-xmark"></i>
            </span>
          </div>
          <div>
            {cartItems.length == 0 && (
              <p className="empty_cart">Your Cart is Empty</p>
            )}
          </div>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-content col-12">
              <div className="cart_img">
                <img ref={ImageRef} src={item.imgSrc} />
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
                  <img src={TrashCan} />
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

          {cartItems.length > 0 && (
            <div className="cart-footer col-12">
              <div className="cart-subtotal">
                <span>Subtotal:</span>
                <span>
                  <NumberFormat
                    value={subTotalValue}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"#"}
                  />
                </span>
              </div>

              {/* <div className="cart-shipping">
                <p>You have got free shipping </p>
                <span className="progress_bar">
                  <span></span>
                  <span>100%</span>
                </span>
              </div> */}
              <ButtonContainer
               
                onClick={() =>
                  navigate("/cartitem", { state: { id: chooseSex } })
                }
              >
                View Cart
              </ButtonContainer>
              <ButtonContainer  cart onClick={() => {setCartItems([])}}>Clear Cart</ButtonContainer>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
