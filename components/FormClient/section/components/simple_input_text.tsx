import React from "react";
import { Form, Input } from "antd";

import { RuleType } from "rc-field-form/lib/interface";

import { IconItem } from "../styled";

import {
  defaultValidator,
  Validator,
} from "../../../../helpers/valid_form_client";

interface Props {
  name: string;
  placeholder: string;
  label?: string;
  AddIcon?: string;
  vdStatus?: "success" | "warning" | "error" | "validating";
  onBlurValue?: (_: string) => void;
  validator?: Validator;
  required?: boolean;
  type?: RuleType;
}

const SimpleInputText: React.FunctionComponent<Props> = (props) => {
  return (
    <Form.Item
      name={props.name}
      className="standard-item"
      label={props.label || props.placeholder}
      validateStatus={props.vdStatus}
      rules={[
        {
          type: props.type || "string",
        },
        {
          required: props.required || false,
          whitespace: true,
        },
        {
          validator: props.validator || defaultValidator,
        },
      ]}
    >
      <Input
        className={`input-text ${props.AddIcon ? "input-text-with-icon" : ""}`}
        prefix={
          props.AddIcon ? (
            <IconItem className="icon-select-standard">
              <img src={props.AddIcon} />
            </IconItem>
          ) : null
        }
        placeholder={props.placeholder}
        onBlur={(e) => props.onBlurValue && props.onBlurValue(e.target.value)}
      />
    </Form.Item>
  );
};

export default SimpleInputText;
