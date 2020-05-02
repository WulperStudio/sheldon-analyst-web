import React from "react";
import { Form, Button, Input } from "antd";

import { TitleFormGeneral, Content } from "./styled";

import StatusForm from "./status_form";
import CompanyInfo from "./company_info";
import DecisionMaker from "./decision_maker";
import Segmentation from "./segmentation";
import History from "./history";

const FormClient: React.FunctionComponent<{}> = () => {
  return (
    <>
      <TitleFormGeneral>Clients Form</TitleFormGeneral>
      <Form
        className="form-clients"
        style={{ width: "100%" }}
        onFinish={(v) => console.log(v)}
      >
        <Content>
          <StatusForm />
          <CompanyInfo />
          <DecisionMaker />
          <Segmentation />
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
