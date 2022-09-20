import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import ChartImage from "../../Assets/Images/size_chart.png";
import FemaleChartOne from "../../Assets/Images/female_size_chart.png";
import FemaleChartTwo from "../../Assets/Images/female_size_chart2.png";
import FemaleChartThree from "../../Assets/Images/female_size_chart3.png";

const FemaleSizeChart = ({ viewModal, setViewModal }) => {
  const [chartImage, setChartImage] = useState(1);
  const closeModalHandler = () => setViewModal(false);
  const FirstStep = ({ setChartImage }) => {
    return (
      <>
        <Modal.Header>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="modal-title"
          ></Modal.Title>
        </Modal.Header>
        <Modal.Body className="gender_body">
          <div className="chartimg">
            <span className="angle-left disabled">
              <i className="fa-solid fa-angle-left"></i>
            </span>
            <img className="chart_img" src={ChartImage} />
            <span
              onClick={() => {
                setChartImage(2);
              }}
              className="angle-right"
            >
              <i className="fa-solid fa-angle-right"></i>
            </span>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={props.onHide}>Close</Button> */}
        </Modal.Footer>
      </>
    );
  };

  const ThirdStep = ({ setChartImage }) => {
    return (
      <>
        <Modal.Header>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="modal-title"
          ></Modal.Title>
        </Modal.Header>
        <Modal.Body className="gender_body">
          <div className="chartimg">
            <span
              onClick={() => {
                setChartImage(1);
              }}
              className="angle-left"
            >
              <i className="fa-solid fa-angle-left"></i>
            </span>
            <img className="chart_img" src={FemaleChartOne} />
            <span
              onClick={() => {
                setChartImage(3);
              }}
              className="angle-right "
            >
              <i className="fa-solid fa-angle-right"></i>
            </span>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={props.onHide}>Close</Button> */}
        </Modal.Footer>
      </>
    );
  };
  const FourthStep = ({ setChartImage }) => {
    return (
      <>
        <Modal.Header>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="modal-title"
          ></Modal.Title>
        </Modal.Header>
        <Modal.Body className="gender_body">
          <div className="chartimg">
            <span
              onClick={() => {
                setChartImage(2);
              }}
              className="angle-left"
            >
              <i className="fa-solid fa-angle-left"></i>
            </span>
            <img className="chart_img" src={FemaleChartTwo} />
            <span
              onClick={() => {
                setChartImage(4);
              }}
              className="angle-right "
            >
              <i className="fa-solid fa-angle-right"></i>
            </span>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={props.onHide}>Close</Button> */}
        </Modal.Footer>
      </>
    );
  };
  const FifthStep = ({ setChartImage }) => {
    return (
      <>
        <Modal.Header>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="modal-title"
          ></Modal.Title>
        </Modal.Header>
        <Modal.Body className="gender_body">
          <div className="chartimg">
            <span
              onClick={() => {
                setChartImage(3);
              }}
              className="angle-left"
            >
              <i className="fa-solid fa-angle-left"></i>
            </span>
            <img className="chart_img" src={FemaleChartThree} />
            <span className="angle-right disabled">
              <i className="fa-solid fa-angle-right"></i>
            </span>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={props.onHide}>Close</Button> */}
        </Modal.Footer>
      </>
    );
  };
  return (
    <div>
      <Modal
        dialogClassName={"CSRModal"}
        show={viewModal}
        onHide={closeModalHandler}
        // size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {(() => {
          if (chartImage === 1) {
            return (
              <div>
                <FirstStep {...{ setChartImage }} />
              </div>
            );
          } else if (chartImage === 2) {
            return (
              <div>
                <ThirdStep {...{ setChartImage }} />
              </div>
            );
          } else if (chartImage === 3) {
            return (
              <div>
                <FourthStep {...{ setChartImage }} />
              </div>
            );
          } else if (chartImage === 4) {
            return (
              <div>
                <FifthStep {...{ setChartImage }} />
              </div>
            );
          }
        })()}
        <Modal.Footer>
          {/* <Button onClick={props.onHide}>Close</Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FemaleSizeChart;
