import React from 'react';
import '../../Styles/Home.css'
import ImageFour from "../../Assets/Images/img4.png";
import ImageFive from "../../Assets/Images/img5.png";
import ImageSix from "../../Assets/Images/img6.png";
import ImageSeven from "../../Assets/Images/img7.png";
import { Link } from "react-router-dom";

const TrendingStyles = () => {
  return (
    <div className='col-12'>
        <div className="view_banner col-12">
      <div className="product_content col-12">
        <p>Trending Styles For You...</p>
        <p>View More</p>
      </div>
      <div className="col-12 ">
        <div>
          <Link to ="">
            <img src={ImageFour} />
            <p>African Print Styles for Men</p>
          </Link>
        </div>
        <div>
          <Link to ="">
            <img src={ImageFive} />
            <p>Six Pieces African Print Skirt and Peplum Blouse</p>
          </Link>
        </div>
        <div>
          <Link to ="">
            <img src={ImageSix} />
            <p>Plain Kaftan for Men</p>
          </Link>
        </div>
        <div>
          <Link to="product">
            <img src={ImageSeven} />
            <p>Ankara Bohemian Gown</p>
          </Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default TrendingStyles