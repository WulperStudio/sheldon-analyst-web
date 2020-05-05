import React from "react";
import { connect, ConnectedProps } from "react-redux";

import { RxStatusFormClient, CodeNumberModel } from "../type";

import SimpleInputText from "./components/simple_input_text";
import PhoneInput from "./components/phone_input";
import { Row, TitleSectionForm } from "./styled";
import {
  validatePhoneNumber,
  validateNumberInteger,
} from "../../../helpers/valid_form_client";

interface PropsMapState {
  codeNum: Array<CodeNumberModel>;
}

const mapState = (state: RxStatusFormClient): PropsMapState => {
  return {
    codeNum: state.FormClientReducer.codeNum,
  };
};

const connector = connect(mapState);

type Props = ConnectedProps<typeof connector>;

const CountableInfo: React.FunctionComponent<Props> = (props) => {
  return (
    <>
      <Row>
        <TitleSectionForm>Countable information</TitleSectionForm>
      </Row>
      <Row>
        <SimpleInputText
          name="countable_name"
          placeholder="Name & Lastname"
          required={true}
        />
        {/* <PhoneInput
          name="countable_phone"
          placeholder="Mobile phone"
          required={true}
          validator={validatePhoneNumber("Mobile phone")}
          data={props.codeNum}
        /> */}
      </Row>
      <Row>
        <SimpleInputText
          name="countable_email"
          placeholder="Company email"
          type="email"
          required={true}
        />
        <SimpleInputText
          name="company_account"
          placeholder="Company Account"
          required={true}
          validator={validateNumberInteger("Company Account")}
        />
      </Row>
    </>
  );
};

export default connector(CountableInfo);
