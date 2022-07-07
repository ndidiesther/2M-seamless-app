import React from "react";
import FirstWorkImage from "../../Assets/Images/work1.png";
import SecondWorkImage from "../../Assets/Images/work2.png";
import ThirdWorkImage from "../../Assets/Images/work3.png";

const LaundryGallery = () => {
  return (
    <>
      <div className="laundryGallery">
        <p>Gallery</p>
        <p>Our Works</p>
        <div>
          <div>
            <img src={FirstWorkImage} /> <span className="slideLeft"> &#10096;</span>
          </div>
          <div>
            <img src={SecondWorkImage} />
          </div>
          <div>
            <img src={ThirdWorkImage} />
            <span className="slideRight"> &#10095;</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LaundryGallery;
