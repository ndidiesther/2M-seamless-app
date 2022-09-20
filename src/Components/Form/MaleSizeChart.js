import React, { useState } from "react";
import ChartImage from "../../Assets/Images/size_chart.png";
import MaleChart from "../../Assets/Images/size_male_chart.png";
import { Modal } from "react-bootstrap";

const MaleSizeChart = ({ viewChart, setViewChart }) => {
  const [chartImage, setChartImage] = useState(1);
  // const [viewChart, setViewChart] = useState(false);
  const closeModalHandler = () => setViewChart(false);

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

  const SecondStep = ({ setChartImage }) => {
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
            <img className="chart_img" src={MaleChart} />
            <span
              onClick={() => {
                setChartImage(2);
              }}
              className="angle-right disabled"
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
  return (
    <div>
      <Modal
        dialogClassName={"CSRModal"}
        show={viewChart}
        onHide={closeModalHandler}
        // size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {chartImage === 1 ? (
          <div>
            <FirstStep {...{ setChartImage }} />
          </div>
        ) : (
          <SecondStep {...{ setChartImage }} />
        )}

        <Modal.Footer>
          {/* <Button onClick={props.onHide}>Close</Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MaleSizeChart;
