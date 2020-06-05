import React from "react";
import { Select } from "antd";
import { v4 as uid } from "uuid";

const { Option } = Select;

import { WrapperFloatWindow } from "./styled";

interface Props {
  active?: boolean;
  data: Array<string>;
  placeholder?: string;
  onChange?: (_: [string]) => void;
}

const FloatSelectFilter: React.FunctionComponent<Props> = (props) => {
  return (
    <WrapperFloatWindow className="active-for-focus-btn" active={props.active}>
      <Select
        mode="tags"
        className="select-multi-filter-table"
        placeholder={props.placeholder}
        // onSearch={(e) => (props.search ? props.search(e) : null)}
        onChange={(value) =>
          props.onChange && props.onChange(value as [string])
        }
      >
        {props.data.map((item) => (
          <Option key={uid()} value={item}>
            {item}
          </Option>
        ))}
      </Select>
    </WrapperFloatWindow>
  );
};

export default FloatSelectFilter;
