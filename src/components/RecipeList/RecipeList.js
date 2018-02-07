import React, { PureComponent } from "react";
import RecipeCard from "./RecipeCard";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";

class RecipeList extends PureComponent {
  componentDidMount() {
    this.props.getRecipeList();
  }

  render() {
    const { recipeList } = this.props;

    return (
      <Row type="flex" gutter={24}>
        {recipeList.map(recipe => (
          <Col span={5} key={recipe.sys.id}>
            <Link to={`/recipe/${recipe.sys.id}`}>
              <RecipeCard recipe={recipe} />
            </Link>
          </Col>
        ))}
      </Row>
    );
  }
}

export default RecipeList;
