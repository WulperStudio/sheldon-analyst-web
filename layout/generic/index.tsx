import React from "react";
import { Layout } from "antd";
import { ContentMain, LogoSheldon } from "./styled";
const { Header, Footer, Content } = Layout;

const LayoutGeneric: React.FunctionComponent<{}> = (props) => {
  return (
    <Layout>
      <Header>
        <LogoSheldon>Sheldon Analyst</LogoSheldon>
      </Header>

      <Layout>
        <Content>
          <ContentMain>{props.children}</ContentMain>
        </Content>
      </Layout>

      <Footer style={{ textAlign: "center" }}>
        Sheldon Analyst ©2020 Created by RBM91
      </Footer>
    </Layout>
  );
};

export default LayoutGeneric;
