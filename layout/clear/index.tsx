import React from "react";
import { Layout } from "antd";
import { ContentMain } from "./styled";
const { Content, Sider } = Layout;

import { SideButtons, SideBarButtons } from "../../components/TableClient/components";


export const LayoutClear: React.FunctionComponent<{}> = (props) => {
  return (
    <Layout className="layout-principal-clear">
      <Sider className="aside-menu-principal">
        <SideBarButtons />
      </Sider>
      <Layout style={{ backgroundColor: "#f1f4f9" }}>
        <Content>
          <SideButtons />
          <ContentMain>{props.children}</ContentMain>
        </Content>
      </Layout>
    </Layout>
  );
};
