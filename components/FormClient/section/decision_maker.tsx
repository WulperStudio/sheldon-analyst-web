import React from "react";

import SimpleInputText from "./components/simple_input_text";

import { Row, TitleSectionForm } from "./styled";
import * as TestSvg from "@assets/test.svg";

const DecisionMaker: React.FunctionComponent<{}> = () => {
  return (
    <>
      <Row>
        <TitleSectionForm>1st Decision Maker</TitleSectionForm>
      </Row>
      <Row>
        <SimpleInputText
          name="name"
          placeholder="Name & Lastname"
          AddIcon={TestSvg}
        />
        <SimpleInputText
          name="cell_phone"
          placeholder="Mobile phone"
          AddIcon={TestSvg}
        />
      </Row>
      <Row>
        <SimpleInputText
          name=""
          placeholder="Company email"
          AddIcon={TestSvg}
        />
        <SimpleInputText name="persona_email" placeholder="Personal email" />
      </Row>
      <Row>
        <SimpleInputText
          name="facebook"
          placeholder="Facebook"
          AddIcon={TestSvg}
        />
        <SimpleInputText name="personal_linkedin" placeholder="Linkedin" />
      </Row>
    </>
  );
};

export default DecisionMaker;
