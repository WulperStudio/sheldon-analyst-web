import React from "react";
import { Form, Select } from "antd";
import { v4 as uid } from "uuid";
import { PlusSquareOutlined } from "@ant-design/icons";

const { Option } = Select;

import { BtnSelectMultiple, IconItem } from "../styled";

interface Props {
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
        className="standard-item"
        label={props.label || props.placeholder}
      >
        {props.addTag ? (
          <BtnSelectMultiple title="Add new tag">
            <PlusSquareOutlined />
          </BtnSelectMultiple>
        ) : null}
        {props.AddIcon ? (
          <IconItem className="icon-select-standard ant-input-prefix">
            <img src={props.AddIcon} />
          </IconItem>
        ) : null}
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
