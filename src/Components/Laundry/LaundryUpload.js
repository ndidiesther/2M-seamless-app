import React, { useCallback, useState, useContext } from "react";
import UploadMedia from "../../Assets/Images/Upload_Media.png";
import { ButtonContainer } from "../Shared/ButtonComponent";
import { useDropzone } from "react-dropzone";
import { CartContext } from "../../App";
import styled from "styled-components";
import LaundryPayment from "../../Pages/LaundryPayment";

// import ShowImage from "./ShowImage";

const getColor = (props) => {
  if (props.isDragAccept) {
    return "#00e676";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isFocused) {
    return "#2196f3";
  }
  return "#eeeeee";
};

const UploadContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 10px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  margin-bottom: 20px;
  /* color: black;
  font-weight: bold;
  font-size: 1.4rem; */
  outline: none;
  transition: border 0.24s ease-in-out;
`;

function Image({ image }) {
  return (
    <div>
      <img alt="" src={image.src} />
    </div>
  );
}

const ShowImage = ({ images }) => {
  const [showImage, setShowImage] = useState(true);

  const HandleDisplay = () => {
    console.log(images.length);
    if (images.length === 3) {
      setShowImage(false);
    }
  };
  const show = (image) => {
    return <Image key={Math.random()} image={image} />;
  };

  return (
    <div onLoad={HandleDisplay} className="UploadContainer">
      {images.map(show)}
    </div>
  );
};

const UploadStyles = ({
  uploadStyles,
  setUploadStyle,
  checkLength,
  setLaundryUpload,
  setLaundryDetails,
  setLaundrySummary,
  ...props
}) => {
  const [images, setImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);

  const handleTest = (file) => {
    // console.log("before");
    setSelectedImages((prev) => [...prev, Math.random()]);
    selectedImages.push(file);
    console.log(selectedImages);
    // console.log("after");
  };

  const onDrop = useCallback((acceptedFiles) => {
    handleTest(acceptedFiles[0]);

    // console.log(acceptedFiles[0]);
    acceptedFiles.map((file, index) => {
      const reader = new FileReader();

      reader.onload = function (e) {
        setImages((prevState) => [
          ...prevState,
          { id: index, src: e.target.result },
        ]);
      };

      reader.readAsDataURL(file);
      return file;
    });
  }, []);
  const closeModalHandler = () => setUploadStyle(false);

  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    open,
    isDragAccept,
    isFocused,
    isDragReject,
  } = useDropzone({
    accept: { "image/*": [".jpeg", ".jpg", ".png"] },
    onDrop,
    noClick: true,
    noKeyboard: true,
  });

  const lists = acceptedFiles.map((list) => (
    <li key={list.path}>{/* {list.path} - {list.size} bytes */}</li>
  ));

  const cartContext = useContext(CartContext);
  const { laundryPayment, setLaundryPayment } = cartContext;

  const showLaundryPayment = () => {
    setLaundryPayment(!laundryPayment);
    // console.log("payment");
  };
  // console.log(acceptedFiles)
  // console.log(test)
  return (
    <div className="col-12">
      <div className="col-12 side-menu">
        <div className="side-menu__content laundry_details">
          <div className="laundrySummary_header">
            <button
              onClick={() => setLaundryUpload(false)}
              className="backArrow"
            >
              <i className="fa-solid fa-arrow-left"></i>
              <span>Back</span>
            </button>
            <div>
              <p>Upload</p>
              <p className="summary_items">
                For acountability purpose please upload an image of the clothes
                to be washed
              </p>
            </div>
          </div>{" "}
          <br />
          <div className="laundry-content">
            <ShowImage images={images} />{" "}
            {images.length < 1 ? (
              <UploadContainer
                {...getRootProps({ isDragAccept, isFocused, isDragReject })}
              >
                <div className="upload_media">
                  {images.length === 0 ? (
                    <img className="laundryImg" src={UploadMedia} />
                  ) : (
                    ""
                  )}

                  <div>
                    <p>
                      <input
                        {...getInputProps()}
                        onDrop={(e) => console.log("Hello")}
                      />
                      Drag and drop or{" "}
                      <button
                        type="button"
                        className="upload_btn"
                        onClick={open}
                      >
                        Select file
                      </button>
                      from computer
                    </p>
                    <p>Max. 1 Image (in jpeg or png format only)</p>
                  </div>
                </div>
              </UploadContainer>
            ) : null}
          </div>{" "}
          <br />
          <div className="laundry-footer upload-footer">
            <div>
              <ButtonContainer onClick={showLaundryPayment}>
                Proceed to Pay
              </ButtonContainer>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          laundryPayment
            ? "laundryPayment-menu-expanded"
            : "laundryPayment-menu"
        }
      >
        <div>
          <LaundryPayment
            {...{
              setLaundryPayment,
              setLaundryDetails,
              setLaundrySummary,
              setLaundryUpload,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default UploadStyles;
