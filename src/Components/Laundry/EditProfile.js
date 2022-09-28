import React, { useCallback, useState } from "react";
import { Modal } from "react-bootstrap";
import UploadMedia from "../../Assets/Images/male_avatar.png";
import { ButtonContainer } from "../Shared/ButtonComponent";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import Union from "../../Assets/Images/Union.png";
import Input from "../Modal/Input";
import ShowAndHidePassword from "../Modal/PasswordInput";
import CountrySelector from "../../Pages/Country";
import ProfileSex from "./ProfileSex";

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
    // console.log(images.length);
    if (images.length === 1) {
      setShowImage(false);
    }
  };
  const show = (image) => {
    return <Image key={Math.random()} image={image} />;
  };

  return (
    <div onLoad={HandleDisplay} className="editcontainer">
      {/* {images.map(show)} */}
      {show(images[images.length - 1])}
    </div>
  );
};

const EditProfile = ({ editProfile, setEditProfile, setProfilePic }) => {
  const [images, setImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  // let navigate = useNavigate();

  const handleTest = (file) => {
    // console.log("before");
    setSelectedImages((prev) => [...prev, file]);
    selectedImages.push(file);
    // console.log(selectedImages);
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
  }, [handleTest]);

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

  // const lists = acceptedFiles.map((list) => (
  //   <li key={list.path}>{/* {list.path} - {list.size} bytes */}</li>
  // ));

  const closeModalHandler = () => setEditProfile(false);
  return (
    <div className="upload_styles">
      <Modal
        dialogClassName={"ProfileModal"}
        show={editProfile}
        onHide={closeModalHandler}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="upload_header" closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="modal-title editProfile"
          >
            <p>Edit Profile</p>
            <p>Update your details</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="upload_profileImg">
            <div>
              {
                <Container
                  {...getRootProps({ isDragAccept, isFocused, isDragReject })}
                >
                  {" "}
                  {images.length === 0 ? (
                    <img alt="media" className="img_media" src={UploadMedia} />
                  ) : (
                    <ShowImage images={images} />
                  )}
                </Container>
              }
            </div>

            <div>
              <p>
                <input
                  type="file"
                  {...getInputProps()}
                  onDrop={(e) => console.log("Hello")}
                />
                Drag Picture to frame or <br />
                <button type="button" className="profile_btn" onClick={open}>
                  <img alt="img" src={Union} />
                  Select Photo
                </button>
              </p>
            </div>
          </div>
          <div className="name_input">
            <div>
              {" "}
              <Input placeholder="First Name*" />{" "}
            </div>
            <div>
              <Input placeholder="Last Name*" />
            </div>
          </div>
          <div className="password_input">
            <div>
              <Input placeholder="Email Address*" />
            </div>
            <div>
              <ShowAndHidePassword placeholder="Password*" />
            </div>
          </div>
          <div className="country_input">
            <div>
              {" "}
              <CountrySelector />{" "}
            </div>
            <div className="sex_input">
              <ProfileSex />
            </div>
          </div>
          <div className="update_btn">
            <ButtonContainer
              onClick={() => {
                setEditProfile(false);
                setProfilePic(selectedImages[selectedImages.length - 1]);
              }}
            >
              {" "}
              Update
            </ButtonContainer>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={props.onHide}>Close</Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditProfile;
