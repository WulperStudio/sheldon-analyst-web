import React from "react";
import { Form, Input } from "antd";

import { IconItem } from "../styled";

interface Props {
  placeholder: string;
  label?: string;
  AddIcon?: string;
  vdStatus?: "success" | "warning" | "error" | "validating";
}

const SimpleInputText: React.FunctionComponent<Props> = (props) => {
  return (
    <>
      <Form.Item
        className="standard-item"
        label={props.label || props.placeholder}
        hasFeedback={true}
        validateStatus={props.vdStatus}
      >
        <Input
          className={`input-text ${
            props.AddIcon ? "input-text-with-icon" : ""
          }`}
          prefix={
            props.AddIcon ? (
              <IconItem className="icon-select-standard">
                <img src={props.AddIcon} />
              </IconItem>
            ) : null
          }
          placeholder={props.placeholder}
        />
      </Form.Item>
    </>
  );
};

export default SimpleInputText;
