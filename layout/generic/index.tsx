import React from "react";
import { Layout } from "antd";
import Link from "next/link";
import { ContentMain, LogoSheldon } from "./styled";
const { Header, Footer, Content } = Layout;

interface Props {
  background?: string;
}

export const LayoutGeneric: React.FunctionComponent<Props> = (props) => {
  return (
    <Layout>
      <Header>
        <LogoSheldon>
          <Link href="/">
            <a style={{ color: "white" }}>Sheldon Analyst</a>
          </Link>
        </LogoSheldon>
      </Header>

      <Layout style={{ backgroundColor: props.background || "white" }}>
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
