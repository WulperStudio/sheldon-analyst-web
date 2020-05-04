import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { CloseSquareOutlined } from "@ant-design/icons";

import { RxStatusFormClient, CodeNumberModel } from "../type";

import SimpleInputText from "./components/simple_input_text";
import PhoneInput from "./components/phone_input";

import { Row, TitleSectionForm, CloseDecisionMaker } from "./styled";
import {
  validatePhoneNumber,
  validateFieldUrl,
} from "../../../helpers/valid_form_client";

interface PropsParent {
  reference: number;
  onClosing: Function;
  isClosing: boolean;
}

interface PropsMapState {
  codeNum: Array<CodeNumberModel>;
}

const mapState = (state: RxStatusFormClient): PropsMapState => {
  return {
    codeNum: state.FormClientReducer.codeNum,
  };
};

const connector = connect(mapState);

type PropsRedux = ConnectedProps<typeof connector>;

type Props = PropsRedux & PropsParent;

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
        />
        <PhoneInput
          name={`cell_phone_${props.reference}`}
          placeholder="Mobile phone"
          required={true}
          validator={validatePhoneNumber("Mobile phone")}
          data={props.codeNum}
        />
      </Row>
      <Row>
        <SimpleInputText
          name={`company_email_${props.reference}`}
          placeholder="Company email"
          type="email"
        />
        <SimpleInputText
          name={`persona_email_${props.reference}`}
          placeholder="Personal email"
          type="email"
        />
      </Row>
      <Row>
        <SimpleInputText
          name={`facebook_${props.reference}`}
          placeholder="Facebook"
          validator={validateFieldUrl("Facebook")}
        />
        <SimpleInputText
          name={`personal_linkedin_${props.reference}`}
          placeholder="Linkedin"
          validator={validateFieldUrl("Linkedin")}
        />
      </Row>
    </>
  );
};

export default connector(DecisionMaker);
