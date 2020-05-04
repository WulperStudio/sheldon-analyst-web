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
  AddIcon?: string;
}

const SimpleSelect: React.FunctionComponent<Props> = (props) => {
  return (
    <>
      <Form.Item
        name={props.name}
        className="standard-item"
        label={props.label || props.placeholder}
      >
        <Select
          className={`select-standard ${
            props.AddIcon ? "select-standard-with-icon" : ""
          }`}
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

export default SimpleSelect;
