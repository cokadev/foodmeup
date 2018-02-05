import React, { PureComponent, Fragment } from "react";
import { Spin } from "antd";
import { Row, Col, Card } from "antd";
import styled from "styled-components";

const ColMarginLef = styled(Col)`
  margin-left: 20px;
`;

const RecipeName = styled.h1`
  font-size: 48px;
`;

class Recipe extends PureComponent {
  componentDidMount() {
    this.props.getRecipe(this.props.match.params.id);
  }

  render() {
    const { recipe } = this.props;
    console.log(recipe);

    if (!recipe) return <Spin />;

    return (
      <Fragment>
        <Row type="flex" justify="start">
          <Col span={6}>
            <Card
              cover={
                <img
                  alt={recipe.fields.name}
                  src={recipe.fields.picture.fields.file.url}
                />
              }
            />
          </Col>
          <ColMarginLef span={12}>
            <RecipeName>{recipe.fields.name}</RecipeName>
          </ColMarginLef>
        </Row>
      </Fragment>
    );
  }
}

export default Recipe;
