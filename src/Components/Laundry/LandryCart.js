import React, { useState, useContext } from "react";
import { CartContext } from "../../App";

const LandryCart = ({ services }) => {
  const [value, setValue] = useState("Shorts");
  const [changeQuantity, setChangeQuantity] = useState(1);
  //  console.log(services)

  const handleChange = (e) => {
    setValue(e.target.value);
    // console.log(e.target.value)
  };
  const cartContext = useContext(CartContext);
  const { laundryCartItems, setLaundryCartItems } = cartContext;
  // console.log(laundryCartItems);

  const item = {
    name: value,
    quantity: changeQuantity,
    id: laundryCartItems.length + 1,
    services: services,
  };

  const addToCart = () => {
    let CheckItem = laundryCartItems.find(
      (laundryItem) => item.name === laundryItem.name
    );
    if (CheckItem) {
      return;
    }
    setChangeQuantity(1);

    setLaundryCartItems((prev) => [...prev, item]);
  };

  const deleteItem = (id) => {
    let remainingItems = laundryCartItems.filter(
      (laundryItem) => laundryItem.id !== id
    );
    setLaundryCartItems(remainingItems);
  };

  const incrementItem = () => {
    // console.log(changeQuantity);
    setChangeQuantity(changeQuantity + 1);
  };
  const decrementItem = () => {
    console.log(changeQuantity);
    if (changeQuantity === 1) {
      return;
    }
    setChangeQuantity(changeQuantity - 1);
  };
  return (
    <>
      <div className="col-12">
        <p>Please select cloth type and amount</p>
        <div className="laundry_cart">
          <div>
            <select
              value={value}
              onChange={handleChange}
              className="form-select form-select-lg shadow-none select-cloth"
              aria-label=".form-select-lg example"
            >
              <option value="Shorts" id="1">
                Shorts
              </option>
              <option value="Trousers" id="2">
                Trousers
              </option>
              <option value="Skirt">Skirt</option>
              <option value="Blouse">Blouse</option>
              <option value="Shirt">Shirt</option>
            </select>
            <div className="change_quantity select_amount">
              <span onClick={() => decrementItem()}>
                <i className="fa-solid fa-minus"></i>
              </span>
              <span>{changeQuantity}</span>
              <span onClick={() => incrementItem()}>
                <i className="fa-solid fa-plus"></i>
              </span>
            </div>
          </div>

          <div className="addItem">
            <button onClick={addToCart}>Add +</button>
          </div>
          {/* <p>{`You selected ${value}`}</p> */}
          <div className=" col-12 displayItem">
            {laundryCartItems.map((item, index) => (
              <div key={index}>
                <span>
                  <span>{item.name}</span> <br />
                  <span>({item.services})</span>
                </span>

                <span>{item.quantity}pcs</span>
                <span onClick={() => deleteItem(item.id)}>
                  <i className="fa-solid fa-xmark"></i>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LandryCart;
