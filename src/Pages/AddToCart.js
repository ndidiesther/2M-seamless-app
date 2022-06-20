import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ButtonContainer } from "../Components/Shared/ButtonComponent";
import "../Styles/cart.css";

const AddToCart = ({ setShowCart }) => {
  let location = useLocation();
  const navigate = useNavigate();
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
          <div className="cart-content col-12">
            <div className="cart_img">
              <img ref={ImageRef} src={orderImage} />
              <div className="cart_name">
                <div>{styleName}</div>
                <div className="change_quantity cart-quantity">
                  <span>
                    <i className="fa-solid fa-minus"></i>
                  </span>
                  <span>1</span>
                  <span>
                    <i className="fa-solid fa-plus"></i>
                  </span>
                </div>
              </div>
            </div>

            <div className="cart_price">
              <span>
                <i className="fa-solid fa-xmark"></i>
              </span>
              <span> {price}</span>
            </div>
          </div>
          <div className="cart-footer col-12">
            <div className="cart-subtotal">
              <span>Subtotal:</span>
              <span>{price}</span>
            </div>
            <div className="cart-shipping">
              <p>You have got free shipping </p>
              <span className="progress_bar">
                <span></span>
                <span>100%</span>
              </span>
            </div>
            <ButtonContainer
              cart
              onClick={() =>
                navigate("/cartitem", {
                  state: {
                    src: orderImage,
                    stylename: styleName,
                    price: price,
                  },
                })
              }
            >
              View Cart
            </ButtonContainer>
            <ButtonContainer>Checkout</ButtonContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
