import React, { useState, useEffect, useRef } from "react";
import { Modal } from "react-bootstrap";
import MaleAvatar from "../Assets/Images/male_avatar.png";
import FemaleAvatar from "../Assets/Images/female_avatar.png";
import FemaleSelect from "../Assets/Images/female_selected.png";
import MaleSelect from "../Assets/Images/male_selected.png";
import { Link, useNavigate } from "react-router-dom";

const DelayedLink = ({ delay, to, replace, state, ...props }) => {
  const navigate = useNavigate();
  const timerRef = useRef();

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const clickHandler = (e) => {
    e.preventDefault();
    timerRef.current = setTimeout(navigate, delay, to, { replace, state });
  };

  return <Link to={to} {...props} onClick={clickHandler} />;
};

const Gender = ({ genderModal, setGenderModal, ...props }) => {
  const closeModalHandler = () => setGenderModal(false);
  const [active, setActive] = useState("");

  const handleClick = (event) => {
    setActive(event.target.id);
    // console.log("first");
  };
  return (
    <Modal
      dialogClassName="my-modal"
      show={genderModal}
      onHide={closeModalHandler}
      //   size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="modal-title gender-title"
        >
          <h2>What is your Gender?</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="gender_body">
        <div className="select_gender">
          <DelayedLink delay={2000} to="/malestyle">
            <button
              key={1}
              className={active === "1" ? "active" : undefined}
              id={"1"}
              onClick={handleClick}
            >
              <img
                key={1}
                id={"1"}
                onClick={handleClick}
                src={active == "1" ? MaleSelect : MaleAvatar}
              />
              <p className={active == "1" ? "gender_p" : "selected_p"}>Male</p>
            </button>
          </DelayedLink>
          <DelayedLink delay={2000} to="/femalestyle">
            <button
              key={2}
              className={active === "2" ? "active" : undefined}
              id={"2"}
              onClick={handleClick}
            >
              <img
                key={2}
                id={"2"}
                onClick={handleClick}
                src={active == "2" ? FemaleSelect : FemaleAvatar}
              />
              <p className={active == "2" ? "gender_p" : "selected_p"}>
                Female
              </p>
            </button>
          </DelayedLink>
        </div>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal.Footer>
    </Modal>
  );
};

export default Gender;
