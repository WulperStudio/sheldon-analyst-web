import React from "react";
import { Layout } from "antd";
import { ContentMain } from "./styled";
const { Content, Sider } = Layout;

import {
  SideButtons,
  SideBarButtons,
} from "../../components/TableClient/components";

import * as Rocket from "@assets/rocket.svg";

export const LayoutClear: React.FunctionComponent<{}> = (props) => {
  return (
    <>
      <div id="table-header-content"></div>
      <Layout className="layout-principal-clear">
        <Sider className="aside-menu-principal">
          <SideBarButtons />
        </Sider>
        <Layout style={{ backgroundColor: "#f1f4f9" }}>
          <Content>
            <div className="content-about-table">
              <SideButtons />
              <div className="about-table">
                <span>
                  <img className="icon-rocket" src={Rocket} />
                  12.587 prospects
                </span>
                <div className="wrapper-buttons">
                  <button>Order By</button>

                  <div className="wrapper-list-btn">
                    <button>Add contacts</button>
                    <div className="list">
                      <div>Add contact</div>
                      <div>Import CSV</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ContentMain>{props.children}</ContentMain>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
