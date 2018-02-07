import React, { PureComponent, Fragment } from "react";
import { Spin } from "antd";
import { Row, Col, Card } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom"
import IngredientListOfRecipe from "./IngredientListOfRecipe";
import RecipeCard from "../RecipeList/RecipeCard"

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
            <Row style={{marginTop: '20px'}}>
            {recipe.fields.recipes && recipe.fields.recipes.map(recipe => (
              <Col span={5} key={recipe.sys.id}>
                <Link to={`/recipe/${recipe.sys.id}`}>
                  <RecipeCard recipe={recipe} />
                </Link>
              </Col>
            ))}
            </Row>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default Recipe;
