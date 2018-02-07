import React, { PureComponent } from "react";
import "antd/dist/antd.css";
import { Layout as LayoutAntd, Menu } from "antd";
import styled from "styled-components";
import { Route, Switch, Link } from "react-router-dom";
import RecipeList from "../RecipeList";
import IngredientList from "../IngredientList";
import Recipe from "../Recipe";

const { Header, Content } = LayoutAntd;

const LayoutAntdStyled = styled(LayoutAntd)`
  min-height: 100vh;
`;

const RoutingContent = styled.div`
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
            <Menu.Item key="1">
              <Link to="/">Recettes</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/ingredient">Ingrédients</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <ContentStyled>
          <RoutingContent>
            <Switch>
              <Route path="/recipe/:id" component={Recipe} />
              <Route path="/ingredient" component={IngredientList} />
              <Route path="/" component={RecipeList} />
            </Switch>
          </RoutingContent>
        </ContentStyled>
      </LayoutAntdStyled>
    );
  }
}

export default Layout;
