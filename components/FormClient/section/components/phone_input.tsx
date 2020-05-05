import React from "react";
import { Form, Input, Select } from "antd";
import { v4 as uid } from "uuid";

import {
  defaultValidator,
  Validator,
} from "../../../../helpers/valid_form_client";
import { CodeNumberModel } from "../../type";

const { Option } = Select;

interface Props {
  name: string | Array<string>;
  nameCode: string | Array<string>;
  placeholder: string;
  data: Array<CodeNumberModel>;
  label?: string;
  AddIcon?: string;
  required?: boolean;
  vdStatus?: "success" | "warning" | "error" | "validating";
  validator?: Validator;
}

const PhoneNumber: React.FunctionComponent<Props> = (props) => {
  return (
    <Form.Item
      name={props.name}
      className="standard-item"
      label={props.label || props.placeholder}
      validateStatus={props.vdStatus}
      rules={[
        {
          required: props.required || false,
          whitespace: true,
          message: "Please input passenger's name or delete this field.",
        },
        {
          validator: props.validator || defaultValidator,
        },
      ]}
    >
      <Input
        className={`input-text${
          props.AddIcon ? " input-text-with-icon" : ""
        } phone-input`}
        addonBefore={
          <Form.Item name={props.nameCode} noStyle>
            <Select style={{ width: 110 }}>
              {props.data.map((item) => (
                <Option key={uid()} value={item.Dial} title={item.Iso3}>
                  +{item.Dial}
                </Option>
              ))}
            </Select>
          </Form.Item>
        }
        placeholder={props.placeholder}
      />
    </Form.Item>
  );
};

export default PhoneNumber;
