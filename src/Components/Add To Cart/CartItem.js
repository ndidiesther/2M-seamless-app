import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ButtonContainer } from "../../Components/Shared/ButtonComponent";

const CartItem = ({ chooseSex }) => {
  let location = useLocation();
  const { state } = location;
  let orderImage = location.state?.src;
  let price = location.state?.price;
  let styleName = location.state?.stylename;
  const ImageRef = useRef();

  // console.log(location.state.id)
  useEffect(() => {
    ImageRef.current.src = orderImage;
  }, [orderImage]);
  return (
    <div className="col-12 cart-item">
      <h2>Cart</h2>
      <div>
        <p>
          <Link to={chooseSex == 1 ? "/malestyle" : "/femalestyle"}>
            <button className="male_backarrow">
              <i className="fa-solid fa-arrow-left"></i>
            </button>
          </Link>
          <span>
            <strong>Continue Shopping</strong>
          </span>
        </p>
        <div className="cart-details">
          <div>
            <div className="cart-list">
              <div className="cart_img">
                <img ref={ImageRef} src={orderImage} />
              </div>
              <div>
                <span>
                  {" "}
                  <strong>{styleName}</strong>
                </span>
              </div>
              <div className="change_quantity">
                <span>
                  <i className="fa-solid fa-minus"></i>
                </span>
                <span>1</span>
                <span>
                  <i className="fa-solid fa-plus"></i>
                </span>
              </div>
              <div>
                <i className="fa-solid fa-trash"></i>
              </div>
              <div>
                <span>
                  <strong>{price}</strong>{" "}
                </span>
              </div>
            </div>
            <div className="cart-coupon">
              <input
                className="coupon_input"
                placeholder="Coupon code"
              />
              <button className="coupon_btn">Apply Coupon</button>
            </div>
          </div>
          <div className="cart-summary">
            <h3>Cart Totals</h3>
            <table id="cart-sum">
              <tbody>
                <tr>
                  <td>SUBTOTAL</td>
                  <td>{price}</td>
                </tr>
                <tr>
                  <td>TOTAL</td>
                  <td>{price}</td>
                </tr>
              </tbody>
            </table>
            <ButtonContainer>Proceed</ButtonContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
