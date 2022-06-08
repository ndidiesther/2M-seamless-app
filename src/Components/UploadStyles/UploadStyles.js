import React, { useCallback, useState } from "react";
import { Modal } from "react-bootstrap";
import UploadMedia from "../../Assets/Images/Upload_Media.png";
import { ButtonContainer } from "../Shared/ButtonComponent";
import { useDropzone } from "react-dropzone";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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

const Container = styled.div`
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
    <div onLoad={HandleDisplay} className="container">
      {images.map(show)}
    </div>
  );
};

const UploadStyles = ({
  uploadStyles,
  setUploadStyle,
  checkLength,
  ...props
}) => {
  const [images, setImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  let navigate = useNavigate();

  const handleTest = (file) => {
    console.log("before");
    setSelectedImages((prev) => [...prev, Math.random()]);
    selectedImages.push(file);
    console.log(selectedImages);
    console.log("after");
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
  // console.log(acceptedFiles)
  // console.log(test)
  return (
    <div className="upload_styles">
      <Modal
        show={uploadStyles}
        onHide={closeModalHandler}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="upload_header" closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="modal-title"
          >
            <h2>Upload Your Style</h2>
            <p>Please upload the images of your desired style</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ShowImage images={images} />{" "}
          {images.length < 3 ? (
            <Container
              {...getRootProps({ isDragAccept, isFocused, isDragReject })}
            >
              <div className="upload_media">
                {images.length === 0 ? <img src={UploadMedia} /> : ""}

                <div>
                  <p>
                    <input
                      {...getInputProps()}
                      onDrop={(e) => console.log("Hello")}
                    />
                    Drag and drop or{" "}
                    <button type="button" className="upload_btn" onClick={open}>
                      Select file
                    </button>
                    from computer
                  </p>
                  <p>Max. 3 Images (in jpeg or png format only)</p>
                </div>
              </div>
            </Container>
          ) : null}
          <ButtonContainer
            onClick={() =>
              navigate("/orderstyle", { state: { name: selectedImages[0] } })
            }
          >
            Proceed
          </ButtonContainer>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={props.onHide}>Close</Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UploadStyles;
