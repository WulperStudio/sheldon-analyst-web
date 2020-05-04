import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { Form, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import { loadCodeNum } from "../action";

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

const mapDispatch = (dispatch: Function) => {
  return {
    loadCodeNumAct: () => {
      dispatch(loadCodeNum());
    },
  };
};

const connector = connect(null, mapDispatch);

type Props = ConnectedProps<typeof connector>;

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not validate email!",
    number: "${label} is not a validate number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

/* eslint-disable @typescript-eslint/camelcase */
const ini = {
  company_name: "WhatsApp",
  company_size: "big",
  company_site: "https://web.whatsapp.com/",
  linkedin: "https://www.linkedin.com",
  competitors: ["telegram"],
  name_1: "Rafael",
  cell_phone_1_codes: "1",
  cell_phone_1: "9999999999",
  company_email_1: "ts@ts.ts",
  persona_email_1: "ts@ts.ts",
  facebook_1: "fb.com",
  personal_linkedin_1: "https://www.linkedin.com",
  country: "Russia, Moscow",
  interests: ["TVs", "Football", "Travel"],
  sector: ["Software", "Insurance"],
  area: ["marketing"],
  position: ["assistant"],
  services: ["Flour - Semolina"],
  nse: "Regular",
  countable_name: "Jose",
  countable_phone_codes: "1",
  countable_phone: "9990292992",
  countable_email: "ts@ts.ts",
  company_account: "99288383994",
};

const FormClient: React.FunctionComponent<Props> = (props) => {
  const [decision, setDecision] = React.useState<Array<number>>([1]);
  React.useEffect(() => {
    props.loadCodeNumAct();
  }, []);
  return (
    <>
      <TitleFormGeneral>Clients Form</TitleFormGeneral>
      <Form
        className="form-clients"
        style={{ width: "100%" }}
        onFinish={(v) => console.log(v)}
        validateMessages={validateMessages}
        initialValues={{ codPhoneOpc: "1", ...ini }}
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

export default connector(FormClient);
