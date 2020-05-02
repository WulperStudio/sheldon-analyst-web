import React from "react";
import { Form, Select } from "antd";
import { v4 as uid } from "uuid";

const { Option } = Select;

interface Props {
  name: string;
  data: Array<string>;
  placeholder: string;
  label?: string;
  addTag: boolean;
  required?: boolean;
}

const MultiSelect: React.FunctionComponent<Props> = (props) => {
  return (
    <>
      <Form.Item
        name={props.name}
        className="standard-item"
        label={props.label || props.placeholder}
        rules={[
          {
            required: props.required || false,
            type: "array",
            message: "Please input passenger's name or delete this field.",
          },
        ]}
      >
        <Select
          mode="tags"
          className="select-multi"
          placeholder={props.placeholder}
        >
          {props.data.map((item) => (
            <Option key={uid()} value={item}>
              {item}
            </Option>
          ))}
        </Select>
      </Form.Item>
    </>
  );
};

export default MultiSelect;
