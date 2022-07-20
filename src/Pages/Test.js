import React from "react";
import "../Styles/styles.css";
import WorkOne from "../Assets/Images/work1.png";
import WorkTwo from "../Assets/Images/work2.png";
import WorkThree from "../Assets/Images/work3.png";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

// const responsiveSettings = [
//   {
//       breakpoint: 800,
//       settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3
//       }
//   },
//   {
//       breakpoint: 500,
//       settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2
//       }
//   }
// ];

export default function Product() {
  return (
    <div className="slideDiv col-12">
      <div className="main_container">
        <div className="slide-container">
          <Slide
            slidesToScroll={1}
            slidesToShow={1}
            indicators={true}
            autoplay={false}
            responsive={[
              {
                breakpoint: 800,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                },
              },
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                },
              },
            ]}
          >
            <div
              style={{
                textAlign: "center",
                width: "300px",
                height: "300px",
                fontSize: "30px",
              }}
            >
              <img className="work_one" src={WorkOne} />
            </div>
            <div
              style={{
                textAlign: "center",
                width: "300px",
                height: "300px",
                fontSize: "30px",
              }}
            >
              <img className="work_one" src={WorkTwo} />
            </div>
            <div
              style={{
                textAlign: "center",
                width: "300px",
                height: "300px",
                fontSize: "30px",
              }}
            >
              <img className="work_one" src={WorkThree} />
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
}

// import React from "react";
// import "../Styles/styles.css";

// import "react-slideshow-image/dist/styles.css";
// import WorkOne from "../Assets/Images/work1.png";
// import WorkTwo from "../Assets/Images/work2.png";
// import WorkThree from "../Assets/Images/work3.png"
// import { Slide } from "react-slideshow-image";

// const buttonStyle = {
//   width: "30px",
//   background: "none",
//   border: "0px",
// };

// const properties = {
//   prevArrow: (
//     <button style={{ ...buttonStyle }}>
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff">
//         <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
//       </svg>
//     </button>
//   ),
//   nextArrow: (
//     <button style={{ ...buttonStyle }}>
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff">
//         <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
//       </svg>
//     </button>
//   ),
// };

// export default function Product() {
//   return (
//     <div className="slideDiv col-12">
//       <div className="slide-container">
//         <Slide
//           nextArrow={
//             <button
//               style={{
//                 background: "none",
//                 border: "0px",
//                 width: "30px",
//               }}
//             >
//               <svg
//                 fill="#fff"
//                 viewBox="0 0 512 512"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
//               </svg>
//             </button>
//           }
//           prevArrow={
//             <button
//               style={{
//                 background: "none",
//                 border: "0px",
//                 width: "30px",
//               }}
//             >
//               <svg
//                 fill="#fff"
//                 viewBox="0 0 512 512"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
//               </svg>
//             </button>
//           }
//         >
//           <div className="each-slide-effect">
//             <div
//               style={{
//                 backgroundImage: `url(${WorkOne})`
//               }}
//             >
//               <span>Slide 1</span>
//             </div>
//           </div>
//           <div className="each-slide-effect">
//             <div
//               style={{
//                 backgroundImage: `url(${WorkTwo})`,
//               }}
//             >
//               <span>Slide 2</span>
//             </div>
//           </div>
//           <div className="each-slide-effect">
//             <div
//               style={{
//                 backgroundImage: `url(${WorkThree})`,
//               }}
//             >
//               <span>Slide 3</span>
//             </div>
//           </div>
//         </Slide>
//       </div>
//     </div>
//   );
// }
