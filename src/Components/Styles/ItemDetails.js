import React, { useState } from "react";
import PaymentModal from "../../Pages/PaymentModal";
import { ButtonContainer } from "../Shared/ButtonComponent";

const ItemDetails = ({ styleName }) => {
  const [paymentModal, setPaymentModal] = useState(false);
  return (
    <div className="item_details">
      <div>
        <p>{styleName}</p>
        <p>Olympia, Multi Colored Ankara</p>
      </div>
      <div>
        <p>
          <span className="duration">Duration:</span>
          <span> 10 days</span>
        </p>
        <p>
          <span className="outfit">Outfit:</span>
          <span> ₦166,076.00</span>
        </p>
        <p>
          <span className="delivery">Delivery:</span>
          <span>₦15,000.00</span>
        </p>
        <p>
          <span className="total">Total:</span>
          <span>₦181,076.00</span>
        </p>
      </div>
      <div className="item_input">
        <p>WhatsApp Phone Number</p>
        <input type="number" />
      </div>
      <div className="item_input">
        <p>Coupon Code (optional)</p>
        <input type="number" />
      </div>
      <ButtonContainer onClick={() => setPaymentModal(true)}>
        Proceed to Pay ₦181,076.00
      </ButtonContainer>

      <PaymentModal {...{ paymentModal, setPaymentModal }} />
    </div>
  );
};

export default ItemDetails;
