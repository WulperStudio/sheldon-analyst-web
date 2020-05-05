/* eslint-disable react/jsx-no-undef */
import React from "react";
import { Form, Button, Input } from "antd";

const Test: React.FunctionComponent<{}> = () => {
  return (
    <Form.List name="testers">
      {(fields, { add, remove }) => {
        return (
          <>
            {fields.map((field, index) => (
              <Form.Item
                label={index === 0 ? "Passengers" : ""}
                required={false}
                key={field.key}
              >
                <Form.Item
                  {...field}
                  validateTrigger={["onChange", "onBlur"]}
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message:
                        "Please input passenger's name or delete this field.",
                    },
                  ]}
                  noStyle
                >
                  <Input
                    placeholder="passenger name"
                    style={{ width: "60%" }}
                  />
                </Form.Item>
                {fields.length > 1 ? (
                  <Button
                    type="dashed"
                    onClick={() => {
                      remove(field.name);
                    }}
                    style={{ width: "60%" }}
                  >
                    Remove field
                  </Button>
                ) : null}
              </Form.Item>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => {
                  add();
                }}
                style={{ width: "60%" }}
              >
                Add field
              </Button>
            </Form.Item>
          </>
        );
      }}
    </Form.List>
  );
};

export default Test;
