import React from "react";
import { Form } from "antd";

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
      <Form className="form-clients" style={{ width: "100%" }}>
        <Content>
          <StatusForm />
          <CompanyInfo />
          <DecisionMaker />
          <Segmentation />
          <History />
        </Content>
      </Form>
    </>
  );
};

export default FormClient;
