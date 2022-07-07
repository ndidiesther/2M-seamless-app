import React from "react";

const LandryCart = () => {
  return (
    <>
      <div>
        <p>Please select cloth type and amount</p>
        <div className="laundry_cart">
          <div>
            <select
              className="form-select laundry-form form-select-lg shadow-none select-cloth"
              aria-label=".form-select-lg example"
            >
              <option value="1">Shorts</option>
              <option value="2">Trousers</option>
              <option value="3">Skirt</option>
              <option value="4">Blouse</option>
              <option value="5">Shirt</option>
            </select>
            <div className="change_quantity select_amount">
              <span>
                <i className="fa-solid fa-minus"></i>
              </span>
              <span>1</span>
              <span>
                <i className="fa-solid fa-plus"></i>
              </span>
            </div>
          </div>

          <div className="addItem">
            <button>Add +</button>
          </div>

          <div className=" col-12 displayItem">
              <div>
                  <span>Shorts</span>
                  <span>1pcs</span>
                  <span><i className="fa-solid fa-xmark"></i></span>
              </div>
              <div>
                  <span>Trousers</span>
                  <span>1pcs</span>
                  <span><i className="fa-solid fa-xmark"></i></span>
              </div>
              
             

          </div>
        </div>
      </div>
    </>
  );
};

export default LandryCart;
