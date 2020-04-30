import React from "react";
import { Form, Input } from "antd";

import SimpleInputText from "./components/simple_input_text";

import { Row, TitleSectionForm, IconItem } from "./styled";
import * as TestSvg from "@assets/test.svg";

const DecisionMaker: React.FunctionComponent<{}> = () => {
  return (
    <>
      <Row>
        <TitleSectionForm>1st Decision Maker</TitleSectionForm>
      </Row>
      <Row>
        <SimpleInputText placeholder="Name & Lastname" AddIcon={TestSvg} />
        <SimpleInputText placeholder="Mobile phone" AddIcon={TestSvg} />
      </Row>
      <Row>
        <SimpleInputText placeholder="Company email" AddIcon={TestSvg} />
        <SimpleInputText placeholder="Personal email" />
      </Row>
      <Row>
        <SimpleInputText placeholder="Facebook" AddIcon={TestSvg} />
        <SimpleInputText placeholder="Linkedin" />
      </Row>
    </>
  );
};

export default DecisionMaker;
