import React from "react";
import { CloseSquareOutlined } from "@ant-design/icons";

import SimpleInputText from "./components/simple_input_text";

import { Row, TitleSectionForm, CloseDecisionMaker } from "./styled";
import * as TestSvg from "@assets/test.svg";

interface Props {
  reference: number;
  onClosing: Function;
  isClosing: boolean;
}

const DecisionMaker: React.FunctionComponent<Props> = (props) => {
  return (
    <>
      <Row>
        <TitleSectionForm>{props.reference} Decision Maker</TitleSectionForm>
        {props.isClosing ? (
          <CloseDecisionMaker onClick={() => props.onClosing()}>
            <CloseSquareOutlined />
          </CloseDecisionMaker>
        ) : null}
      </Row>
      <Row>
        <SimpleInputText
          name={`name_${props.reference}`}
          placeholder="Name & Lastname"
          AddIcon={TestSvg}
        />
        <SimpleInputText
          name={`cell_phone_${props.reference}`}
          placeholder="Mobile phone"
          AddIcon={TestSvg}
        />
      </Row>
      <Row>
        <SimpleInputText
          name={`company_email_${props.reference}`}
          placeholder="Company email"
          AddIcon={TestSvg}
        />
        <SimpleInputText name="persona_email" placeholder="Personal email" />
      </Row>
      <Row>
        <SimpleInputText
          name={`facebook_${props.reference}`}
          placeholder="Facebook"
          AddIcon={TestSvg}
        />
        <SimpleInputText
          name={`personal_linkedin_${props.reference}`}
          placeholder="Linkedin"
        />
      </Row>
    </>
  );
};

export default DecisionMaker;
