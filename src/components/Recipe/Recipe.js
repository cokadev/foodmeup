import React, { PureComponent, Fragment } from "react";
import { Spin } from "antd";
import { Row, Col, Card } from "antd";
import styled from "styled-components";
import IngredientListOfRecipe from "./IngredientListOfRecipe";

const RecipeName = styled.h1`
  font-size: 48px;
`;

class Recipe extends PureComponent {
  componentDidMount() {
    this.props.getRecipe(this.props.match.params.id);
  }

  render() {
    const { recipe } = this.props;

    if (!recipe) return <Spin />;

    return (
      <Fragment>
        <Row type="flex" justify="space-around">
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
          <Col span={17}>
            <RecipeName>{recipe.fields.name}</RecipeName>
            <IngredientListOfRecipe
              ingredientList={recipe.fields.ingredients}
            />
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default Recipe;
