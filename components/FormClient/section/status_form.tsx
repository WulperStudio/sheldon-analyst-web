import React from "react";
import { Steps } from "antd";

const { Step } = Steps;

import { StatusFormContent } from "./styled";

const StatusForm: React.FunctionComponent<{}> = () => {
  return (
    <StatusFormContent className="status-form-container">
      <Steps progressDot current={1}>
        <Step title="Company information" />
        <Step title="Contact information" />
        <Step title="Segmentation" />
        <Step title="Countable information" />
      </Steps>
    </StatusFormContent>
  );
};

export default StatusForm;
