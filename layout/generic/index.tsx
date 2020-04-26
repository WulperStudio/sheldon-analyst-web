import React from "react";
import { Layout, Menu } from "antd";
import { ContentMain, LogoSheldon } from "./styled";
const { Header, Footer, Content, Sider } = Layout;

export type NavTags = "login" | "register" | "recover" | undefined;
export const ContextNavTags = React.createContext<NavTags>(undefined);

const LayoutGeneric: React.FunctionComponent<{}> = (props) => {
  let location = undefined;
  if (typeof window !== "undefined") {
    const pathUrl = window.location.href;
    location = [pathUrl.substr(pathUrl.lastIndexOf("/") + 1)];
  }
  const [route, setRoute] = React.useState<NavTags>(undefined);
  return (
    <Layout>
      <Header>
        <LogoSheldon onClick={() => setRoute(undefined)}>
          Sheldon Contacts
        </LogoSheldon>
      </Header>

      <Layout>
        <Sider>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={location}>
            <Menu.Item key="login" onClick={() => setRoute("login")}>
              <span>LogIn</span>
            </Menu.Item>
            <Menu.Item key="register" onClick={() => setRoute("register")}>
              <span>Register</span>
            </Menu.Item>
            <Menu.Item key="recover" onClick={() => setRoute("recover")}>
              <span>Recover Password</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content>
          <ContextNavTags.Provider value={route}>
            <ContentMain>{props.children}</ContentMain>
          </ContextNavTags.Provider>
        </Content>
      </Layout>

      <Footer style={{ textAlign: "center" }}>
        Sheldon Company ©2020 Created by RBM91
      </Footer>
    </Layout>
  );
};

export default LayoutGeneric;
