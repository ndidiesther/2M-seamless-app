import React from "react";
import FirstWorkImage from "../../Assets/Images/work1.png";
import SecondWorkImage from "../../Assets/Images/work2.png";
import ThirdWorkImage from "../../Assets/Images/work3.png";
import "../../Styles/caurosel.css"
import Slider from "react-slick";

const LaundryGallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3.1,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  const images = [
    {
      id: "1",
      name: "Img 1",
      alt: "",
      url: SecondWorkImage,
    },
    {
      id: "2",
      name: "Img 2",
      alt: "",
      url: ThirdWorkImage,
    },
    {
      id: "3",
      name: "Img 3",
      alt: "",
      url: FirstWorkImage,
    },
    {
      id: "4",
      name: "img 4",
      alt: "",
      url: SecondWorkImage,
    },
    {
      id: "5",
      name: "img 5",
      alt: "",
      url: ThirdWorkImage,
    },
 
    {
      id: "7",
      name: "img 7",
      alt: "",
      url: SecondWorkImage,
    },
    {
      id: "8",
      name: "img 8",
      alt: "",
      url: FirstWorkImage,
    },
  ];
  return (
    <>
    
      <div className="col-12 laundryGal">
        <p>Gallery</p>
        <p>Our Works</p>
        <Slider {...settings}>
        {images.map((item) => (
          <div className="wrapper" key={item.id}>
            <div>
              <img
                width={item.width}
                className="sliderImg"
                src={item.url}
                alt={item.alt}
              />
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </Slider>
        {/* <div>
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
        </div> */}
      </div>
    </>
  );
};

export default LaundryGallery;
