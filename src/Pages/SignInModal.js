import Input from "../Components/Modal/Input";
import { Modal } from "react-bootstrap";
import "../Styles/Modal.css";
import PasswordInput from "../Components/Modal/PasswordInput";
import { ButtonContainer } from "../Components/Shared/ButtonComponent";
import SignInBox from "../Components/Modal/SignInBox";

function SignInModal({ modalShow, setModalShow, setModalShow2, ...props }) {
  const closeModalHandler = () => setModalShow(false);

  return (
    <Modal
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
        <PasswordInput />
        <SignInBox />
        <ButtonContainer>Log In</ButtonContainer>
    
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
            Sign In
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
