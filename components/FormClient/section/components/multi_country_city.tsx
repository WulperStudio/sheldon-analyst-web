import React from "react";
import { Form, Select } from "antd";
import { v4 as uid } from "uuid";
import { CountryModel } from "../../type";

const { Option } = Select;

interface Props {
  name: string;
  data: Array<CountryModel>;
  placeholder: string;
  label?: string;
  addTag: boolean;
  required?: boolean;
  twins?: 1 | 2 | undefined;
  search?: (_: string) => void;
  mode?: "multiple" | "tags";
  vdStatus?: "success" | "warning" | "error" | "validating";
}

const MultiCountryCities: React.FunctionComponent<Props> = (props) => {
  return (
    <>
      <Form.Item
        name={props.name}
        className={`standard-item ${props.twins === 1 ? "twins-first" : ""} ${
          props.twins === 2 ? "twins-last" : ""
        }`}
        validateStatus={props.vdStatus}
        label={props.label || props.placeholder}
        rules={[
          {
            required: props.required || false,
            message: "Please input passenger's name or delete this field.",
          },
        ]}
      >
        <Select
          mode={props.mode}
          showSearch={!props.mode}
          className={`${
            props.mode ? "select-multi" : "select-standard search-add"
          }`}
          placeholder={props.placeholder}
          onSearch={(e) => (props.search ? props.search(e) : undefined)}
        >
          {props.data.map((item) => (
            <Option key={uid()} value={`${item.country}, ${item.sortCities}`}>
              {item.country},&nbsp;{item.sortCities}
            </Option>
          ))}
        </Select>
      </Form.Item>
    </>
  );
};

export default MultiCountryCities;
