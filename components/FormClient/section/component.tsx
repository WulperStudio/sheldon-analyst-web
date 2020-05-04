import React from "react";
import { Form, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import { TitleFormGeneral, Content } from "./styled";

import StatusForm from "./status_form";
import CompanyInfo from "./company_info";
import DecisionMaker from "./decision_maker";
import Segmentation from "./segmentation";
import CountableInfo from "./countable_info";
import History from "./history";

const removeDecision = (
  decision: Array<number>,
  value: number
): Array<number> => {
  const aux = [...decision];
  const index = aux.indexOf(value);
  if (index > -1) {
    aux.splice(index, 1);
  }
  return aux;
};

const FormClient: React.FunctionComponent<{}> = () => {
  const [decision, setDecision] = React.useState<Array<number>>([1]);
  return (
    <>
      <TitleFormGeneral>Clients Form</TitleFormGeneral>
      <Form
        className="form-clients"
        style={{ width: "100%" }}
        onFinish={(v) => console.log(v)}
        initialValues={{ codPhoneOpc: "1" }}
      >
        <Content>
          <StatusForm />
          <CompanyInfo />
          {decision.map((item, index) => (
            <DecisionMaker
              key={item}
              reference={index + 1}
              isClosing={decision.length > 1}
              onClosing={() => setDecision(removeDecision(decision, item))}
            />
          ))}
          <Button
            type="primary"
            onClick={() =>
              setDecision([...decision, decision[decision.length - 1] + 1])
            }
          >
            <PlusOutlined />
            Add Decision Maker
          </Button>
          <br />

          <Segmentation />
          <CountableInfo />
          <History />
          <br />
          <br />
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Content>
      </Form>
    </>
  );
};

export default FormClient;
