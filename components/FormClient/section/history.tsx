import React from "react";
import { Steps } from "antd";

const { Step } = Steps;

import { Row, TitleSectionForm, HistoryContainer } from "./styled";

const History: React.FunctionComponent<{}> = () => {
  return (
    <>
      <Row>
        <TitleSectionForm>History updates</TitleSectionForm>
      </Row>
      <Row>
        <HistoryContainer className="history-content">
          <Steps progressDot current={1} direction="vertical">
            <Step
              title="Change #Mobile_Number"
              description="Esta interesado en poder avanzar con nuestra propuesta que puede llegar a ser mejor."
            />
            <Step
              title="Change #Mobile_Number"
              description="Esta interesado en poder avanzar con nuestra propuesta que puede llegar a ser mejor."
            />
            <Step
              title="Delete #Contact"
              description="Esta interesado en poder avanzar con nuestra propuesta que puede llegar a ser mejor."
            />
          </Steps>
        </HistoryContainer>
      </Row>
    </>
  );
};

export default History;
