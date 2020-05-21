import React from "react";
import getConfig from "next/config";
import { connect, ConnectedProps } from "react-redux";
import { Upload, message, Table, Tag, Drawer, Button } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { v4 as uid } from "uuid";

const { Dragger } = Upload;

import { LayoutGeneric } from "../layout";
import { getSession } from "../components/Login/storage";

const {
  publicRuntimeConfig: { API_ANALYST },
} = getConfig();

const TagStatus = (status: string) => (
  <>
    <Tag color={status === "success" ? "green" : "volcano"}>
      {status.toUpperCase()}
    </Tag>
  </>
);

const PrintLogs = (type: string) => (
  list: Array<{ key: string; value: string }>
) => {
  const [visible, setVisible] = React.useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Button type={type === "d" ? "danger" : "ghost"} onClick={showDrawer}>
        View {type === "d" ? "Danger" : "Warning"}
      </Button>
      <Drawer
        title={type === "d" ? "Danger" : "Warning"}
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        width={500}
      >
        {list.map((item: { key: string; value: string }, key: number) => (
          <div key={key} style={{ margin: "0 0 20px 0" }}>
            <span style={{ color: type === "d" ? "red" : "yellow" }}>
              <b>{item.key}</b>
            </span>
            :&nbsp;&nbsp; &quot;<span>{item.value}</span>&quot;
          </div>
        ))}
      </Drawer>
    </>
  );
};

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Danger",
    dataIndex: "danger",
    key: "danger",
    render: PrintLogs("d"),
  },
  {
    title: "Warning",
    dataIndex: "warning",
    key: "warning",
    render: PrintLogs("w"),
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: TagStatus,
  },
];

const ConfigUploadCsv = {
  name: "csv",
  multiple: false,
  action: `${API_ANALYST}/upload_contacts`,
  headers: {
    Authorization: getSession() || "",
  },
};

const onChange = (setDataTable: Function) => (info: any) => {
  const { status } = info.file;
  if (status !== "uploading") {
    const { data } = info.file.response;
    const array = Object.keys(data).map((item: string) => {
      return {
        key: uid(),
        id: data[item].id,
        danger: Object.keys(data[item].danger).map((danger: string) => {
          return { key: [danger], value: data[item].danger[danger][0] };
        }),
        warning: Object.keys(data[item].warning).map((warning: string) => {
          return { key: [warning], value: data[item].warning[warning][0] };
        }),
        status: data[item].status,
      };
    });
    setDataTable(array);
  }
  if (status === "done") {
    message.success(`${info.file.name} file uploaded successfully.`);
  } else if (status === "error") {
    message.error(`${info.file.name} file upload failed.`);
  }
};

const connector = connect(null, null);

type Props = ConnectedProps<typeof connector>;

const TableContactsPage: React.FunctionComponent<Props> = () => {
  const [dataTable, setDataTable] = React.useState([]);
  return (
    <LayoutGeneric>
      {dataTable.length == 0 ? (
        <Dragger
          {...ConfigUploadCsv}
          onChange={onChange(setDataTable)}
          style={{ padding: "10px" }}
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
        </Dragger>
      ) : (
        <Table dataSource={dataTable} columns={columns} />
      )}
    </LayoutGeneric>
  );
};

export default connector(TableContactsPage);
