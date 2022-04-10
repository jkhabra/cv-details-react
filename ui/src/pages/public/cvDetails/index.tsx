import React, { useState } from "react";
import { Steps } from "antd";
import "antd/dist/antd.css";

import CvForm from "../../../components/cvForm";
import "./style.scss";

const { Step } = Steps;

const steps = [
  {
    title: "Step 1",
    type: 1,
  },
  {
    title: "Submit",
    type: 2,
  },
];

const CvDetails: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <div className={"cv-container"}>
        <div className="cv-header">
          <h2 className="title">CV Submission</h2>
          <span className="sub-title"> Please fill in your details below. </span>
        </div>

        <div className="cv-body">
          <Steps current={current}>
            {steps.map((item) => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>

          <div className="steps-content">
            <CvForm step={current} nextAction={next} prevAction={prev} onAction={setCurrent} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CvDetails;
