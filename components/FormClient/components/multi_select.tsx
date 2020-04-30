import React from "react";
import { Form, Select } from "antd";
import { v4 as uid } from "uuid";
import { PlusSquareOutlined } from "@ant-design/icons";

const { Option } = Select;

import { BtnSelectMultiple } from "../styled";

interface Props {
  data: Array<string>;
  placeholder: string;
  label?: string;
  addTag: boolean;
}

const addTagFn = (
  items: Array<string>,
  search: string | undefined,
  selected: Array<string>,
  setItems: Function,
  setSearch: Function,
  setSelected: Function
): void => {
  if (search) {
    search = search.trim();
    const repeat = items.filter((value) => value === search);
    if (repeat.length === 0) {
      items.push(search);
      setItems(items);
      selected.push(search);
      setSelected(selected);
      setSearch(undefined);
    }
  }
};

const MultiSelect: React.FunctionComponent<Props> = (props) => {
  const [items, setItems] = React.useState<Array<string>>(props.data);
  const [selected, setSelected] = React.useState<Array<string>>([]);
  const [search, setSearch] = React.useState<string | undefined>(undefined);

  return (
    <>
      <Form.Item
        className="standard-item"
        label={props.label || props.placeholder}
      >
        {props.addTag ? (
          <BtnSelectMultiple
            title="Add new tag"
            onClick={() =>
              addTagFn(
                items,
                search,
                selected,
                setItems,
                setSearch,
                setSelected
              )
            }
          >
            <PlusSquareOutlined />
          </BtnSelectMultiple>
        ) : null}
        <Select
          mode="multiple"
          className="select-multi"
          placeholder={props.placeholder}
          defaultValue={selected}
          onSearch={(e) => setSearch(e)}
        >
          {items.map((item) => (
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
