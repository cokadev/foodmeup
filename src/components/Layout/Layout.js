import React, { PureComponent } from "react";
import "antd/dist/antd.css";
import { Layout as LayoutAntd, Menu, Breadcrumb } from "antd";
import styled from "styled-components";
const { Header, Content } = LayoutAntd;

const LayoutAntdStyled = styled(LayoutAntd)`
  min-height: 100vh;
`;

const RoutingContent = styled.div`
  background: #fff;
  padding: 24px;
  min-height: 280px;
  margin-top: 20px;
`;

const ContentStyled = styled(Content)`
  padding: 0 50px;
`;

class Layout extends PureComponent {
  render() {
    return (
      <LayoutAntdStyled>
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">Recettes</Menu.Item>
            <Menu.Item key="2">Ingrédients</Menu.Item>
          </Menu>
        </Header>
        <ContentStyled>
          <RoutingContent>Content</RoutingContent>
        </ContentStyled>
      </LayoutAntdStyled>
    );
  }
}

export default Layout;
