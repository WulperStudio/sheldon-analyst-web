import React from "react";
import { Steps } from "antd";

const { Step } = Steps;

import { StatusFormContent } from "./styled";

const StatusForm: React.FunctionComponent<{}> = () => {
  return (
    <StatusFormContent className="status-form-container">
      <Steps current={1} direction="vertical">
        <Step
          status="finish"
          title={<a href="#company">Company information</a>}
        />
        <Step
          status="process"
          title={<a href="#contact">Contact information</a>}
        />
        <Step status="wait" title={<a href="#segmentation">Segmentation</a>} />
        <Step status="finish" title={<a href="#history">History</a>} />
      </Steps>
    </StatusFormContent>
  );
};

export default StatusForm;
