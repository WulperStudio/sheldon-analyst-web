import React from "react";

import {
  CheckBoxWithText,
  WrapperCheckBox,
  CheckMark,
  CheckBoxText,
} from "../../styled";

interface Props {
  size: number;
  checked?: boolean;
  text?: string;
}

const CheckboxStandard: React.FunctionComponent<Props> = (props) => {
  return (
    <CheckBoxWithText>
      <WrapperCheckBox size={props.size}>
        <input type="checkbox" checked={props.checked} />
        <CheckMark></CheckMark>
      </WrapperCheckBox>
      {props.text ? <CheckBoxText>{props.text}</CheckBoxText> : null}
    </CheckBoxWithText>
  );
};

export default CheckboxStandard;
