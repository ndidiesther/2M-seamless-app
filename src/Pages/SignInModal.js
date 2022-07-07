import Input from "../Components/Modal/Input";
import { Modal } from "react-bootstrap";
import "../Styles/Modal.css";
import PasswordInput from "../Components/Modal/PasswordInput";
import { ButtonContainer } from "../Components/Shared/ButtonComponent";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const SignInBox = ({ setForgetPasswordModal, setModalShow }) => {
  return (
    <div className="todo-list">
      <span className="todo-item">
        <Checkbox
          sx={{
            color: "",
            "&.Mui-checked": {
              color: " #bc9a43",
            },
          }}
          {...label}
        />

        <span className="check-item">Remember me</span>
      </span>

      <span>
        <button
          onClick={() => {
            setModalShow(false);
            setForgetPasswordModal(true);
          }}
        >
          Forgot Password?
        </button>
      </span>
    </div>
  );
};

function SignInModal({
  modalShow,
  setModalShow,
  setModalShow2,
  setForgetPasswordModal,
  ...props
}) {
  const closeModalHandler = () => setModalShow(false);

  return (
    <Modal
      dialogClassName={"LoginModal"}
      show={modalShow}
      onHide={closeModalHandler}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="modal-title">
          <h2>Login</h2>
          <p>Welcome back, enter your details to log in</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Input placeholder="Username or email address*" />
        <PasswordInput placeholder="Password*" />
        <SignInBox {...{ setForgetPasswordModal, setModalShow }} />
        <ButtonContainer className="btn_login">Log In</ButtonContainer>

        <div className="account_signup">
          Don't have an account?
          {/* <Link to=""> */}
          {/* <Register
              {...{ setModalShow, setModalShow2, modalShow, modalShow2 }}
            /> */}
          {/* </Link>{" "} */}
          <button
            className="gf_btn"
            onClick={() => {
              setModalShow(false);
              setModalShow2(true);
            }}
          >
            Sign Up
          </button>
        </div>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal.Footer>
    </Modal>
  );
}

export default SignInModal;
