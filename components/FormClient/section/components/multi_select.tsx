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
  twins?: 1 | 2 | undefined;
  search?: (_: string) => void;
  mode?: "multiple" | "tags";
}

const MultiSelect: React.FunctionComponent<Props> = (props) => {
  return (
    <>
      <Form.Item
        name={props.name}
        className={`standard-item ${props.twins === 1 ? "twins-first" : ""} ${
          props.twins === 2 ? "twins-last" : ""
        }`}
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
          mode={props.mode || "tags"}
          className="select-multi"
          placeholder={props.placeholder}
          onSearch={(e) => (props.search ? props.search(e) : null)}
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
